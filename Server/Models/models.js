const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be empty'],
        minlength: [3, 'Name must be at least 3 characters'],
    },
    text: {
        type: String,
        required: [true, 'Review cannot be empty'],
        minlength: [3, 'Review must be at least 3 characters']
    },
    stars: { type: Number, default: 5 },
});

const RestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A restaurant name is required'],
        unique: [true, 'We already have a restaurant with that name'],
        minlength: [3, 'Restaurant name must be at least 3 characters']
    },
    cuisine: {
        type: String,
        required: [true, 'A cuisine is required'],
        minlength: [3, 'Cuisine must be at least 3 characters']
    },
    reviews: { type: [ReviewSchema], default: [] },
});

module.exports = {
    Review: mongoose.model('Review', ReviewSchema),
    Rest: mongoose.model('Rest', RestSchema)
}