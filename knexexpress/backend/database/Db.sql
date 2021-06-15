CREATE DATABASE knexexpress2;
DROP DATABASE knexexpress2;

\c knexexpress2;

SELECT * FROM products;
SELECT * FROM cliente;


CREATE VIEW v_prod AS DROP TABLE products;
SELECT * FROM v_prod;

CREATE VIEW v_cli AS DROP TABLE cliente;
SELECT * FROM v_cli;

\dt

\l