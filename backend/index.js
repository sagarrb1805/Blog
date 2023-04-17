const mongoose = require("mongoose")
const express = require("express")

require("dotenv").config()


const app = express()

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/api/blogs', require('./routes/blogRoute'))
app.use('/api/users', require('./routes/userRoute'))

// const blog = new Blog({
//     title:"Hello World",
//     text: "1st blog"
// })
// blog.save().then(()=>console.log("one entry added"), (err)=>console.log(err))


app.listen(5555, ()=> console.log("Server is running"))
