require("dotenv").config();
const getRandomWiki = async () => {
  const response = await fetch("https://en.wikipedia.org/wiki/Special:Random");
  console.log(response.url);
  return response.url;
};

const createTodo = async () => {
  const wikiUrl = await getRandomWiki();
  await fetch(process.env.BACKEND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: `Read ${wikiUrl}`,
    }),
  });
  console.log("Todo Added with wiki read");
};

createTodo();
