const path = require("path");
const multer = require("multer");

const tempDir = path.join(process.cwd(), "temp");

const storage = multer.diskStorage({
    destination: (_, __, cb) => cb(null, tempDir),

    filename: (_, { originalname }, cb) => cb(null, originalname),
});

const upload = multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 },
});

module.exports = upload;
