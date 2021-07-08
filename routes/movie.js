const express = require('express'),
    router = express.Router(),
    MoviesModel = require('../models/MovieReviewModel'),
    ReviewsModel = require('../models/Reviews');

router.get('/:movie_id', async (req, res) => {
    const movieId = req.params.movie_id,
       movie = new MoviesModel(movieId),
       movieData = await movie.getmovieData();
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
