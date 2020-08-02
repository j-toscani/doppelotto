import fs from "fs";

function writeToFile(path: string, filename: string, data: any) {
  const promise = new Promise((resolve, reject) => {
    fs.writeFile(path + filename, JSON.stringify(data), (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
  return promise;
}

export default writeToFile;
