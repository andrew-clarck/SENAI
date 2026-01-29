/* Funções */
/* 1 */
// function contarVogais(texto) {
//     const vogaisEncontradas = texto.match(/[aeiou]/gi); // [aeiou] procura por "aeiou" -> vogais. "g" -> procura por todo o texto, não para assim que encontrar a primeira vogal. "i" -> Procura por minúsculas e maiúsculas.
//     if (vogaisEncontradas == null) {
//         return 0;
//     } else {
//         return vogaisEncontradas.length;
//     }
// }

// const texto = "Banana";
// const numeroDeVogais = contarVogais(texto);
// console.log(`O texto "${texto}" contém ${numeroDeVogais} vogais.`)

/* 2 */
// function fibonacci(num) {
//     let a = 0;
//     let b = 1;
//     let sequencia = [];

//     if (num >= a) {
//         sequencia.push(a);
//     } else {
//         return "Número negativo"
//     }
//     if (num >= b) {
//         sequencia.push(b);
//     }

//     while(true) {
//         let proximo = a + b;

//         if (proximo > num) {
//             break;
//         }
//         else {
//             sequencia.push(proximo);
//             a = b;
//             b = proximo;
//         }
//     }
//     return sequencia;
// }

// const fibo = fibonacci(50);
// console.log(fibo);

/* 3.1 */
// function numeroPrimo(listaNum) {
//     listaNum.forEach(num => {
//         if (num <= 1) {
//             return "O número não é primo se for 1 ou menor, ele deve conter 2 divisores."
//         } else {
//             let primo = true;
//             for (let i = 2; i <= Math.sqrt(num); i++) {
//                 if (num % i == 0) {
//                     console.log(`Divisor encontrado: ${i}. O número ${num} não é primo.`);
//                     primo = false;
//                     break;
//                 }
//             }
//                 console.log(`Nenhum divisor encontrado. O número ${num} é primo.`);
//         }
//     });
// }

// const listaNumero = [999999999989, 2, 5, 1, 4];
// numeroPrimo(listaNumero)

/* 3.2 */
// function numeroPrimo(listaNum) {
//     for (i = 0; i < listaNum.length; i++) {
//         let numLista = listaNum[i]
//         if (numLista <= 1) {
//             console.log("O número não é primo se for 1 ou menor, ele deve conter 2 divisores.");
//         } else {
//             let primo = true;
//             for (let i = 2; i <= Math.sqrt(numLista); i++) {
//                 if (numLista % i == 0) {
//                     console.log(`Divisor encontrado: ${i}. O número ${numLista} não é primo.`);
//                     primo = false;
//                     break;
//                 }
//             }
//             if (primo == true) {
//                 console.log(`Nenhum divisor encontrado. O número ${numLista} é primo.`);
//             }
//         }
//     }
// }

// const listaNumero = [999999999989, 2, 5, 1, 4];
// numeroPrimo(listaNumero)

/* 4 */
// function palindromo(palavra) {
//     let palavraInvertida = palavra.split("").reverse("").join("");
//     if (palavraInvertida == palavra) {
//         return `A palavra "${palavra}" é um palíndromo.`;
//     } else {
//         return `A palavra "${palavra}" não é um palíndromo, ao contrário fica: "${palavraInvertida}".`;
//     }
// }

// const palavra1 = "arara";
// const palavra2 = "banana";

// console.log(palindromo(palavra1));
// console.log(palindromo(palavra2));

/* 9 */
// class Biblioteca {
//   constructor() {
//     this.livros = [];
//   }

//   adicionarLivro(livro) {
//     this.livros.push(livro);
//   }

//   removerLivro(tituloDoLivro) {
//     this.livros = this.livros.filter(livro => livro !== tituloDoLivro);
//   }
  
//   listarLivros() {
//     return this.livros;
//   }

// }

// let biblioteca1 = new Biblioteca();

// biblioteca1.adicionarLivro("Dom Casmurro");
// console.log(biblioteca1.listarLivros());

// biblioteca1.adicionarLivro("Bíblia");
// console.log(biblioteca1.listarLivros());
// biblioteca1.removerLivro("Dom Casmurro");
// console.log(biblioteca1.listarLivros());

/* 10 */
// class Cofrinho {
//     #moedas
//     #notas
//     constructor(notas, moedas) {
//         this.#moedas = moedas;
//         this.#notas = notas;
//     }

//     depositar(moedasDepositadas, notasDepositadas) {
//         this.#moedas += moedasDepositadas;
//         this.#notas += notasDepositadas;
//     }

//     retirar(moedasRetiradas, notasRetiradas) {
//         if (moedasRetiradas > this.#moedas || notasRetiradas > this.#notas) {
//             return `Você não possui notas ou moedas suficientes para retirar`;
//         }
//         else {
//             this.#moedas -= moedasRetiradas;
//             this.#notas -= notasRetiradas;
//         }
//     }

//     get getSaldo() {
//         return this.#moedas + this.#notas;
//     }
// }

// const cofre1 = new Cofrinho(10,10);

// console.log(`R$${cofre1.getSaldo}`);
// cofre1.depositar(100, 20);
// console.log(`R$${cofre1.getSaldo}`);

// cofre1.retirar(50, 5);
// console.log(`R$${cofre1.getSaldo}`);
