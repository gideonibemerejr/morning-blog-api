const express = require('express')
const router = express.Router()
const postsCtrl = '../../controllers/api/posts'

// GET all Blog Posts
router.get('/', postsCtrl.getAllPosts)

// POST a Blog Post
router.post('/', postsCtrl.create)

module.exports = router
