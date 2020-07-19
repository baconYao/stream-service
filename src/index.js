const express = require("express");
const fs = require("fs");
 
const app = express();
const port = 3000;
 
// check the envs
if (!process.env.VIDEOS_PATH) {
    throw new Error("Please specify path to videos with env var VIDEOS_PATH.");
}
 
const VIDEOS_PATH = process.env.VIDEOS_PATH;
 
app.get("/videos", (req, res) => {
    fs.readdir(VIDEOS_PATH, (err, files)  => {
        if (err) {
            console.error("An error occurred.");
            console.error(err && err.stack || err);
        }
        else {
            res.json({
                videos: files,
            });
        }
    });
});
 
app.listen(port, () => {
    console.log(`Service listening on port ${port}!`);
});