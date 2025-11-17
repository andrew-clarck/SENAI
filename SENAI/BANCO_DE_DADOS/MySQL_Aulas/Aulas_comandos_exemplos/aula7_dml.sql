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
-- SUBSTRING(str, inicio, tamanho): Extrai um pedaço do texto (EXTRA)
SELECT CONCAT(UPPER(nome_autor), " (", nacionalidade, ")") -- Junta "nome_autor" com "nacionalidade"   "UPPER" - Deixa todas maíusculas  LOWER(str) -Converte todo o texto para minúsculas
AS etiqueta
FROM tbl_autor;
 
-- Funções Matemáticas (PDF - Aula 07)
-- ROUND(numero, casas_decimais): Arredonda um número.
-- CEIL(numero): Arredonda para o próximonúmero inteiro (teto).
-- FLOOR(numero): Arredonda para o número inteiro anterior(piso).
-- RAND(): Retorna um número aleatório.
SELECT ROUND(19.99*1.05,2);
SELECT 19.99*1.05;
SELECT FLOOR(19.99*1.05);
SELECT CEIL(19.99*1.05);
SELECT RAND();

/* Funções de Agregação (PDF - Aula 07) */
-- COUNT(): Conta o número de linhas (ONDE A COLUNA NÃO FOR NULA).
-- SUM(): Soma os valores de uma coluna.
-- AVG(): Calcula a média dos valores de uma coluna.
-- MIN(): Encontra o menor valor em uma coluna.
-- MAX(): Encontra o maior valor em uma coluna.
SELECT COUNT(*) AS total_membros
FROM tbl_membro;

SELECT * FROM tbl_membro;

-- Conta apenas os que têm data de devolução
SELECT COUNT(data_devolucao_efetiva) AS total_devolvidos
FROM tbl_emprestimo;

-- Qual o ano mais antigo do acervo?
SELECT MIN(ano_publicacao) AS livro_mais_antigo
FROM tbl_livro;

-- E o mais novo?
SELECT MAX(ano_publicacao) as livro_mais_novo
FROM tbl_livro;

-- Soma dos anos
SELECT SUM(ano_publicacao) AS soma_dos_anos
FROM tbl_livro;

-- Média arredondada pra baixo dos anos
SELECT FLOOR(AVG(ano_publicacao)) AS media_dos_anos
FROM tbl_livro;


-- Exercício 3
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


-- Atividade 4
-- String
SELECT CONCAT(UPPER(nome_membro), " - ", telefone)
AS CONTATO
FROM tbl_membro;

-- Agregação
SELECT COUNT(*) FROM tbl_autor
WHERE nacionalidade = "Brasileiro" OR nacionalidade = "Brasileira"; -- Poderia ser "WHERE nacionalidade LIKE "Brasileir_";

SELECT MIN(ano_publicacao) FROM tbl_livro
WHERE editora = "Aleph";


INSERT INTO tbl_exemplar(id_exemplar, status_exemplar, isbn)
VALUES (2, "Emprestado", "978-85-325-1997-9");

-- Data
INSERT INTO tbl_emprestimo(id_emprestimo, data_emprestimo, data_devolucao, data_devolucao_efetiva, id_exemplar, id_membro)
VALUES (501, CURDATE(), CURDATE() + INTERVAL 14 DAY, NULL, 2, 101);

SELECT * FROM tbl_emprestimo;