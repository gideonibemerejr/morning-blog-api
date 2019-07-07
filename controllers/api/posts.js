const Post = require('../../models/Post')

module.exports = {
  getAllPosts,
  create
}

async function create(req, res) {
  try {
    await Post.create(req.body)

    getAllPosts(req, res)
  } catch (err) {
    res.json({ err })
  }
}

async function getAllPosts(req, res) {
  const posts = await Post.find({})

  res.status(200).json(posts)
}
