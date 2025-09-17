/////////////////////////////////////////////////////
/* Função Declarada */
// console.log(`O resultado da soma é ${soma(10, 20)}.`);

// function soma(x, y) {
//     return x + y;
// }
/////////////////////////////////////////////////////
/* Função Expressa */
// const soma = function(x, y) {
//     return x + y;
// }

// console.log(`O resultado da soma é ${soma(15, 5)}`);
/////////////////////////////////////////////////////
/* Arrow Function */
// let soma = (a, b) => { return a + b }

// console.log(`O resultado da soma é ${soma(4, 4)}`);
/////////////////////////////////////////////////////
/* Arrow Imediatas IIFE */
// (function() {
//     return console.log("Olá Celso e Daniel");
// })()
/////////////////////////////////////////////////////
/* Função de Callback */
// function executarCallback(callback) { // Função como parâmetro
//     callback();
// }

// executarCallback(() => {console.log("Callback Executado")});
// Arrow Function sendo passada via argumento

// function executarOperacao(a, b, callback) {
//     return callback(a, b);
// }

// function soma(x, y) {
//     return x + y;
// }

// function multiplicacao(x, y) {
//     return x * y;
// }

// console.log(executarOperacao(2, 4, soma)); // 6
// console.log(executarOperacao(6, 5, multiplicacao)); // 30
/////////////////////////////////////////////////////
/* Função Recursiva */
// function fatorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//         // Resultado de fatorial de 1 e 0. Para a função caso ela seja maior que 1 e se repita
//     } else {
//         return n * fatorial(n - 1);
//         // Chama a função novamente, até chegar em 1 e parar
//     }
// }

// console.log(fatorial(5));
/////////////////////////////////////////////////////
/* Função Assíncrona */
// async function buscarDados() {
//     console.log("Iniciando a busca...");

//     const resposta = await fetch("https://viacep.com.br/ws/13321360/json/");
//     const dados = await resposta.json();


//     console.log("Dados recebidos:", dados);
// }

// buscarDados();
// console.log("Essa mensagem aparece antes da resposta do API!");