# Aula 1 de MySQL


-- Comando que cria banco de dados
CREATE DATABASE db_biblioteca_b;

-- Apaga um banco de dados
DROP DATABASE db_biblioteca_b;

-- Seleciona um banco de dados para utilizá-lo
USE db_biblioteca_b;

-- Cria uma tabela
CREATE TABLE tbl_livros (
	id_livro INT,
    titulo VARCHAR(100),
    autor VARCHAR(100),
    ano_publicacao INT,
    preco DECIMAL(10, 2)
);

-- Deleta a tabela
DROP TABLE tbl_livros;

-- Cria um index em uma tabela;
CREATE INDEX idx_titulo
ON tbl_livros (titulo);

-- Deleta um index de uma tabela
DROP INDEX idx_titulo
ON tbl_livros;