CREATE DATABASE db_saber_e_cia_b;

USE db_saber_e_cia_b;

CREATE TABLE tbl_livro(
    isbn VARCHAR(16) PRIMARY KEY,
    titulo_livro VARCHAR(200) NOT NULL,
    ano_publicacao YEAR NOT NULL,
    editora VARCHAR(200) NOT NULL
);

CREATE TABLE tbl_autor(
    id_autor INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_autor VARCHAR(200) NOT NULL,
    nacionalidade VARCHAR(200) NOT NULL
);

CREATE TABLE tbl_autor_livro(
    isbn VARCHAR(16) NOT NULL,
    id_autor INTEGER NOT NULL,
   
    CONSTRAINT fk_isbn_tbl_autor_livro FOREIGN KEY (isbn)
        REFERENCES tbl_livro(isbn),
   
    CONSTRAINT fk_id_autor_tbl_autor_livro FOREIGN KEY (id_autor)
        REFERENCES tbl_autor(id_autor)
);

CREATE TABLE tbl_exemplar(
    id_exemplar INTEGER PRIMARY KEY,
    status_exemplar VARCHAR(16) NOT NULL,
    isbn VARCHAR(16) NOT NULL,
   
    CONSTRAINT fk_isbn_tbl_exemplar FOREIGN KEY (isbn)
        REFERENCES tbl_livro(isbn)
   
);

CREATE TABLE tbl_membro(
    id_membro INTEGER PRIMARY KEY,
    nome_membro VARCHAR(200) NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    telefone VARCHAR(16) NOT NULL
);

CREATE TABLE tbl_emprestimo(
    id_emprestimo INTEGER PRIMARY KEY,
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE NOT NULL,
    data_devolucao_efetiva DATE,
    id_exemplar INTEGER NOT NULL,
    id_membro INTEGER NOT NULL,
   
    CONSTRAINT fk_id_exemplar_tbl_emprestimo FOREIGN KEY (id_exemplar)
        REFERENCES tbl_exemplar(id_exemplar),
       
    CONSTRAINT fk_id_membro_tbl_emprestimo FOREIGN KEY (id_membro)
        REFERENCES tbl_membro(id_membro)
);

INSERT INTO tbl_autor(nome_autor, nacionalidade)
    VALUES ('Machado de Assis','Brasileira');
    
INSERT INTO tbl_autor(nome_autor, nacionalidade)
    VALUES ('J.K. Rowling','Britânica');

UPDATE tbl_autor
SET nacionalidade = "Brasileiro"
WHERE id_autor = 1;

UPDATE tbl_autor
SET nome_autor = "J.K. Rowling (Joanne Rowling)",
	nacionalidade = "Britânica (Reino Unido)"
WHERE id_autor = 2;

DELETE FROM tbl_autor
WHERE id_autor = 2;

-- Não executar!
UPDATE tbl_autor
SET nacionalidade = "Desconhecida";

-- Consulta todas as colunas e dados da tabela
SELECT * FROM tbl_autor;

-- Consulta apenas o nome
SELECT nome_autor FROM tbl_autor;

SELECT * FROM tbl_autor
WHERE id_autor = 1;

SELECT * FROM tbl_autor
WHERE nacionalidade = "Brasileiro";

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

-- Uso de operadores e "AS"
-- "AS" "Cria" uma nova coluna, não é um dado!
SELECT titulo_livro, ano_publicacao, ano_publicacao + 10 AS ano_revisao
FROM tbl_livro;

-- Operadores Lógicos
-- AND -> Seleciona apenas se todas as condições do where forem verdadeiras, nesse caso, a editora deve ser Rocco e o ano de publicação menor que 2010
SELECT * FROM tbl_livro
WHERE editora = "Rocco"
AND ano_publicacao < 2010;
-- OR -> Seleciona se pelo menos UMA das condições forem verdadeiras
SELECT * FROM tbl_membro
WHERE nome_membro = "Ana Silva"
OR endereco = "Praca C, 789";
-- NOT -> Seleciona o OPOSTO da condição, ele é usado para negar uma condição
SELECT * FROM tbl_autor
WHERE NOT nacionalidade = "Brasileiro"
AND NOT nacionalidade = "Brasileira";

-- Operadores Auxiliares
-- BETWEEN -> Seleciona valores dentro de um intervalo
SELECT * FROM tbl_livro
WHERE ano_publicacao BETWEEN 1990 AND 2000;
-- IN -> Seleciona valores que correspondem a uma lista. Evita o uso de vários "OR"
SELECT * FROM tbl_livro
WHERE editora IN ("Rocco", "Editora Clássica");
-- LIKE -> Usado para busca de padrões em colunas de texto. É usado com % e _. "%" substitui 0, 1 ou mais caracteres. "_" Substitui exatamente um caracter.
-- Busca membros cujo nome COMEÇA com "Ana"
SELECT * FROM tbl_membro
WHERE nome_membro LIKE "Ana%"; -- O "A" não precisa ser maiúsculo para detectar, isso sem ativar o "utf8mb4_bin"
-- Busca livros que CONTÊM "Potter" no nome
SELECT * FROM tbl_livro
WHERE titulo_livro LIKE "%potter%";

-- Muda para que diferencie letras maiúsculas de minúsculas e letras com acento e sem acento
ALTER TABLE tbl_membro
MODIFY nome_membro VARCHAR(100)
COLLATE utf8mb4_bin;

INSERT INTO tbl_exemplar(id_exemplar, status_exemplar, isbn)
VALUES (1, "Emprestado", "978-85-7126-061-0");

INSERT INTO tbl_emprestimo (id_emprestimo, data_emprestimo, data_devolucao, id_exemplar, id_membro)
VALUES (1, "2025-10-10", "2025-10-20", 1, 101);

INSERT INTO tbl_emprestimo (id_emprestimo, data_emprestimo, data_devolucao, data_devolucao_efetiva, id_exemplar, id_membro)
VALUES (2, "2025-10-10", "2025-10-20", "2025-11-01", 1, 101);

-- IS NULL ou IS NOT NULL -> NULL é AUSÊNCIA DE VALOR
-- Busca todos os empréstimos que NÃO FORAM DEVOLVIDOS
SELECT * FROM tbl_emprestimo
WHERE data_devolucao_efetiva IS NULL;

-- Funções SQL
-- Funções de Data e Hora (comandos no PDF - Aula 07)
INSERT INTO tbl_emprestimo (id_emprestimo, data_emprestimo, data_devolucao, id_exemplar, id_membro)
VALUES (3, CURDATE(), CURDATE() + INTERVAL 7 DAY, 1, 101);

-- Funções de String (comandos no PDF - Aula 07)
SELECT CONCAT(nome_autor, " (", nacionalidade, ")") -- Junta "nome_autor" com "nacionalidade"
AS etiqueta
FROM tbl_autor;
