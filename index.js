const fs = require("fs");
const path = require("path");
fsPromise =require("fs").promises


fileX = path.join(__dirname, "files", "start.text");
fileY = path.join(__dirname, "files", "test2.text");
fileZ = path.join(__dirname, "files", "test.text");
fileF = path.join(__dirname, "files", "test4.text");
fileC = path.join(__dirname, "files", "test6.text");
fileU = path.join(__dirname, "files", "test5.text");


const fileOps = async() =>{
try{
const data = await fsPromise.readFile(fileX,'utf8')
 await fsPromise.unlink(fileU);
await fsPromise.writeFile(fileZ,data);
await fsPromise.appendFile(fileF, "\n\n it is append again ");
await fsPromise.rename(fileZ, fileC);

console.log(data)
}catch(err){console.error(err);}


}
fileOps()







// 1-read a file
fs.readFile(fileX, "utf-8", (err, data) => {
  if (err) throw err;
  //console.log(data);
});


/*
// 2-writ and append to file

// write to file------
fs.writeFile(fileY, "Test writing ", err => {
  if (err) throw err;
  console.log("data written");

  // append to file
  fs.appendFile(fileY, "\n\n it is append ", err => {
    if (err) throw err;
    console.log("Append written");
     // rename the file
    fs.rename(fileY, fileF, err => {
      if (err) throw err;
      console.log("rename completed");
    });
  });
});
*/







// 3- append file---------
fs.appendFile(fileZ, "Testind append ", err => {
  if (err) throw err;
 // console.log("Append written");
});

// exit on uncaught error
process.on("uncaughtError", err => {
  console.error(`There was an uncaught error${err}`);
  process.exit(1);
});


