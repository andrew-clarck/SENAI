const ProdutoService = require("../services/ProdutoService");

describe("ProdutoService - testes unitários", () => {
  let service;
  let mockRepository;

  beforeEach(() => {
    mockRepository = {
      findAll: jest.fn(),
      findById: jest.fn(),
      create: jest.fn(),
      delete: jest.fn(),
    };
    service = new ProdutoService(mockRepository);
  });
  describe("Listar", () => {
    test("chama repository.findAll uma vez e retorna o resultado", () => {
      const produtos = [{ id: 1, nome: "Coxinha", preco: 5 }];
      mockRepository.findAll.mockReturnValue(produtos);

      const resultado = service.listar();

      expect(mockRepository.findAll).toHaveBeenCalledTimes(1);
      expect(resultado).toEqual(produtos);
    });
    test("chama repository.findById uma vez e retorna o resultado", () => {
      const produto = { id: 1, nome: "Coxinha", preco: 5 };
      mockRepository.findById.mockReturnValue(produto);

      const resultado = service.buscarPorId(1);

      expect(mockRepository.findById).toHaveBeenCalledWith(1);
      expect(resultado).toEqual(produto);
    });
  });

  describe("Criar", () => {
    test("repassa os dados para repository.create e retorna o produto criado", () => {
      const dados = { nome: "Batata", preco: 6 };
      const produtoCriado = { id: 4, ...dados };

      mockRepository.create.mockReturnValue(produtoCriado);

      const resultado = service.criar(dados);

      expect(mockRepository.create).toHaveBeenCalledWith(dados);
      expect(resultado).toEqual(produtoCriado);
    });

    test("propaga o erro lançado pelo repository quando os dados são inválidos", () => {
      const dados = { nome: "Coxinha" };
      mockRepository.create.mockImplementation(() => {
        throw new Error("Nome e preco sao obrigatorios");
      });

      expect(() => service.criar(dados)).toThrow(
        "Nome e preco sao obrigatorios",
      );
      expect(mockRepository.create).toHaveBeenCalledWith(dados);
    });
  });

  describe("Remover", () => {
    test("chama repository.delete com o id correto quando o produto existe", () => {
      const id = 1;
      mockRepository.delete.mockReturnValue(true);

      expect(() => service.remover(id)).not.toThrow();
      expect(mockRepository.delete).toHaveBeenCalledWith(id);
    });

    test("lança o erro 'Produto não encontrado' quando o repository retorna false", () => {
      const id = 1;
      mockRepository.delete.mockReturnValue(false);

      expect(() => service.remover(id)).toThrow("Produto nao encontrado");
      expect(mockRepository.delete).toHaveBeenCalledWith(id);
    });
  });
});
