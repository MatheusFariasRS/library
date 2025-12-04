INSERT INTO tb_user (name, email, password) VALUES ('Alex', 'alex@gmail.com', '$2a$10$xOi94AiX3drz8bwxTanaK.jEzedzyCSmkwPK1x2I.Z7WPTf2vms5.');
INSERT INTO tb_user (name, email, password) VALUES ('Maria', 'maria@gmail.com', '$2a$10$xOi94AiX3drz8bwxTanaK.jEzedzyCSmkwPK1x2I.Z7WPTf2vms5.');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_genre(name) VALUES('Adventure');

INSERT INTO tb_book(title, description) VALUES ('The Lord of the Rings', 'An epic fantasy adventure in Middle-earth, filled with magic, friendship, and the struggle between good and evil.');

INSERT INTO tb_book_genre(book_id, genre_id) VALUES (1, 1);