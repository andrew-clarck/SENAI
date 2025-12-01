/* Aula 09 - Transaction Control Language */
USE db_saber_e_cia_b;

-- COMMIT
-- O comando COMMIT (Confirmar) é usado para salvar permanentemente todas as alterações feitas na transação atual.
START TRANSACTION;

	UPDATE tbl_membro
	SET telefone = '11-99999-0000' WHERE id_membro = 101;

COMMIT;
-- ROLLBACK
-- O comando ROLLBACK (Reverter) é o "Ctrl+Z" do banco de dados. Ele descarta todas as alterações feitas desde o último COMMIT ou START TRANSACTION.
START TRANSACTION;

	INSERT INTO tbl_membro(id_membro, nome_membro, endereco, telefone)
	VALUES
	(999, 'Membro Teste', 'Rua Antônio Almeida Campos, Bairro Residencial Fabri, 52', '11-94933-3423');

COMMIT;

ROLLBACK;

SELECT * FROM tbl_membro;

-- SAVEPOINT
/* O SAVEPOINT é um "marcador" ou "ponto de verificação" dentro de uma transação
longa.
Ele permite que você execute um ROLLBACK parcial, voltando apenas até aquele
marcador, sem descartar a transação inteira. */
START TRANSACTION;

	-- Operação 1
	INSERT INTO tbl_membro(id_membro, nome_membro, endereco, telefone)
	VALUES
	(998, 'Membro Teste 2', 'Praça D, 456', '11-11111-1111');
    
    SAVEPOINT ponto_A;
    
    -- Operação 2
    UPDATE tbl_membro
    SET endereco = 'Rua D, 456' WHERE id_membro = 998;

	ROLLBACK TO SAVEPOINT ponto_A; -- Desfaz apenas a operação 2 e não a 1
    
COMMIT; -- Salva apenas a operação 1
    
SELECT * FROM tbl_membro;


/* Aula 09 - Programação no Banco de Dados */
-- VIEW - Salva um SELECT dentro dele, sempre que é chamado, ele executa esse SELECT
-- É uma "consulta salva" que pode ser tratada como se fosse uma tabela.
CREATE VIEW V_Relatorio_Emprestimos AS
SELECT M.nome_membro, L.titulo_livro, E.data_emprestimo, E.data_devolucao
FROM tbl_membro M
INNER JOIN tbl_emprestimo E
	ON M.id_membro = E.id_membro
INNER JOIN tbl_exemplar EX 
	ON E.id_exemplar = EX.id_exemplar
INNER JOIN tbl_livro L
	ON EX.isbn = L.isbn;

-- Ao invés de escrever todo o JOIN novamente, agora basta escrever:    
SELECT * FROM V_Relatorio_Emprestimos
WHERE nome_membro = 'Ana Silva';


-- STORED PROCEDURE
-- Uma PROCEDURE é um conjunto de comandos SQL nomeado e armazenado no banco, que pode ser executado com um simples CALL.
DELIMITER $$ -- Delimita quando é o fim da Query, ele muda o fim da query, nesse caso para '$$'

CREATE PROCEDURE sp_novo_emprestimo(
	IN p_id_exemplar INT,
	IN p_id_membro INT
)
BEGIN
	INSERT INTO tbl_emprestimo (id_emprestimo, data_emprestimo, data_devolucao, data_devolucao_efetiva, id_exemplar, id_membro)
    VALUES
    (1000, CURDATE(), CURDATE() + INTERVAL 14 DAY, NULL, p_id_exemplar, p_id_membro);
END$$

DELIMITER ;



CALL sp_novo_emprestimo(101, 101);

SELECT * FROM tbl_emprestimo;

-- FUNCTION
/* Uma FUNCTION é um bloco de código que obrigatoriamente retorna um valor único.
Ela é projetada para ser usada dentrode outras consultas SQL (como SELECT ou WHERE), similar às funções nativas (UCASE(), NOW()).
Regra: Funções, por padrão, não podem executar DML (INSERT, UPDATE). Elas servem para cálculos. */
DELIMITER $$

CREATE FUNCTION fn_status_membro (p_id_membro INT)
RETURNS VARCHAR(20)
DETERMINISTIC
BEGIN
	-- Como a criação de variável
	DECLARE v_atrasos INT;
    
    -- Conta quantos empréstimos estão atrasados
    SELECT COUNT(*) INTO v_atrasos
    FROM tbl_emprestimo
    WHERE id_membro = p_id_membro
		AND data_devolucao < CURDATE()
        AND data_devolucao_efetiva IS NULL;
	
    IF v_atrasos > 0 THEN
		RETURN 'Com Atraso';
	ELSE
		RETURN 'Regular';
	END IF;
END$$

DELIMITER ;

-- Função sendo chamada em um SELECT (o mais comum)
SELECT nome_membro, fn_status_membro(id_membro) AS status_atraso 
FROM tbl_membro;