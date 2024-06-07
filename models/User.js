import mongoose, { Schema } from "mongoose";
import validator from "validator";


// schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is Require"]
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        require: [true, "Email is Require"],
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        require: [true, "Password is Require"],
        minlength: [8, "Password must be greater than 8 characters."]
    },
    location: {
        type: String,
        default: "Nepal",
    }


}, { timestamps: true })

export default mongoose.model('User', userSchema)