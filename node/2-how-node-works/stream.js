const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  /*  //创建流
  const stream = fs.createReadStream("./text.txt");

  stream.on("data", (chunk) => {
    res.write(chunk);
  });

  stream.on("end", () => {
    res.end();
  });

  stream.on("error", () => {
    res.statusCode = 500;
    res.end("file not found");
  }); */
  const stream = fs.createReadStream("./text.txt");
  const writeStream = fs.createWriteStream("./write.txt");
  stream.pipe(writeStream);
  writeStream.on("finish", () => {
    res.end("ok");
  });
});

server.listen(8000, "localhost", () => {
  console.log("server is runnung");
});
