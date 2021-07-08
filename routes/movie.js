const express = require('express'),
    router = express.Router(),
    ParksModel = require('../models/MovieReviewModel'),
    ReviewsModel = require('../models/Reviews');

route.get('/movie_id', async (req, res) => {
    const movieId = req.params.movie_id,
       Movie = new MoviesModel(movieId),
       movieData = await Movie.getMovieData();
    const Reviews = new ReviewsModel(null, movieId),
       reviewData = await Reviews.getMovieReviews();



    res.render('template', {
        locals: {
            title: movieData.name,
            movieData, 
            reviewData,
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            body: 'partials/movies',
        },
    });
   
});

module.exports = router; 
