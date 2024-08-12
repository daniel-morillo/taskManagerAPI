const mongoose = require('mongoose');

const avatarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    image: {
        type: String,
        required: false
    },
    customizables: {
        type: Array,
        required: false
    }
});

module.exports = mongoose.model('Avatar', avatarSchema);