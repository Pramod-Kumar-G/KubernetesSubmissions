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

module.exports = randomStringGenerator;
