CREATE DATABASE db_blog_b;

USE db_blog_b;

CREATE TABLE tbl_autor (
	id_autor INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) UNIQUE NOT NULL,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE tbl_postagem (
	id_postagem INT PRIMARY KEY AUTO_INCREMENT,
    id_autor INT NOT NULL,
    conteudo VARCHAR(20000) NOT NULL,
    data_comentario DATE,
    hora_comentario TIME,
    FOREIGN KEY (id_autor) REFERENCES tbl_autor(id_autor)
);

CREATE TABLE tbl_comentario (
	id_comentario INT PRIMARY KEY AUTO_INCREMENT,
    id_autor INT NOT NULL,
    id_postagem INT NOT NULL,
    texto_comentario VARCHAR(5000) NOT NULL,
    data_comentario DATE,
    hora_comentario TIME,
    FOREIGN KEY (id_autor) REFERENCES tbl_autor(id_autor),
    FOREIGN KEY (id_postagem) REFERENCES tbl_postagem(id_postagem)
);