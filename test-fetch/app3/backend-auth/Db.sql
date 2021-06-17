CREATE DATABASE knexexpress_auth;

\c knexexpress_auth

CREATE TABLE autenticacao1(
    id SERIAL NOT NULL PRIMARY KEY,
    nome VARCHAR(30) NOT NULL UNIQUE,
    senha VARCHAR(30)NOT NULL UNIQUE
);

INSERT INTO autenticacao1 VALUES(1,'admin','1234');
INSERT INTO autenticacao1 VALUES(2,'root','123456');

SELECT * FROM autenticacao1;