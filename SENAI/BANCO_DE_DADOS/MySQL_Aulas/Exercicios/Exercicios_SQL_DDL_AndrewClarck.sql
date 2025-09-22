#Produzido por Andrew Clarck Nº02 2ºB
#Projeto 1
CREATE DATABASE db_escola;

USE db_escola;

CREATE TABLE tbl_alunos (
	id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    media_final DECIMAL(4, 2)
);
  
ALTER TABLE tbl_alunos
ADD COLUMN email VARCHAR(150) NOT NULL;
  
DROP TABLE tbl_alunos;
DROP DATABASE db_escola;



#Projeto 2
CREATE DATABASE db_loja_virtual;

USE db_loja_virtual;

CREATE TABLE tbl_produtos (
	id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

ALTER TABLE tbl_produtos
ADD COLUMN estoque INT;

DROP TABLE tbl_produtos;
DROP DATABASE db_loja_virtual;



#Projeto 3
CREATE DATABASE db_rh_empresa;

USE db_rh_empresa;

CREATE TABLE tbl_funcionarios (
	id_funcionario INT PRIMARY KEY AUTO_INCREMENT,
    nome_completo VARCHAR(150) NOT NULL,
    data_admissao DATE NOT NULL
);

ALTER TABLE tbl_funcionarios
ADD COLUMN salario DECIMAL(10,2) NOT NULL;

DROP TABLE tbl_funcionarios;
DROP DATABASE  db_rh_empresa;



#Projeto 4
CREATE DATABASE db_academia;

USE db_academia;

CREATE TABLE tbl_membros (
	id_membro INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    tipo_plano VARCHAR(50) NOT NULL
);

ALTER TABLE tbl_membros
ADD COLUMN data_inscricao DATE;

DROP TABLE tbl_membros;
DROP DATABASE db_academia;