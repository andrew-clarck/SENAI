const {
  soma,
  subtrai,
  multiplica,
  divide,
  ehPar,
  raiz,
  media,
} = require("./calculadora");

describe("soma", () => {
  test("soma dois números positivos", () => {
    expect(soma(2, 3)).toBe(5);
  });

  test("soma de dois números negativos", () => {
    expect(soma(-2, -3)).toBe(-5);
  });
});

describe("raiz", () => {
  test("calcula a raíz de numero não exato com precisão", () => {
    expect(raiz(2)).toBeCloseTo(1.414);
  });

  test("lança erro para número negativo", () => {
    expect(() => raiz(-4)).toThrow(
      "Nao e possivel calcular raiz de numero negativo",
    );
  });

  test("calcula a raiz de um numero com precisão", () => {
    expect(raiz(9)).toBe(3);
  });
});

describe("subtrai", () => {
  test("retorna resultado correto da subtração", () => {
    expect(subtrai(3, 2)).toBe(1);
  });

  test("retorna número negativo quando resultado é negativo", () => {
    expect(subtrai(2, 3)).toBe(-1);
  });
});

describe("multiplica", () => {
  test("retorna produto correto entre dois números", () => {
    expect(multiplica(2, 2)).toBe(4);
  });

  test("retorna 0 quando um dos fatores é 0", () => {
    expect(multiplica(2, 0)).toBe(0);
  });

  test("resultado maior do que cada um dos fatores individualmente", () => {
    const resultado = multiplica(2, 3);

    expect(resultado).toBeGreaterThan(2);
    expect(resultado).toBeGreaterThan(3);
  });
});

describe("divide", () => {
  test("retorna o resultado correto da divisão", () => {
    expect(divide(2, 2)).toBe(1);
  });

  test("lança erro quando b for 0", () => {
    expect(() => divide(2, 0)).toThrow("Nao e possivel dividir por zero");
  });
});

describe("ehPar", () => {
  test("retorna verdadeiro para número par", () => {
    expect(ehPar(2)).toBeTruthy();
  });

  test("retorna falso para número impar", () => {
    expect(ehPar(3)).toBeFalsy();
  });
});

describe("media", () => {
  test("calcula corretamente a média de uma lista de números inteiros", () => {
    expect(media([3, 2, 1])).toBe(2);
  });

  test("calcula corretamente a média quando o resultado for decimal", () => {
    expect(media([1, 2, 2, 1, 3, 2])).toBeCloseTo(1.83);
  });

  test("lança erro quando a lista estiver vazia", () => {
    expect(() => media([])).toThrow("A lista de numeros nao pode ser vazia");
  });

  test("lança erro quando o argumento nao for um array", () => {
    expect(() => media(2)).toThrow("A lista de numeros nao pode ser vazia");
  });
});
