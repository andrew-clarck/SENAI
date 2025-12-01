CREATE DATABASE db_saber_e_cia_b;
DROP DATABASE db_saber_e_cia_b;
USE db_saber_e_cia_b;

CREATE TABLE tbl_autor (
	id_autor INT AUTO_INCREMENT PRIMARY KEY,
    nome_autor VARCHAR(100) NOT NULL,
    nacionalidade VARCHAR(50) NOT NULL
);

CREATE TABLE tbl_livros (
	isbn BIGINT PRIMARY KEY,
	titulo VARCHAR(100) NOT NULL,
	ano_publicacao YEAR NOT NULL,
	editora VARCHAR(100) NOT NULL
);

CREATE TABLE tbl_livro_autor (
	isbn BIGINT NOT NULL,
	id_autor INT NOT NULL,
	PRIMARY KEY (isbn, id_autor),
	CONSTRAINT fk_isbn_tbl_livro_autor FOREIGN KEY (isbn) REFERENCES tbl_livros(isbn),
	CONSTRAINT fk_id_autor_tbl_livro_autor FOREIGN KEY (id_autor) REFERENCES tbl_autor(id_autor)
);

CREATE TABLE tbl_exemplares (
	id_exemplar INT AUTO_INCREMENT PRIMARY KEY,
    isbn BIGINT NOT NULL,
    status_exemplar VARCHAR(15) NOT NULL,
    CONSTRAINT fk_isbn_tbl_exemplares FOREIGN KEY (isbn) REFERENCES tbl_livros(isbn)
);

CREATE TABLE tbl_membros (
	matricula INT AUTO_INCREMENT PRIMARY KEY,
    nome_membro VARCHAR(100) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    telefone BIGINT NOT NULL
);

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