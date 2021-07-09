const express = require('express'),
    router = express.Router(),
    ReviewsModel = require('../models/Reviews');

router.post('/add', async (req, res) => {
    const {movie_id, review_content, rating} = req.body;
    const Review = new ReviewsModel(null, movie_id, review_content, rating);
    const response = await Review.addReview();
    if (reponse.rowCoutn >= 1) {
        res.redirect('back');
    } else {
        res.sendStatus(500);
    }


});

router.post('/delete', (req, res) => {
    console.log('Deleting a review');
});

module.exports = router; 