const fs = require("fs");

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

const logToFile = () => {
  const date = new Date();
  const logData = date + " " + randomString + "\n";
  fs.appendFile("/mnt/shared/file.log/file.log", logData, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("data appended successfully!");
    }
  });
};

setInterval(logToFile, 5000);
