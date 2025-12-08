INSERT INTO tb_user (name, email, password) VALUES ('Alex', 'alex@gmail.com', '$2a$10$xOi94AiX3drz8bwxTanaK.jEzedzyCSmkwPK1x2I.Z7WPTf2vms5.');
INSERT INTO tb_user (name, email, password) VALUES ('Maria', 'maria@gmail.com', '$2a$10$xOi94AiX3drz8bwxTanaK.jEzedzyCSmkwPK1x2I.Z7WPTf2vms5.');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_genre(name) VALUES('Adventure');
INSERT INTO tb_genre(name) VALUES('Fantasy');
INSERT INTO tb_genre(name) VALUES('Science Fiction');
INSERT INTO tb_genre(name) VALUES('Mystery');
INSERT INTO tb_genre(name) VALUES('Romance');
INSERT INTO tb_genre(name) VALUES('Horror');
INSERT INTO tb_genre(name) VALUES('Historical Fiction');
INSERT INTO tb_genre(name) VALUES('Biography');
INSERT INTO tb_genre(name) VALUES('Thriller');
INSERT INTO tb_genre(name) VALUES('Young Adult');
INSERT INTO tb_genre(name) VALUES('Non-Fiction');

INSERT INTO tb_book(title, description) VALUES ('The Lord of the Rings', 'An epic fantasy adventure in Middle-earth, filled with magic, friendship, and the struggle between good and evil.');
INSERT INTO tb_book(title, description) VALUES ('Harry Potter and the Philosopher''s Stone', 'A young wizard discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry.');
INSERT INTO tb_book(title, description) VALUES ('Dune', 'A epic science fiction saga set on the desert planet Arrakis, exploring politics, religion, and ecology.');
INSERT INTO tb_book(title, description) VALUES ('The Girl with the Dragon Tattoo', 'A thrilling mystery involving a journalist and a hacker investigating a decades-old disappearance.');
INSERT INTO tb_book(title, description) VALUES ('Pride and Prejudice', 'A classic romance novel exploring themes of love, class, and social expectations in 19th century England.');
INSERT INTO tb_book(title, description) VALUES ('Frankenstein', 'A Gothic horror story about a scientist who creates life and the tragic consequences that follow.');
INSERT INTO tb_book(title, description) VALUES ('The Book Thief', 'A historical fiction novel set in Nazi Germany, told from the perspective of Death.');
INSERT INTO tb_book(title, description) VALUES ('Steve Jobs', 'A comprehensive biography of the Apple co-founder and tech visionary.');
INSERT INTO tb_book(title, description) VALUES ('The Da Vinci Code', 'A fast-paced thriller following symbologist Robert Langdon as he unravels religious mysteries.');
INSERT INTO tb_book(title, description) VALUES ('The Hunger Games', 'A dystopian young adult novel set in a post-apocalyptic world where teenagers fight to the death.');
INSERT INTO tb_book(title, description) VALUES ('Sapiens', 'A thought-provoking non-fiction book examining the history of humankind.');
INSERT INTO tb_book(title, description) VALUES ('To Kill a Mockingbird', 'A powerful novel addressing racial injustice in the American South through a child''s eyes.');
INSERT INTO tb_book(title, description) VALUES ('1984', 'A dystopian political novel depicting a totalitarian regime and surveillance state.');
INSERT INTO tb_book(title, description) VALUES ('The Catcher in the Rye', 'A coming-of-age novel following teenager Holden Caulfield''s experiences in New York City.');
INSERT INTO tb_book(title, description) VALUES ('The Great Gatsby', 'A classic American novel exploring decadence and idealism in the Jazz Age.');
INSERT INTO tb_book(title, description) VALUES ('The Chronicles of Narnia', 'A beloved fantasy series about children who discover a magical world through a wardrobe.');
INSERT INTO tb_book(title, description) VALUES ('The Hobbit', 'A fantasy adventure following Bilbo Baggins on his unexpected journey with dwarves and dragons.');
INSERT INTO tb_book(title, description) VALUES ('Twilight', 'A romantic fantasy about a teenage girl caught between love and danger with a vampire.');
INSERT INTO tb_book(title, description) VALUES ('Gone Girl', 'A psychological thriller about a marriage gone wrong and a mysterious disappearance.');
INSERT INTO tb_book(title, description) VALUES ('The Fault in Our Stars', 'A touching young adult novel about two teenagers with cancer finding love.');


INSERT INTO tb_book_genre(book_id, genre_id) VALUES (1, 1);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (2, 2);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (3, 3);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (4, 4);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (5, 5);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (6, 6);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (7, 7);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (8, 8);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (9, 9);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (10, 10);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (11, 11);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (12, 7);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (13, 3);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (14, 7);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (15, 7);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (16, 2);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (17, 2);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (18, 5);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (19, 8);
INSERT INTO tb_book_genre(book_id, genre_id) VALUES (20, 9);