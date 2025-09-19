require("dotenv").config();
const app = require("express")();
const { Pool } = require("pg");

const PORT = process.env.PORT || 3000;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || "5432", 10),
});

const initializeDatabase = async () => {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS pongs (
        id INT PRIMARY KEY,
        count INT NOT NULL
      );
    `);
    console.log("Table 'pongs' is ready.");

    await client.query(`
      INSERT INTO pongs (id, count) VALUES (1, 0) ON CONFLICT (id) DO NOTHING;
    `);
    console.log("Counter row is ready.");
  } catch (err) {
    console.error("Database initialization failed!", err);
    process.exit(1);
  } finally {
    client.release();
  }
};

app.get("/pingpong", async (req, res) => {
  try {
    const result = await pool.query(
      "UPDATE pongs SET count = count + 1 WHERE id = 1 RETURNING count;",
    );

    if (result.rows.length === 0) {
      return res.status(500).send({ error: "Counter not found." });
    }

    const newCount = result.rows[0].count;
    res.status(200).send({ data: `Ping / Pongs: ${newCount}` });
  } catch (err) {
    console.error("Failed to update pong count:", err);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

const startServer = async () => {
  await initializeDatabase();
  app.listen(PORT, () => {
    console.log(`Ping pong server started on port ${PORT}`);
  });
};

startServer();
