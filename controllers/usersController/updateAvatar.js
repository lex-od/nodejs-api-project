const jimp = require("jimp");
const path = require("path");
const fs = require("fs/promises");
const { usersService: srv } = require("../../services");
// const { ApiError, apiConsts } = require("../../helpers");

// const { DB_ACCESS_ERROR } = apiConsts;

const uploadDir = path.join(process.cwd(), "public", "avatars");

const updateAvatar = async (
    { user: { _id }, file: { path: tempPath } },
    res,
    next
) => {
    try {
        const img = await jimp.read(tempPath);
        await img.cover(250, 250).writeAsync(tempPath);

        const uploadFileName = _id + path.extname(tempPath);

        fs.rename(tempPath, path.join(uploadDir, uploadFileName));

        const result = await srv.updateFieldById(_id, {
            avatarUrl: "/avatars/" + uploadFileName,
        });

        res.json({ result });
    } catch (err) {
        console.log(err.name, err.message);

        // next(new ApiError(DB_ACCESS_ERROR));
    }
};

module.exports = updateAvatar;
