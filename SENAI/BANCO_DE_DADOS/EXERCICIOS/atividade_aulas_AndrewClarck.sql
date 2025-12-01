-- AULA 7
INSERT INTO tbl_membro(id_membro, nome_membro, endereco, telefone)
VALUES
(101, 'Ana Silva', 'Rua A, 123', '11-98765-4321'),
(102, 'Bruno Costa', 'Av. B, 456', '11-91234-5678'),
(103, 'Carla Dias', 'Praça C, 789', '11-95555-4444');

SELECT * FROM tbl_membro;

INSERT INTO tbl_livro(isbn, titulo_livro, ano_publicacao, editora)
VALUES
('978-85-325-3078-3', 'Harry Potter e a Pedra Filosofal', 1997, 'Rocco'),
('978-85-7126-061-0', 'Dom Casmurro', 1901, 'Editora Clássica');

ALTER TABLE tbl_autor_livro
DROP FOREIGN KEY fk_isbn_tbl_autor_livro;

ALTER TABLE tbl_exemplar
DROP FOREIGN KEY fk_isbn_tbl_exemplar;

ALTER TABLE tbl_livro
MODIFY COLUMN isbn VARCHAR(17);
ALTER TABLE tbl_autor_livro
MODIFY COLUMN isbn VARCHAR(17);
ALTER TABLE tbl_exemplar
MODIFY COLUMN isbn VARCHAR(17);

ALTER TABLE tbl_autor_livro
ADD CONSTRAINT fk_isbn_tbl_autor_livro
FOREIGN KEY (isbn) REFERENCES tbl_livro(isbn);

ALTER TABLE tbl_exemplar
ADD CONSTRAINT fk_isbn_tbl_exemplar
FOREIGN KEY (isbn) REFERENCES tbl_livro(isbn);

UPDATE tbl_livro
SET ano_publicacao = 2019
WHERE isbn = "978-85-7126-061-0";

SELECT * FROM tbl_livro
WHERE ano_publicacao < 2000;

DELETE FROM tbl_membro
WHERE id_membro = 102;

SELECT * FROM tbl_membro;

INSERT INTO tbl_autor(nome_autor, nacionalidade)
VALUES
('Clarice Lispector', 'Brasileira'),
('George Orwell', 'Britânico'),
('Isaac Asimov', 'Russo-Americano');

INSERT INTO tbl_livro(isbn, titulo_livro, ano_publicacao, editora)
VALUES
('978-85-325-2306-8', 'A Revolução dos Bichos', 1945, 'Companhia das Letras'),
('978-0-00-711711-0', '1984', 1949, 'PenguinBooks'),
('978-85-325-1997-9', 'Eu, Robô', 1950, 'Aleph');

SELECT * FROM tbl_membro
WHERE nome_membro LIKE '%Silva';

SELECT * FROM tbl_livro
WHERE ano_publicacao BETWEEN 1939 AND 1945;

SELECT * FROM tbl_livro
WHERE editora IN ('Rocco', 'Aleph');

SELECT * FROM tbl_livro
WHERE editora NOT IN ('Rocco', 'Aleph');



SELECT CONCAT(UPPER(nome_membro), " - ", telefone)
AS CONTATO
FROM tbl_membro;


SELECT COUNT(*) FROM tbl_autor
WHERE nacionalidade = "Brasileiro" OR nacionalidade = "Brasileira"; -- Poderia ser "WHERE nacionalidade LIKE "Brasileir_";

SELECT MIN(ano_publicacao) FROM tbl_livro
WHERE editora = "Aleph";


INSERT INTO tbl_exemplar(id_exemplar, status_exemplar, isbn)
VALUES (2, "Emprestado", "978-85-325-1997-9");


INSERT INTO tbl_emprestimo(id_emprestimo, data_emprestimo, data_devolucao, data_devolucao_efetiva, id_exemplar, id_membro)
VALUES (501, CURDATE(), CURDATE() + INTERVAL 14 DAY, NULL, 2, 101);

