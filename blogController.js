const Blog = require('../models/Blog');

// Fetch all blog posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Blog.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blog posts', error });
    }
};
