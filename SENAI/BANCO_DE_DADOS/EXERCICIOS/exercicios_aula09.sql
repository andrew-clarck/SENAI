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