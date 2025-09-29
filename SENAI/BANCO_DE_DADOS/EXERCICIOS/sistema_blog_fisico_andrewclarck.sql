CREATE DATABASE db_blog_b;

USE db_blog_b;

CREATE TABLE tbl_autor (
	id_autor INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) UNIQUE,
    nome VARCHAR(100)
);

CREATE TABLE tbl_postagem (
	id_postagem INT PRIMARY KEY,
    id_autor INT FOREIGN KEY,
    conteudo VARCHAR(20000),
    data_comentario DATE,
    hora_comentario TIME
);

CREATE TABLE tbl_comentario (
	id_comentario INT PRIMARY KEY AUTO_INCREMENT,
    id_autor INT FOREIGN KEY,
    id_postagem INT FOREIGN KEY,
    texto_comentario VARCHAR(5000),
    data_comentario DATE,
    hora_comentario TIME
);