INSERT INTO users (first_name, last_name, email)
    VALUES ('Miguel', 'Folgar', 'miguel@miguel.com'),
           ('Keith', 'Benjamin', 'keith@keith.com'),
           ('Jabah', 'Gundy', 'jabah@jabah.com');
 
INSERT INTO movies
    (name, director, release_date, movie_length, picture)
VALUES
    ('Tron Legacy', 'Joseph Kosinki', 'Dec 17, 2010', '2hr 7min', '/images/Tron.jpg'),
    ('Gladator', 'Ridley Scott', 'May 5, 2000', '2hr 51min', '/images/G1.jpg'), 
    ('Black Widow', 'Cate Shortland', 'July 9, 2021', '2hr 14min', '/images/blackwidow.jpg');

INSERT INTO reviews 
(rating, content, movie_id, user_id)   
VALUES 
    (4, 'Awesome Soundtrack', 1, 1),
    (0, 'Have not seen', 1, 2), 
    (5, 'Visual Effects', 1, 3); 
         
