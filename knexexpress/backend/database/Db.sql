CREATE DATABASE knexexpress2;
DROP DATABASE knexexpress2;

\c knexexpress2;

SELECT * FROM products;


CREATE VIEW v_prod AS DROP TABLE products;
SELECT * FROM v_prod;

\dt

\l