const fs = require("fs");
const http = require("http");
const fileName = "welcome.txt";

fs.open(fileName, "w+", function (err, fd) {
  //fd is a file descriptor just a refrence to the opened file
  if (err) {
    console.log(err);
  } else {
    ///write
    fs.writeFile(fileName, "Hello Node", function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("data writtem successfully");
    });

    console.log(fd);
    console.log("file opened successfully");
  }
});

const server = http.createServer(function (response, requesr) {
  ///read

  fs.readFile(fileName, function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
  });
});
server.listen(3000);
