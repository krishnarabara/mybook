const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    caption: { type: String, required: true },
    imageUrl: { type: String, required: true },
    
});

module.exports = mongoose.model('Post', postSchema);
