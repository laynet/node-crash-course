const fs = require("fs");
const path = require("path");

//create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//   if (err) throw err;
//   console.log("folder created...");
// });

// create and write to file
// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "hello world", err => {
//   if (err) throw err;
//   console.log("file written to...");
//   //File append
//   fs.appendFile(
//     path.join(__dirname, "/test", "hello.txt"),
//     "i love Node.js",
//     err => {
//       if (err) throw err;
//       console.log("file written to...");
//     }
//   );
// });

//read file
fs.readFile(path.join(__dirname, "test", "hello.txt"), utf8, err => {
  if (err) throw err;
  console.log("");
});
