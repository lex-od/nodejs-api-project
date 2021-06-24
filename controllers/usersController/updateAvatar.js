const jimp = require("jimp");
const path = require("path");
const { usersService: srv } = require("../../services");
// const { ApiError, apiConsts } = require("../../helpers");

// const { DB_ACCESS_ERROR } = apiConsts;

const uploadFolder = path.join(process.cwd(), "public", "avatars");

const updateAvatar = async (
    { user: { _id }, file: { path: filePath, filename } },
    res,
    next
) => {
    try {
        const jimpImg = await jimp.read(filePath);

        await jimpImg
            .autocrop()
            .cover(
                250,
                250,
                jimp.HORIZONTAL_ALIGN_CENTER | jimp.VERTICAL_ALIGN_MIDDLE
            )
            .writeAsync(filePath);

        res.json();
    } catch {
        // next(new ApiError(DB_ACCESS_ERROR));
    }
};

module.exports = updateAvatar;
