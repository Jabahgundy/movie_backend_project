const express = require('express');
const router = express.Router();
const MovieReviewModel = require('../models/MovieReviewModel');

router.get('/', async (req, res, next) => {
    const movieData = await MovieReviewModel.getAll();
    console.log(movieData);
    console.log("REQUEST SESSION:", req.session);


    res.render('template', {
        locals: {
            title: 'movie',
            data: movieData,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/home'
        }
    })
});

module.exports = router;
