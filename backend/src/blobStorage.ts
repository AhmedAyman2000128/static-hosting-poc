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
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  await blockBlobClient.uploadFile(file.path, {
    blobHTTPHeaders: {
      blobContentType: file.mimetype,
    },
  });
  return blockBlobClient.url;
}

interface ContainerItem {
  name: string;
  url: string;
}

export async function listContainers() {
  const containers: ContainerItem[] = [];
  for await (const container of blobServiceClient.listContainers()) {
    containers.push({
      name: container.name,
      url: `${blobServiceClient.url}${container.name}`,
    });
  }
  return containers;
}
