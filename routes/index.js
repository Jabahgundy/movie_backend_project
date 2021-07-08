const { response } = require('express');
const express = require('express');
const router = express.Router();
const MovieReviewModel = require('../models/MovieReviewModel');

router.get('/', async (req, res, next) => {
    const MovieData = await MovieReviewModel.getAll();
    console.log("REQUEST SESSION: ", req.session);


    res.render('template', {
        locals: {
            title: 'Movie',
            date: MovieData,
            is_logged_in: req.seesion.is_logged_in
        },
        partials: {
            body: 'partials/home'
        }
    })
});

module.exports = router;