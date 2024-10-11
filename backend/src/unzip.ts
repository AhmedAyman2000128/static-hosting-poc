import unzipper from "unzipper";
import fs from "fs";

export async function unzipFile(filePath: string, destination: string) {
  return new Promise<void>((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(unzipper.Extract({ path: destination }))
      .on("close", () => {
        resolve();
      })
      .on("error", (err) => {
        console.error("Error during unzip:", err);
        reject(err);
      });
  });
}
