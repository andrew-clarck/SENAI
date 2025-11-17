/* Aula 08 - Exercícios */
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