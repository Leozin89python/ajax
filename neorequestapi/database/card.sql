CREATE DATABASE card;
DROP DATABASE card;
USE card;

CREATE TABLE IF NOT EXISTS products(
		id INT PRIMARY KEY AUTO_INCREMENT,
        item VARCHAR(50) NOT NULL,
        price DOUBLE(100,0) NOT NULL,
		quantity INT(100) 
);

INSERT INTO products VALUES(NULL,'pão limiar fatia',3.69,150);
INSERT INTO products VALUES(NULL,'leite itambé sachet 1kg',13.67,15);
INSERT INTO products VALUES(NULL,'leite moça itambé lt 500g',9.94,27);

DELETE FROM products WHERE id = 5;
DELETE FROM products WHERE id = 6;
DELETE FROM products WHERE id = 7;

SELECT * FROM products;