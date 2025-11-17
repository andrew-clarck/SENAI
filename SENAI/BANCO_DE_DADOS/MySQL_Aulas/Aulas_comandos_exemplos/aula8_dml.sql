/* Aula 08 */
-- Consultas avançadas: Consulta em mais de uma tabela de uma vez
-- Ajuda de JOINS (Associações) e GROUP BY (Agrupamento)
USE db_saber_e_cia_b;

-- GROUP BY
-- O GROUP BY é usado em conjunto com Funções de Agregação
/*
Ele "comprime" todas as linhas que têm o mesmo valor em uma coluna específica,
permitindo que a função de agregação seja aplicada a cada gruposeparadamente.
*/
SELECT editora, COUNT(isbn) AS quantidade_livros
FROM tbl_livro
GROUP BY editora; -- Nesse só existem 1 livro por editora, se existisse uma editora com 2 livros, iria aparecer "2" na coluca dessa editora

INSERT INTO tbl_livro(isbn, titulo_livro, ano_publicacao, editora)
VALUES
('999-987654-987', 'Esse é o meu livro', 2020, 'Rocco'),
('999-987654-988', 'Esse é o meu livro 2', 2022, 'Rocco'),
('999-987654-989', 'Esse é o meu livro 3', 2024, 'Rocco');

SELECT titulo_livro, MAX(ano_publicacao) AS ano_publicacao, editora
FROM tbl_livro
GROUP BY editora;

-- Filtração dos grupos com HAVING
-- Parecido com o WHERE, WHERE filtra antes do agrupamento, HAVING filtra depois

-- Mostrar apenas as editoras que têm 2 ou mais livros cadastrados.
SELECT editora, COUNT(isbn) AS quantidade_livros
FROM tbl_livro
GROUP BY editora
HAVING COUNT(isbn) >= 2;

-- União (UNION)
-- Combina o resultado de dois ou mais SELECT em um único conjunto de resultados.
-- Para isso, os dois SELECTS devem ter o mesmo número de colunas

-- Criando uma lista "contatos" com autores e membros
SELECT nome_autor AS nome, 'Autor' AS tipo
FROM tbl_autor

UNION

SELECT nome_membro AS nome, 'Membro' AS tipo
FROM tbl_membro;

-- JOINS: Associações de tabelas
-- O JOIN é o comando usado para cruzar dados entre tabelas usando suas chaves PK e FK

-- Cross Join (não é útil): O resultado é todas as combinações possíveis de linhas. - Não usar
SELECT L.titulo_livro, A.nome_autor -- Definiu as tabelas, ao invés de tbl_livro.titulo_livro, que deixaria mais complicado
FROM tbl_livro L
CROSS JOIN tbl_autor A;

-- Inner Join (Correto): Exibe os resultados que tem relação em ambas as tabelas
-- A condição é feita com ON
-- Juntando Livro com a tabela "ponte".
SELECT L.titulo_livro, AL.id_autor
FROM tbl_livro L
INNER JOIN tbl_autor_livro AL
	ON L.isbn = AL.isbn;  
    
-- Adição de valores na tabela tbl_autor_livro para fazer a verificação acima
SELECT * FROM tbl_livro;
SELECT * FROM tbl_autor;

INSERT INTO tbl_autor_livro(isbn, id_autor)
VALUES
('978-0-00-711711-0', 6),
('978-85-325-1997-9', 7),
('978-85-325-2306-8', 6),
('978-85-325-3078-3', 4),
('978-85-7126-061-0', 1),
('999-987654-987', 5),
('999-987654-988', 5),
('999-987654-989', 5);

SELECT L.titulo_livro, A.nome_autor
FROM tbl_livro L
INNER JOIN tbl_autor_livro AL -- Junta o livro com a tabela autor_livro
	ON L.isbn = AL.isbn
INNER JOIN tbl_autor A -- Junta o resultado com a tabela Autor
	ON A.id_autor = AL.id_autor;
    
-- OUTER JOIN (LEFT e RIGHT)
-- LEFT JOIN: Retorna TUDO da tabela da esquerda e o que encontrar na da direita.
-- RIGHT JOIN: Retorna TUDO da tabela da direita e o que encontrar na da esquerda.


-- Subconsultas
-- Coloca um SELECT dentro de outro SELECT (ou INSERT, UPDATE, DELETE)
-- Ex.: Mostrar os títulos dos livros escritos por autores brasileiros. Primeiro, precisamos dos IDs dos autores brasileiros
SELECT titulo_livro
FROM tbl_livro
WHERE isbn IN (
	SELECT isbn FROM tbl_autor_livro
	WHERE id_autor IN (
		SELECT id_autor FROM tbl_autor
		WHERE nacionalidade LIKE 'Brasileir_')
);

-- Com EXISTS
SELECT nome_autor
FROM tbl_autor A
WHERE EXISTS (
	SELECT 1 FROM tbl_autor_livro AL
    WHERE AL.id_autor = A.id_autor);
    
-- ANY e ALL
/*
ANY e ALL são usados com operadores relacionais (=, >, <) após uma subconsulta que retorna uma lista
ANY: Maior que pelo menos um da lista (ou seja, maior que o MÍNIMO).
ALL: Maior que todos da lista (ou seja, maior que o MÁXIMO).
*/
-- Ex.: Buscar livros publicados antes de qualquer livro da editora 'Aleph'
SELECT titulo_livro, ano_publicacao
FROM tbl_livro
WHERE ano_publicacao < ANY (
	SELECT ano_publicacao FROM tbl_livro
    WHERE editora = 'Aleph'
);