import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; //filesystem , helps to read write files or to manage files

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }
    //upload file to cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded successfully to cloudinary
    // console.log("file uploaded successfully to cloudinary", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    // for a safe cleaning purpose removing the file from the local server
    fs.unlinkSync(localFilePath); // remove the locally saved temp file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
