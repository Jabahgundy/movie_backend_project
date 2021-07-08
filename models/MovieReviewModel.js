const db = require('./conn');


class MovieReviewModel {
    constructor(id, name, director, release_date, movie_length, picture) {
        this.id = id;
        this.name = name;
        this.director = director;
        this.release_date = release_date;
        this.movie_length = movie_length;
        this.picture = picture;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM movies;`);
            return response
        } catch (err) {
            return err.message;
        }
    }

    async getmovieData() {
        try {
            const query = `SELECT * FROM movies WHERE id = ${this.id}`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }


    }

};

module.exports = MovieReviewModel;