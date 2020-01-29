const controller = require('../Controllers/controller');

module.exports = (app) => {
    app.get('/api/rest', controller.getRests);
    app.get('/api/rest/:id', controller.getOneRest);
    app.get('/api/rest/:id/reviews', controller.getReviews);
    app.post('/api/rest', controller.createRest);
    app.put('/api/rest/:id', controller.updateRest);
    app.patch('/api/rest/:id', controller.addReview);
    app.delete('/api/rest/:id', controller.deleteRest);
}