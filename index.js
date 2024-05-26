// imports
import express from "express"
import dotenv from "dotenv"

// DOT ENV config
dotenv.config()


// rest object
const app = express()

// routes
app.get("/", (req,res) => {
    res.send("<h1> Job Portal</h1>")
})


// PORT
const PORT = process.env.PORT

// listen
app.listen(PORT, () => {
    console.log(`-> Node Server Started ${process.env.DEV_MODE} on with port ${PORT}`)
})
