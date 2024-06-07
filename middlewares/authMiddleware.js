import jwt from "jsonwebtoken"

const userAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Bearer checking
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next("Authentication Failed!");
    }

    // token extracting
    const token = authHeader.split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)

        req.user = { userId: payload.userId }

        next();

    } catch (error) {
        return next("Auth failed!")
    }
};;

export default userAuth;    