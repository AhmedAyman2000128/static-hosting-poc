import { DefaultAzureCredential } from "@azure/identity";
import { BlobServiceClient } from "@azure/storage-blob";

interface fileMetadata {
  mimetype: string;
  path: string;
}

const storageAccount = process.env.AZURE_STORAGE_ACCOUNT_NAME;
if (!storageAccount) {
  throw new Error("AZURE_STORAGE_ACCOUNT_NAME is missing");
}

const blobServiceClient = new BlobServiceClient(
  `https://${storageAccount}.blob.core.windows.net`,
  new DefaultAzureCredential()
);

export async function createContainer(containerName: string) {
  const containerClient = blobServiceClient.getContainerClient(containerName);
  await containerClient.createIfNotExists();
  await containerClient.setAccessPolicy("blob"); // public read access
  return containerClient.url;
}

export async function uploadBlob(
  containerName: string,
  blobName: string,
  file: fileMetadata
) {
  console.log(1);
  const containerClient = blobServiceClient.getContainerClient(containerName);
  console.log(2);
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  console.log(3);
  await blockBlobClient.uploadFile(file.path, {
    blobHTTPHeaders: {
      blobContentType: file.mimetype,
    },
  });
  console.log(4);
  return blockBlobClient.url;
}
