const express = require('express')
const router = express.Router()

const {
    getComments,
    createComment,
} = require('../controller/commentController')

// const { protect } = require('../middleware/authMiddleware')



router.route('/').get(getComments).post(createComment)
// router.route('/:id').put(protect, updateBlog).delete(protect, deleteBlog)


module.exports = router