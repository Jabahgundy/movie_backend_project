CREATE TABLE users (
    id serial PRIMARY KEY, 
    first_name text,
    last_name text, 
    email varchar(200),
    password varchar(2000)
); 