#Produzido por Andrew Clarck nº02 2ºB
#1
CREATE USER 'secretaria'@'localhost' IDENTIFIED BY 'Escola@Sec1';
CREATE USER 'professor'@'localhost' IDENTIFIED BY 'Escola@Prof2';

DROP USER 'secretaria'@'localhost';
DROP USER 'professor'@'localhost';
-- Permissões iniciais
GRANT ALL PRIVILEGES ON db_escola.tbl_alunos TO 'secretaria'@'localhost';
GRANT SELECT ON db_escola.tbl_alunos TO 'professor'@'localhost';

-- Permissões pós-promoção do professor
GRANT SELECT, UPDATE ON db_escola.tbl_alunos TO 'professor'@'localhost';

-- Permissões pós-rescisão do contrato do funcionário da secretaria
REVOKE ALL PRIVILEGES ON db_escola.tbl_alunos FROM 'secretaria'@'localhost';


#2
-- Selecionar o banco
USE db_biblioteca_b;

-- Inserir dados na tabela
INSERT INTO tbl_livros (id_livro, titulo, autor, ano_publicacao, preco)
VALUES
(1, 'Dom Casmurro', 'Machado de Assis', 1899, 39.90),
(2, 'O Alquimista', 'Paulo Coelho', 1988, 29.50),
(3, 'A Hora da Estrela', 'Clarice Lispector', 1977, 34.00);

-- Apagar a tabela depois de backup
DROP TABLE tbl_livros;

-- Verificar se os dados estão na tabela depois do backup
SELECT * FROM tbl_livros;