const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res) => {
  const stream=fs.createReadStream("sample.txt");
  stream.pipe();
});
server.listen(3000);