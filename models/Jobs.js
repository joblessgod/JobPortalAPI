import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({

    company: {
        type: String,
        required: [true, "Company name is require"]
    },
    position: {
        type: String,
        required: [true, "Postion name is require"],
        // maxlength: 100,
    },
    status: {
        type: String,
        enum: ['pending', 'reject', 'interview'],
        default: 'pending'
    },
    workType: {
        type: String,
        enum: ['full-time', 'part-time', 'intership', 'contract'],
        default: 'full-time',
    },
    workLocation: {
        type: String,
        default: "Kathmandu",
        required: [true, "Work location is required"]
    },
    CreatedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

export default mongoose.model('Job', JobSchema)