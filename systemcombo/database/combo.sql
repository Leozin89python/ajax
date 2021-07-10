\c

CREATE DATABASE combo;

DROP DATABASE combo;

\c combo

CREATE TABLE IF NOT EXISTS card(
	id SERIAL PRIMARY KEY,
    img VARCHAR(100) NOT NULL,
    item VARCHAR(30)NOT NULL,
    des VARCHAR(150)NOT NULL,
    price DECIMAL(100,2)NOT NULL
);

DROP TABLE card;

INSERT INTO card VALUES(1,'FAKE ITEM','http://www.fakeimage.com','fake image 1',36.74);
INSERT INTO card VALUES(2,'FAKE ITEM2','http://www.fakeimage2.com','fake image 2',37.75);

SELECT * FROM card;