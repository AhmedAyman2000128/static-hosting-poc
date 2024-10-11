import { configDotenv } from 'dotenv';
configDotenv();
import fs from 'fs';
import express from 'express';
import upload from './upload';
import { v4 as uuidv4 } from 'uuid'
import { createContainer, uploadBlob } from './blobStorage';
import { unzipFile } from './unzip';
import path from 'path';
import mime from 'mime-types';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static('public'));

const directoryPath = `temp`;

app.post('/upload', upload.single('image'), async (req, res) => {
  const zipFile = req.file as Express.Multer.File;
  console.log('file: ', zipFile);

  if(!fs.existsSync(directoryPath)) fs.mkdirSync(directoryPath);

  await unzipFile(zipFile.path, directoryPath);

  const containerName = uuidv4().slice(0, 8);

  const url = await createContainer(containerName);
  console.log('container url:', url);

  const fileUrls = [];

  // Read the directory and process each file
  for await (let file of fs.readdirSync(directoryPath)) {
    // Calculate the full file path
    const filePath = path.join(directoryPath, file);
  
    // Get the MIME type of the file
    const mimeType = mime.lookup(filePath) || 'application/octet-stream'; // Default if MIME type is not found
  
    console.log('File path:', filePath);
    console.log('MIME type:', mimeType);

    const fileUrl = await uploadBlob(containerName, file, {
      mimetype: mimeType,
      path: filePath,
    });

    console.log('file url:', fileUrl);
    fileUrls.push(fileUrl);
  }

  // Delete the folder
  fs.rmSync(directoryPath, { recursive: true });

  res.json({ fileUrls, containerUrl: url });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