SELECT * FROM tbl_emprestimo;


-- AULA 8
USE db_saber_e_cia_b;

INSERT INTO tbl_autor(nome_autor, nacionalidade)
VALUES ('Frank Herbert', 'Americano');

INSERT INTO tbl_exemplar(id_exemplar, status_exemplar, isbn)
VALUES 
(101, 'Disponível', '978-85-325-3078-3'),
(102, 'Emprestado', '978-85-325-3078-3'),
(103, 'Disponível', '978-85-7126-061-0');

INSERT INTO tbl_emprestimo(id_emprestimo, data_emprestimo, data_devolucao, data_devolucao_efetiva, id_exemplar, id_membro)
VALUES 
(401, '2024-10-01', '2024-10-15', NULL, 102, 101);

SELECT isbn, COUNT(id_exemplar) AS quantidade_exemplares
FROM tbl_exemplar
GROUP BY isbn;

SELECT M.nome_membro, L.titulo_livro, E.data_devolucao
FROM tbl_membro M
INNER JOIN tbl_emprestimo E
	ON M.id_membro = E.id_membro
INNER JOIN tbl_exemplar EX
	ON E.id_exemplar = EX.id_exemplar
INNER JOIN tbl_livro L
	ON EX.isbn = L.isbn;
    
SELECT A.nome_autor, COUNT(AL.isbn) AS quantidade
FROM tbl_autor A
LEFT JOIN tbl_autor_livro AL
	ON A.id_autor = AL.id_autor
GROUP BY A.nome_autor;

SELECT nome_membro FROM tbl_membro
WHERE id_membro IN (
	SELECT id_membro FROM tbl_emprestimo
    WHERE data_devolucao_efetiva IS NULL
    );
    
    
-- AULA 9
USE db_saber_e_cia_b;

-- 1
START TRANSACTION;

	INSERT INTO tbl_membro(id_membro, nome_membro, endereco, telefone)
	VALUES
	(999, 'Membro Teste', 'Rua Antônio Almeida Campos, Bairro Residencial Fabri, 52', '11-94933-3423');

COMMIT;

ROLLBACK;

SELECT * FROM tbl_membro;

-- 2
CREATE VIEW V_Livros_Autores AS
SELECT L.titulo_livro, L.ano_publicacao, A.nome_autor
FROM tbl_livro L
INNER JOIN tbl_autor_livro AL -- Junta o livro com a tabela autor_livro
	ON L.isbn = AL.isbn
INNER JOIN tbl_autor A -- Junta o resultado com a tabela Autor
	ON A.id_autor = AL.id_autor;
    
SELECT * FROM V_Livros_Autores
WHERE nome_autor LIKE 'Machado%';

-- 3
DELIMITER $$

CREATE PROCEDURE sp_cadastrar_livro(
	p_isbn VARCHAR(17),
    p_titulo_livro VARCHAR(200),
    p_ano_publicacao YEAR,
    p_editora VARCHAR(200)
)
BEGIN
	INSERT INTO tbl_livro(isbn, titulo_livro, ano_publicacao, editora)
    VALUES
    (p_isbn, p_titulo_livro, p_ano_publicacao, p_editora);
END$$

DELIMITER ;

CALL sp_cadastrar_livro('978-85-390-0064-8', 'Duna', 1965, 'Aleph');

SELECT * FROM tbl_livro;

-- 4
DELIMITER $$

CREATE FUNCTION fn_get_titulo_livro(p_isbn VARCHAR(17))
RETURNS VARCHAR(200)
DETERMINISTIC
BEGIN
    DECLARE v_titulo VARCHAR(200);

    SELECT titulo_livro
    INTO v_titulo
    FROM tbl_livro
    WHERE isbn = p_isbn;

    RETURN v_titulo;
END $$

DELIMITER ;

SELECT fn_get_titulo_livro('978-85-390-0064-8') AS "Titulo do Livro";


SELECT id_exemplar, isbn, fn_get_titulo_livro(isbn) AS titulo
FROM tbl_exemplar;