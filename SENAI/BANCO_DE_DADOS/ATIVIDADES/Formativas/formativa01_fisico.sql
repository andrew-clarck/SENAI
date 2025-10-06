CREATE DATABASE db_educatech_b;

USE db_educatech_b;

CREATE TABLE tbl_aluno (
	email_aluno VARCHAR(50) PRIMARY KEY NOT NULL,
    nome_completo_aluno VARCHAR(100) NOT NULL,
    cpf BIGINT NOT NULL,
    data_nascimento DATE NOT NULL
);

CREATE TABLE tbl_instrutor (
	id_instrutor INT PRIMARY KEY AUTO_INCREMENT,
    nome_completo_instrutor VARCHAR(100) NOT NULL,
    mini_biografia VARCHAR(2000) NOT NULL
);

CREATE TABLE tbl_cursos (
	id_curso VARCHAR(10) PRIMARY KEY NOT NULL,
    id_instrutor INT NOT NULL,
    titulo_curso VARCHAR(100) NOT NULL,
    carga_horaria TIME NOT NULL,
    nivel_dificuldade VARCHAR(15) NOT NULL,
    FOREIGN KEY (id_instrutor) REFERENCES tbl_instrutor(id_instrutor)
);

CREATE TABLE tbl_matricula (
	email_aluno VARCHAR(50) NOT NULL,
    id_curso VARCHAR(10) NOT NULL,
    data_matricula DATE NOT NULL,
    status_matricula VARCHAR(15) NOT NULL,
    PRIMARY KEY (email_aluno, id_curso),
    FOREIGN KEY (email_aluno) REFERENCES tbl_aluno(email_aluno),
    FOREIGN KEY (id_curso) REFERENCES tbl_cursos(id_curso)
);

CREATE TABLE tbl_aulas (
	numero_ordem INT NOT NULL,
    id_curso VARCHAR(10) NOT NULL,
    titulo_aula VARCHAR(100) NOT NULL,
    link_aula VARCHAR(2083) NOT NULL,
    PRIMARY KEY(numero_ordem, id_curso),
    FOREIGN KEY (id_curso) REFERENCES tbl_cursos(id_curso)
);