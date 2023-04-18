const asyncHandler = require('express-async-handler')
const Comment = require('../schema/comments')
const User = require("../schema/user")

const getComments = asyncHandler(async (req, res) =>{
    console.log(req.body)
    const comments = await Comment.find({blog: req.body.id})
    console.log(comments)
    // console.log("api called")
    res.status(200).json(comments)
})



const createComment = asyncHandler(async (req, res) => {
    // console.log(req.body)
    if (!req.body.comment) {
      res.status(400)
    //   throw new Error('Please add a text field')
    }

    // console.log(req.user)
    console.log(req.body)
  
    const comment = await Comment.create({
    // user: req.user.id,
      blog: req.body.id,
      comment: req.body.comment
    })
  
    res.status(200).json(comment)
  })


module.exports = {
   getComments,
   createComment,
}