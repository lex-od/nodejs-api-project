const jimp = require("jimp");
const path = require("path");
const fs = require("fs/promises");
const { usersService: srv } = require("../../services");
const { ApiError } = require("../../helpers");

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

        await fs.rename(tempPath, path.join(uploadDir, uploadFileName));

        const { avatarUrl } = await srv.updateFieldById(_id, {
            avatarUrl: "/avatars/" + uploadFileName,
        });

        res.json({ result: { avatarUrl } });
    } catch ({ message }) {
        await fs.unlink(tempPath);

        next(new ApiError(message));
    }
};

module.exports = updateAvatar;
