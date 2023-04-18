const asyncHandler = require('express-async-handler')
const Blog = require("../schema/blog")
const User = require("../schema/user")


const getBlogs = asyncHandler(async (req, res) =>{
    const blogs = await Blog.find({user: req.user.id})
    // console.log("api called")
    res.status(200).json(blogs)
})

const createBlog = asyncHandler(async (req, res) => {
    // console.log(req.body)
    if (!req.body.title || !req.body.text) {
      res.status(400)
    //   throw new Error('Please add a text field')
    }

    const customer = await User.findById(req.user.id)
    const limit = customer.noOfBlogs;
    const blogs = await Blog.find({user: req.user.id})
    const length = blogs.length
 
    if(length <= limit){
        const blog = await Blog.create({
            user: req.user.id,
              title: req.body.title,
              text: req.body.text
            })
          
            res.status(200).json(blog)
    }else{
        res.status(405).json({message: "Limit reached"})
    }    
  })



  const updateBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    if (!blog) {
      res.status(400)
      throw new Error('blog not found')
    }
  

    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    
    if (blog.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
  
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedBlog)
  })



  const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    console.log(blog)
  
    if (!blog) {
      res.status(400)
      throw new Error('Blog not found')
    }
  

    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    
    if (blog.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
  
    await Blog.deleteOne(blog)
  
    res.status(200).json({ id: req.params.id })
  })



module.exports = {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
}