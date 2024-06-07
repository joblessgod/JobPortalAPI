export const testPostController = async (req, res) => {

    const { name } = req.body
    res.status(200).send(`Your name is ${name}`)
    console.log(`Your name is ${name}`)
    

}