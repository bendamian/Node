const fs = require("fs");

// Create a new directory

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", err => {
    if (err) throw err;

    console.log("creating new directory");
  });
}
// remove old directory
if (fs.existsSync("./new1")) {
  fs.rmdir("./new1", err => {
    if (err) throw err;

    console.log("directory removed successfully");
  });
}





// exit on uncaught error
process.on("uncaughtError", err => {
  console.error(`There was an uncaught error${err}`);
  process.exit(1);
});
