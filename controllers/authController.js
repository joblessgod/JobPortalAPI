import User from "../models/User.js";


export const registerController = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name) {
            next("name is require");
        }
        if (!email) {
            next("email is require");
        }
        if (!password) {
            next("password is require");
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            next("Email already exits, Please try log in")
        }

        const user = await User.create({ name, email, password });
        // token
        const token = user.createJWT()

        res.status(201).send({
            success: true,
            message: "User Created",
            user: {
                name: user.name,
                email: user.email,
                lastName: user.lastName,
                location: user.location,
            },
            token,

        });
        console.log("User registered")
    } catch (error) {
        next(error);
    }
};


export const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body
        // validation
        if (!email || !password) {
            next("Please provide all fields")
        }
        // find user by email
        const user = await User.findOne({ email }).select("+password")
        if (!user) {
            next("Invalid Username or Password")
        }

        // compare password
        const isMatch = await user.comparePassword(password)
        if (!isMatch) {
            next("Invalid Username or Password")
        }
        user.password = undefined
        const token = user.createJWT()
        res.status(200).send({
            success: true,
            message: "Login Successfully",
            user,
            token,
        })
        console.log("Login Successfully")


    } catch (error) {
        next(error);

    }

}