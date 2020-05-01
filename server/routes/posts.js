const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//** GET ALL POST */
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

//** ADD NEW POST */
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

//** GET POST BY ID */
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

//** DELETE POST BY ID */
router.delete('/:id', async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.id });
        res.status(200).json(removePost);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

//** UPDATE POST BY ID */
router.patch('/:id', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            { _id: req.params.id },
            { $set: { title: req.body.title } }
        );
        res.status(200).json(updatePost);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

module.exports = router;