
CREATE DATABASE admin_combo;

USE admin_combo;

DROP DATABASE admin_combo;


CREATE TABLE IF NOT EXISTS adm(
	id INT PRIMARY KEY AUTO_INCREMENT,
    user VARCHAR(30) NOT NULL,
    password INT(10)NOT NULL
);

DROP TABLE adm;

INSERT INTO adm VALUES(NULL,'mendes_dev',1234);
INSERT INTO adm VALUES(NULL,'full_stack',1234);

SELECT * FROM adm;


