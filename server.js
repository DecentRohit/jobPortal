import { connectUsingMongoose } from "./Config/mongoose.js"
import app from "./index.js"

const PORT = process.env.PORT;

app.listen(PORT , ()=>{

    connectUsingMongoose();
    console.log(`your server is running at port ${PORT}`)

    })