const mongoose = require('mongoose')

const avatarHouseSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    avatar: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Avatar',
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

module.exports = mongoose.model('AvatarHouse', avatarHouseSchema);