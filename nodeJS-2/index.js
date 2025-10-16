const fs = require("fs");

// readFile(file, encodeType, callbackFunction)
// callback memiliki dua parameter error dan data

fs.readFile("example.txt", "utf8", (error, data) => {
  if (error) {
    console.log("Error reading the file:", error);
    return; // stop eksekusi kode
  }
  console.log("file contains:", data);
});

// writeFile(file, newContent, callback(error))
const content = "Hello, World!";
fs.writeFile("example.txt", content, (error) => {
  if (error) {
    console.log("Error writing to a file:", error);
    return;
  }
  console.log("File written successfully");
});

// rename()
fs.rename("example.txt", "renamedExample.txt", (error) => {
  if (error) {
    console.log("Error renaming the file");
    return;
  }
  console.log("Successfully rename the file");
});
