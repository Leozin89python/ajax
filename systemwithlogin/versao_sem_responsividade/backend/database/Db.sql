CREATE DATABASE knex_ajax_express;

\c knex_ajax_express

SELECT * FROM  pessoa; 

INSERT INTO pessoa VALUES(2,'Tom Hanks','actor','cinema',3.541);

SELECT id,name,department,job,salary FROM pessoa where id < 20;

CREATE VIEW v_group AS 
SELECT id,name,department,job,salary FROM pessoa ORDER BY salary;

SELECT * FROM v_group;

