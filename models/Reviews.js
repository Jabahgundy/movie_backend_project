const db = require('./conn.js');

class Reviews {
    constructor(id, movie_id, review_content, rating) {
        this.id = id;
        this.movie_id = movie_id;
        this.review_content = review_content;
        this.rating = rating;
    }

    async getMovieReviews(movieId) {
        try {
            const query = `SELECT * 
            FROM reviews 
            INNER JOIN movies 
            ON movies.id = '${movieId}' 
            AND movies.id = reviews.movie_id
            INNER JOIN users
            ON users.id = reviews.user_id;`

            const response = await db.any(query);
            return response;
        } catch (err) {
            return err.message;
        }
    }

    async addReview() {
        try {
            const query = `INSERT INTO reviews (rating, content, movie_id, user_id) VALUES (${this.rating}, '${this.review.content}', ${this.movie_id},)`;
            const response = await db.results(query);
            console.log("response", response);
            return response;
        } catch (err) {
            return err.message;
        }
    }


}

module.exports = Reviews;