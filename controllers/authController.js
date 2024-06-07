import User from "../models/User.js";

export const registerController = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
    
        // if (!name) {
        //     next("name is require");
        // }
        // if (!email) {
        //     next("email is require");
        // }
        // if (!password) {
        //     next("password is require");
        // }

        // const existingUser = await User.findOne({ email });
        // if (existingUser) {
        //     next("Email already exits, Please try log in")
        // }

        const user = await User.create({ name, email, password });
        res.status(201).send({
            success: true,
            message: "User Created",
            user,
        });
    } catch (error) {
        next(error);
    }
};
