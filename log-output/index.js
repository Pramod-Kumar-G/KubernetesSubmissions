const randomStringGenerator = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomNumber = Math.ceil(Math.random() * 20);
  let randomString = "";
  for (let i = 0; i < randomNumber; i++) {
    randomString += characters[Math.ceil(Math.random() * 61)];
  }
  return randomString;
};

const randomString = randomStringGenerator();
setInterval(() => {
  const date = new Date();
  console.log(date, randomString);
}, 5000);
