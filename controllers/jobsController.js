import Jobs from "../models/Jobs.js";


export const createJobController = async (req, res, next) => {
    try {
        const { company, position, } = req.body
        if (!company || !position) {
            return next("please provide all fields!")
        }

        req.body.createdBy = req.user.userId
        const job = await Jobs.create(req.body)
        res.status(201).send({ job })



    } catch (error) {
        next(error)
    }
}