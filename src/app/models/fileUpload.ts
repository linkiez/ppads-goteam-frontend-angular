export interface FileUpload {
  url: string;
  originalFilename: string;
  newFilename: string;
  bucket: string;
  region: string;
  deletedAt: Date;
}
