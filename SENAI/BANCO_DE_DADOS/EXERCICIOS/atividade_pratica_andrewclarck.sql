CREATE DATABASE db_atividade_pratica;
USE db_atividade_pratica;

CREATE TABLE tbl_clientes (
	id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome_cliente VARCHAR(150) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    cidade VARCHAR(58) NOT NULL
);

CREATE TABLE tbl_produtos (
	id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome_produto VARCHAR(50) NOT NULL,
    preco_produto NUMERIC(10, 2) NOT NULL,
    estoque INT NOT NULL
);

CREATE TABLE tbl_pedidos (
	id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    id_produto INT NOT NULL,
    data_pedido DATE NOT NULL,
    quantidade_itens INT NOT NULL,
    cancelado VARCHAR(200),
    
    CONSTRAINT fk_cliente FOREIGN KEY (id_cliente)
        REFERENCES tbl_clientes(id_cliente),
        
	CONSTRAINT fk_produto FOREIGN KEY (id_produto)
        REFERENCES tbl_produtos(id_produto)
);


-- ETAPA 2
-- TAREFA 1
INSERT INTO tbl_clientes(nome_cliente, telefone, cidade)
VALUES
("Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Ciriano Serafim de Bragança e Bourbon", "+5511949333423", "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch"),
("Andrew Clarck", "+5511933455632", "Salto"),
("Lucas Felipe Sola", "+5511965825601", "Pindamonhangaba"),
("Matusálem de Andrade", "+5511943211234", "Gramado"),
("Joseph Joestar", "+5511676767676", "Curitiba");

INSERT INTO tbl_produtos(nome_produto, preco_produto, estoque)
VALUES
("Post-It do Homem-Aranha", 12.00, 50),
("Foto de Morango do Amor", 9.90, 200),
("Caderno do Labubu", 29.90, 30),
("Lapiseira de Clorofita", 90.50, 20),
("Fita Crepe com Adesivo de Pistache", 25.00, 10);

INSERT INTO tbl_pedidos(id_cliente, id_produto, data_pedido, quantidade_itens)
VALUES
(6, 11, "2025-10-20", 5),
(8, 13, "2025-10-23", 10),
(9, 15, "2025-11-01", 4);

-- TAREFA 2
SELECT * FROM tbl_clientes;
SELECT * FROM tbl_produtos;
SELECT * FROM tbl_pedidos;

-- TAREFA 3
UPDATE tbl_produtos
SET preco_produto = 39.90
WHERE id_produto = 13;

-- TAREFA 4
-- A
