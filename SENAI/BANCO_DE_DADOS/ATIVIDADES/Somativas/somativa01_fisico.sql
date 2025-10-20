CREATE DATABASE db_saber_e_cia_b;
DROP DATABASE db_saber_e_cia_b;
USE db_saber_e_cia_b;

CREATE TABLE tbl_autor (
	id_autor INT AUTO_INCREMENT PRIMARY KEY,
    nome_autor VARCHAR(100) NOT NULL,
    nacionalidade VARCHAR(50) NOT NULL
);

INSERT INTO tbl_autor(nome_autor, nacionalidade)
    VALUES
    ('Daniel Manoel', 'Brasileiro'),
    ('Marlon Greg', 'Brasileiro');


CREATE TABLE tbl_livros (
	isbn BIGINT PRIMARY KEY,
	titulo VARCHAR(100) NOT NULL,
	ano_publicacao YEAR NOT NULL,
	editora VARCHAR(100) NOT NULL
);

INSERT INTO tbl_livros(isbn, titulo, ano_publicacao, editora)
	VALUES
    ('123456789', 'Java - Como Programar', '2000', 'SENAI'),
    ('987654321', 'Java - Como Programar 2', '2010', 'SENAI');


CREATE TABLE tbl_livro_autor (
	isbn BIGINT NOT NULL,
	id_autor INT NOT NULL,
	PRIMARY KEY (isbn, id_autor),
	CONSTRAINT fk_isbn_tbl_livro_autor FOREIGN KEY (isbn) REFERENCES tbl_livros(isbn),
	CONSTRAINT fk_id_autor_tbl_livro_autor FOREIGN KEY (id_autor) REFERENCES tbl_autor(id_autor)
);

INSERT INTO tbl_livro_autor(isbn, id_autor)
	VALUES
    ('123456789', '1'),
    ('987654321', '2');

CREATE TABLE tbl_exemplares (
	id_exemplar INT AUTO_INCREMENT PRIMARY KEY,
    isbn BIGINT NOT NULL,
    status_exemplar VARCHAR(15) NOT NULL,
    CONSTRAINT fk_isbn_tbl_exemplares FOREIGN KEY (isbn) REFERENCES tbl_livros(isbn)
);

INSERT INTO tbl_exemplares(isbn, status_exemplar)
	VALUES
    ('123456789', 'Emprestado'),
    ('123456789', 'Disponível'),
    ('987654321', 'Emprestado'),
    ('987654321', 'Disponível');
    
CREATE TABLE tbl_membros (
	matricula INT AUTO_INCREMENT PRIMARY KEY,
    nome_membro VARCHAR(100) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    telefone BIGINT NOT NULL
);

INSERT INTO tbl_membros(nome_membro, endereco, telefone)
	VALUES
    ('Andrew Clarck', 'Rua Programador, Bairro Python', '11949333423'),
    ('Adrian Clarck', 'Rua Programador, Bairro Python', '11954323423');

CREATE TABLE tbl_emprestimos (
	id_emprestimo INT PRIMARY KEY AUTO_INCREMENT,
	id_exemplar INT NOT NULL,
    matricula INT NOT NULL,
    data_emprestimo DATE NOT NULL,
    data_prevista_devolucao DATE NOT NULL,
    data_devolucao DATE,
    CONSTRAINT fk_id_exemplar_tbl_emprestimos FOREIGN KEY (id_exemplar) REFERENCES tbl_exemplares(id_exemplar),
    CONSTRAINT fk_matricula_tbl_emprestimos FOREIGN KEY (matricula) REFERENCES tbl_membros(matricula)
);

INSERT INTO tbl_emprestimos(id_exemplar, matricula, data_emprestimo, data_prevista_devolucao)
	VALUES
    ('1', '1', '2025-10-15', '2025-10-22');


CREATE USER 'estagiario'@'localhost' IDENTIFIED BY 'mudar123';

GRANT ALTER ON db_saber_e_cia_b.tbl_livros TO 'estagiario'@'localhost';

USE db_saber_e_cia_b;

ALTER TABLE tbl_livros
ADD COLUMN genero VARCHAR(50) NOT NULL;	