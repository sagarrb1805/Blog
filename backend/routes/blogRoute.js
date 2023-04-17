const express = require('express')
const router = express.Router()

const {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog
} = require('../controller/blogController')

const { protect } = require('../middleware/authMiddleware')



router.route('/').get(protect, getBlogs).post(protect, createBlog)
router.route('/:id').put(protect, updateBlog).delete(protect, deleteBlog)


module.exports = router