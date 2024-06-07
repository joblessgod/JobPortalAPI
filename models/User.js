import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

// schema
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Name is Require"],
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
            require: [true, "Email is Require"],
            unique: true,
            validate: validator.isEmail,
        },
        password: {
            type: String,
            require: [true, "Password is Require"],
            minlength: [8, "Password must be greater than 8 characters."],
            select: true,
        },
        location: {
            type: String,
            default: "Nepal",
        },
    },
    { timestamps: true }
);

// middleware
userSchema.pre("save", async function () {
    if (!this.isModified) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// compate password
userSchema.methods.comparePassword = async function (userPassword) {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
}

// JSON Web Token
userSchema.methods.createJWT = function () {
    return JWT.sign({ userId: this._id }, process.
        env.JWT_SECRET, {
        expiresIn: '1d',
    });
};

export default mongoose.model('User', userSchema)