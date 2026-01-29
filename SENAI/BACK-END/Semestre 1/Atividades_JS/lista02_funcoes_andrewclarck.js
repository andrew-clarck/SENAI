/* Basicas */
/* 1 */
// function soma(a, b) {
//     return `${a} + ${b} = ${a + b}`;
// }

// console.log(soma(10, 5));

/* 2 */
// function media(nota1, nota2, nota3) {
//     return (nota1 + nota2 + nota3) / 3;
// }

// console.log(`Sua média é: ${media(7, 10, 7)}`);

/* 3 */
// const area = function(base, altura) {
//     return `(${base} X ${altura}) / 2 = ${(base * altura) / 2}m²`
// }

// console.log(`A área do seu triâgulo é: ${area(5, 3)}`)
////////////////////////////////////////////////////////////////////////////////
/* Anônimas e Arrow functions */
/* 1 */
// const parImpar = function(a) {
//     if (a % 2 == 0) {
//         return `O número ${a} é par.`;
//     } else {
//         return `O número ${a} é ímpar.`;
//     }
// }

// console.log(parImpar(13));

/* 2 */
// const maior = (a, b) => {
//     if (a == b) {
//         return "Os dois números são iguais.";
//     } else if (a > b) {
//         return `O número ${a} é maior do que o número ${b}`;
//     } else {
//         return `O número ${b} é maior do que o número ${a}`;
//     }
// }

// console.log(maior(10, 25));

/* 2.2 */
// const maiorNumero = (a,b) => {return a > b ? a : b}
// console.log(`O número ${maiorNumero(21, 50)} é o maior.`)

/* 3 */
// const funcaoPares = (array) => {
//     let paresEncontrados = [];
//     for (i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {
//             paresEncontrados.push(array[i]);
//         }
//     }
//     return paresEncontrados;
// }
// lista = [2, 1, 12, 3, 10, 8];
// console.log(funcaoPares(lista));

/* 3.2 */
// const parFuncao = (array) => {if(array % 2 == 0){return console.log(array)}};

// let listaArray = [12, 5, 4, 2, 1, 3];
// for (let i = 0; i < listaArray.length; i++) {
//     parFuncao(listaArray[i]);
// }

////////////////////////////////////////////////////////////////////////////////
/* Funções IIFE */
/* 1 */
// (function() {
//     return console.log(".");
// })()

/* 2 */
// (function(a) {
//     return console.log(`${a}² é igual a ${a * a}`);
// })(5)
////////////////////////////////////////////////////////////////////////////////
/* Callback */
/* 1 */
// function mensagemBoasVindas(nome, callback) {
//     return callback(nome);
// }

// function seuNome(name) {
//     return `Boas-Vindas, ${name}`;
// }

// console.log(mensagemBoasVindas("Celso", seuNome))

/* 2 */
// function dobroLista(array, callback) {
//     return callback(array);
// }

// function dobro(array) {
//     let listaNova = [];
//     for (i = 0; i < array.length; i++) {
//         let conta = array[i] * 2;
//         listaNova.push(conta);
//     }
//     return listaNova
// }

// let listaAntiga = [2, 4, 10, 25];
// console.log(`O dobro da lista antiga é: ${dobroLista(listaAntiga, dobro)}`);

/* 2.2 */
// function funcaoDobro(num) {
//     return num * 2;
// }

// function callbackLista(array, callback) {
//     let listaNovaDobro = [];

//     for (let i = 0; i < array.length; i++) {
//         listaNovaDobro.push(callback(array[i]));
//     }
//     return listaNovaDobro;
// }

// let listaAnterior = [2, 5, 12, 15, 4]
// console.log(callbackLista(listaAnterior, funcaoDobro))

////////////////////////////////////////////////////////////////////////////////
/* Função Recursiva */
/* 1 */
// function contagemRegressiva(n) {
//     if (n == 1) {
//         return 1;
//     } else {
//         console.log(n);
//         return contagemRegressiva(n - 1);
//     }
// }

// console.log(contagemRegressiva(10));

/* 1.2 */
// function contagemRegressiva(n) {
//     if (n == 0) {
//         return 0;
//     } else {
//         console.log(n);
//         return contagemRegressiva(n - 1);
//     }
// }

// contagemRegressiva(10);
////////////////////////////////////////////////////////////////////////////////
/* Funções assíncronas */
/* 1 */
// async function espera() {
//   setTimeout(() => {
//     console.log(".");
//   }, 2000);
// }

// espera();

// /* 2 */
// async function dobroNumero(a) {
//   setTimeout(() => {
//     console.log(`${a} x 2 = ${a * 2}`);
//   }, 1000);
// }

// dobroNumero(10);

// /* 3 */
// async function consultaSistema() {
//   console.log("Consultando o sistema...");

//   setTimeout(() => {
//     console.log("Sistema consultado após 3 segundos.");
//   }, 3000);
// }

// consultaSistema();