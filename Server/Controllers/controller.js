const models = require('../Models/models');
const Review = models.Review;
const Rest = models.Rest;

module.exports = {
    // => [...Restaurants]
    getRests: (req, res) => Rest.find().then(data => res.json(data)).catch(data => res.json(data)),

    // => Restaurant
    getOneRest: (req, res) => Rest.findOne({ _id: req.params.id }).then(data => res.json(data)).catch(data => res.json(data)),

    // => [...Reviews]
    getReviews: (req, res) => Rest.findOne({ _id: req.params.id })
        .then(rest => res.json(rest.reviews))
        .catch(data => res.json(data)),

    // req.body format: { name: '', cuisine: '' }
    // => Restaurant
    createRest: (req, res) => Rest.create(req.body).then(data => res.json(data)).catch(data => res.json(data)),

    // req.body format: { name: '', cuisine: '' }
    // => { ...nModified: 1 }
    updateRest: (req, res) => Rest.update({ _id: req.params.id }, {
        name: req.body.name,
        cuisine: req.body.cuisine
    }, { runValidators: true }).then(data => res.json(data)).catch(data => res.json(data)),

    // req.body format: { name: '', text: '', stars: 0 }
    // => { ...nModified: 1 }
    addReview: (req, res) => Review.create({
        name: req.body.name,
        text: req.body.text,
        stars: req.body.stars
    }).then(review => {
        Rest.update({ _id: req.params.id }, {
            $push: { reviews: review }
        }).then(data => res.json(data)).catch(data => res.json(data))
    }).catch(data => res.json(data)),

    // => { ...deletedCount: 1 }
    deleteRest: (req, res) => Rest.deleteOne({ _id: req.params.id }).then(data => res.json(data)).catch(data => res.json(data)),
}