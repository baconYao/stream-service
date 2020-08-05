const express = require("express");
const azure = require('azure-storage');
 
const app = express();
const port = 3000;
 
const STORAGE_ACCOUNT_NAME = process.env.STORAGE_ACCOUNT_NAME;
const STORAGE_ACCESS_KEY = process.env.STORAGE_ACCESS_KEY;
 
function createBlobService() {
    const blobService = azure.createBlobService(
        STORAGE_ACCOUNT_NAME,
        STORAGE_ACCESS_KEY
    );
    return blobService;
}
 
/* Streamed video from your Azure storage accoun */
// url example -> http://localhost:3000/video?path=SampleVideo_1280x720_1mb.mp4
app.get("/video", (req, res) => {
 
    const videoPath = req.query.path;
    const blobService = createBlobService();
 
    const containerName = "videos";
    blobService.getBlobToStream(containerName, videoPath, res, err => {
        if (err) {
            // Error handling goes here ...
            return;
        }
    });
});
 
app.listen(port, () => {
    console.log(`Microservice online`);
});