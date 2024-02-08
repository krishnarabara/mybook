const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    try {
        const { caption, imageUrl } = req.body;
        const userId = req.user.id; // Assuming you're using JWT for authentication and have middleware to extract user from token

        // Create new post
        const post = new Post({
            user: userId,
            caption,
            imageUrl
        });

        await post.save();

        res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getPosts = async (req, res) => {
    try {
        // Fetch all posts
        const posts = await Post.find().populate('user', 'username'); // Populate user field with username

        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
