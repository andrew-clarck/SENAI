CREATE DATABASE db_saber_e_cia_b;

USE db_saber_e_cia_b;

CREATE TABLE tbl_autor (
	id_autor INT AUTO_INCREMENT PRIMARY KEY,
    nome_autor VARCHAR(100) NOT NULL,
    nacionaliade VARCHAR(50) NOT NULL
);

CREATE TABLE tbl_livros (
	isbn BIGINT PRIMARY KEY,
	id_autor INT NOT NULL,
	titulo VARCHAR(100) NOT NULL,
	ano_publicacao YEAR NOT NULL,
	editora VARCHAR(100) NOT NULL,
	FOREIGN KEY (id_autor) REFERENCES tbl_autor(id_autor)
);

CREATE TABLE tbl_livro_autor (
	isbn BIGINT NOT NULL,
	id_autor INT NOT NULL,
	PRIMARY KEY (isbn, id_autor),
	FOREIGN KEY (isbn) REFERENCES tbl_livros(isbn),
	FOREIGN KEY (id_autor) REFERENCES tbl_autor(id_autor)
);

CREATE TABLE tbl_exemplares (
	id_exemplar INT AUTO_INCREMENT PRIMARY KEY,
    isbn BIGINT NOT NULL,
    status_exemplar VARCHAR(15) NOT NULL,
    FOREIGN KEY (isbn) REFERENCES tbl_livros(isbn)
);

CREATE TABLE tbl_membros (
	matricula INT AUTO_INCREMENT PRIMARY KEY,
    nome_membro VARCHAR(100) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    telefone BIGINT NOT NULL
);

CREATE TABLE tbl_emprestimos (
	id_exemplar INT NOT NULL,
    matricula INT NOT NULL,
    data_emprestimo DATE NOT NULL,
    data_prevista_devolucao DATE NOT NULL,
    data_devolucao DATE NOT NULL,
    PRIMARY KEY (id_exemplar, matricula),
    FOREIGN KEY (id_exemplar) REFERENCES tbl_exemplares(id_exemplar),
    FOREIGN KEY (matricula) REFERENCES tbl_membros(matricula)
);

CREATE USER 'estagiario'@'localhost' IDENTIFIED BY 'mudar123';

GRANT ALTER ON db_saber_e_cia_b.tbl_livros TO 'estagiario'@'localhost';

USE db_saber_e_cia_b;

ALTER TABLE tbl_livros
ADD COLUMN genero VARCHAR(50) NOT NULL;