const mongoose =  require('mongoose');

const customizableSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    Sellable: {
        type: Boolean,
        required: false,
        default: false,
    },
    price: {
        type: Number,
        required: true
    }, 
    image: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Customizable', customizableSchema);