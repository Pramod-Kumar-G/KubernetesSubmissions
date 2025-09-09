const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server started in port", PORT));
