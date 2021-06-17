// const jwt = require("jsonwebtoken");
// require("dotenv").config();
const { usersService: srv } = require("../../services");

const signup = async (
    { body: { email, password, subscription } },
    res,
    next
) => {
    try {
        // const result = await service.getOne({ email });
        // if (result) {
        //     return res.status(409).json({
        //         status: "error",
        //         code: 409,
        //         message: "Alredy register",
        //     });
        // }
        // const data = await service.add({ email, password });
        // const { TOKEN_KEY } = process.env;
        // const payload = {
        //     id: data._id,
        // };
        // const token = jwt.sign(payload, TOKEN_KEY);
        // res.status(201).json({
        //     status: "success",
        //     code: 201,
        //     message: "Add sucess",
        //     data: {
        //         token,
        //     },
        // });
    } catch (error) {
        // next(error);
    }
};

module.exports = signup;
