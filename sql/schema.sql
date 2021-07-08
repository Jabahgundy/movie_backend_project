
CREATE TABLE movies (
    id serial PRIMARY KEY,
    name varchar(200),
    director varchar(200),
    release_date varchar(200), 
    movie_length varchar(200),
    picture varchar(500)
);

CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name text, 
    last_name text,
    email varchar(200),
    password varchar(2000)
);

CREATE TABLE reviews (
    id serial PRIMARY KEY,
    rating integer, 
    content text, 
    movie_id integer REFERENCES movies (id),
    user_id integer REFERENCES users (id) 
);