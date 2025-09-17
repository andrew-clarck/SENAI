// VARIAVEIS E OPERACOES
//////////////////////////////////////////////////
/* 1 */
// let num1 = 2;
// let num2 = 3;
// let soma = num1 + num2;
// console.log(`Resultado de ${num1} + ${num2} é igual a: ${soma}`)

// /* 2 */
// let baseRetangulo = 10;
// let alturaRetangulo = 20;
// let areaRetangulo = baseRetangulo * alturaRetangulo;
// console.log(`Essa é área do retângulo: ${areaRetangulo}`)

// /* 3 */
// let temperaturaCelsius = 32;
// let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
// console.log(`A temperatura de 32ºC em Fahrenheit é igual a: ${temperaturaFahrenheit}`)

// /* 4 */
// let numMedia1 = 5;
// let numMedia2 = 6;
// let numMedia3 = 7;
// let media = (numMedia1 + numMedia2 + numMedia3) / 3;
// console.log(`A média dos números ${numMedia1}, ${numMedia2} e ${numMedia3} é igual a: ${media}`)

// /* 5 */
// let numero1 = 5;
// let numero2 = 4;
// let multiplicacao = numero1 * numero2;
// console.log(`A multiplicação dos números ${numero1} e ${numero2} é igual a: ${multiplicacao}`)
//////////////////////////////////////////////////
// CONDICIONAIS
//////////////////////////////////////////////////
/* 1 */
// let num = 0;

// if (num > 0) {
//     console.log(`O número ${num} é positivo!`);
// } else if (num < 0) {
//     console.log(`O número ${num} é negativo!`);
// } else {
//     console.log("O número é 0!")
// }

// /* 2 */
// let idade = 18;

// if (idade >= 18) {
//     console.log("Você é maior de idade.");
// } else {
//     console.log("Você é menor de idade.")
// }

// /* 3 */
// let numero = 10;
// let verificacao = numero % 2;

// if (verificacao == 0) {
//     console.log(`O número ${numero} é par`);
// } else {
//     console.log(`O número ${numero} é ímpar`)
// }

// /* 4 */
// let nota1 = 7;
// let nota2 = 10;
// let media = (nota1 + nota2) / 2;

// if (media < 7) {
//     console.log(`Sua média foi ${media}, você está reprovado`);
// } else {
//     console.log(`Sua média foi ${media}, você está aprovado, parabéns!`)
// }

// /* 5 */
// let numero1 = 20;
// let numero2 = 200;
// let numero3 = 2000;

// if (numero1 == numero2 && numero1 == numero3) {
//     console.log("Não há número maior, todos são iguais");
// } else if (numero1 > numero2 && numero1 > numero3) {
//     console.log(`O número ${numero1} é o maior entre os três: ${numero1}, ${numero2} e ${numero3}`);
// } else if (numero2 > numero3) {
//     console.log(`O número ${numero2} é o maior entre os três: ${numero1}, ${numero2} e ${numero3}`);
// } else {
//     console.log(`O número ${numero3} é o maior entre os três: ${numero1}, ${numero2} e ${numero3}`)
// }
//////////////////////////////////////////////////
// MULTIPLAS CONDICOES OU SWITCH
//////////////////////////////////////////////////
/* 1 */
// let idade = 71;

// if (idade >= 0 && idade < 12) {
//     console.log("Você é uma criança.");
// } else if (idade >= 12 && idade <= 17) {
//     console.log("Você é um adolescente.");
// } else if (idade >= 18 && idade <= 59) {
//     console.log("Você é um adulto.");
// } else if (idade >= 60 && idade <= 130) {
//     console.log("Você é um idoso.");
// } else {
//     console.log("Sua idade é inválida.")
// }

// /* 2 */
// let ano = 1600;
// let verificacaoBissesexto1 = ano % 4;
// let verificacaoBissesexto2 = ano % 100;
// let verificacaoBissesexto3 = ano % 400;

// if (verificacaoBissesexto1 == 0 && verificacaoBissesexto2 != 0 || verificacaoBissesexto3 == 0) {
//     console.log(`O ano ${ano} é bissexto.`);
// } else {
//     console.log(`O ano ${ano} não é bissexto.`)
// }

// /* 3 */
// let num1 = 2;
// let num2 = 0;
// let operacao = "/";

// switch (operacao) {
//     case "+":
//         let soma = num1 + num2;
//         console.log(`${num1} + ${num2} = ${soma}`);
//         break;
//     case "-":
//         let subtracao = num1 - num2;
//         console.log(`${num1} - ${num2} = ${subtracao}`);
//         break;
//     case "*":
//         let multiplicacao = num1 * num2;
//         console.log(`${num1} X ${num2} = ${multiplicacao}`);
//         break;
//     case "/":
//         if (num2 == 0) {
//             console.log("Resultado indefinido");
//             break;
//         } else {
//             let divisao = num1 / num2;
//             console.log(`${num1} / ${num2} = ${divisao}`);
//             break;
//         }

//     default:
//         console.log("Operação inválida.")
// }

// /* 4 */
// let dia = 6;

// switch (dia) {
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("Segunda-Feira");
//         break;
//     case 3:
//         console.log("Terça-Feira");
//         break;
//     case 4:
//         console.log("Quarta-Feira");
//         break;
//     case 5:
//         console.log("Quinta-Feira");
//         break;
//     case 6:
//         console.log("Sexta-Feira");
//         break;
//     case 7:
//         console.log("Sábado");
//         break;
//     default:
//         console.log("Dia inválido.")
// }

// /* 5 */
// let nota = 5.9;

// if (nota > 10 || nota < 0) {
//     console.log("Nota inválida");
// } else if (nota <= 10 && nota >= 9) {
//     console.log("Sua nota é A! Parabéns!");
// } else if (nota <= 8.9 && nota >= 7) {
//     console.log("Sua nota é B! Bom trabalho!");
// } else if (nota <= 6.9 && nota >= 6) {
//     console.log("Sua nota é C!");
// } else if (nota <= 5.9 && nota >= 3) {
//     console.log("Sua nota é D!");
// } else {
//     console.log("Sua nota é F!")
// }
//////////////////////////////////////////////////
// REPETICAO
//////////////////////////////////////////////////
// /* 1 */
// for (let i = 1; i < 11; i++) {
//     console.log(i)
// }

// /* 2 */
// let soma = 0

// for (let i = 1; i < 101; i++) {
//     let num = i;
//     soma = soma + num;
// }
// console.log(`O resultado da soma de todos os números de 1 a 100 é igual a: ${soma}`)

// /* 3 */
// let numTabuada = 5;

// for (let i = 1; i < 11; i++) {
//     let multiplicacao = numTabuada * i;
//     console.log(`${numTabuada} X ${i} = ${multiplicacao}`)
// }

// /* 4 */
// for (let i = 1; i < 51; i++) {
//     let verificacao = i % 2;

//     if (verificacao == 0) {
//         console.log(i);
//     }
// }

/* 5 */
// let numFatorial = 5;
// let resultado = 1;

// for (let i = numFatorial; i > 0; i--) {
//     resultado = resultado * i;
// }
// console.log(`O resultado de ${numFatorial}! é: ${resultado}`)
//////////////////////////////////////////////////
// ARRAYS
//////////////////////////////////////////////////
// /* 1 */
// let equipe = ["Mordecai", "Pedro", "Mago", "Babu", "Sola"];

// for (let i = 0; i < equipe.length; i++) {
//     console.log(equipe[i])
// }

// /* 2 */
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numeros.length; i++) {
//     let verificacao = numeros[i] % 2;
//     if (verificacao == 0) {
//         console.log(numeros[i])
//     }
// }

// /* 3 */
// let listaNumeros = [1, 2, 3, 4, 5];
// let soma = 0;

// for (let i = 0; i < listaNumeros.length; i++) {
//     soma = soma + listaNumeros[i];
// }
// console.log(`O resultado da soma de todos os itens da lista é igual a: ${soma}`)

// /* 4 */
// let numLista = [10, 100, 230, 40, 20000000, 23, 1, -10000000000];

// let maior = numLista[0];

// for (let i = 0; i < numLista.length; i++) {
//     if (numLista[i] > maior) {
//         maior = num
//     }
// }
// console.log(`O maior número é ${maior}.`)

// /* 5 */
// let listaNomes = ["Andrew", "Matheus", "Adrian"];
// console.log(listaNomes.includes("Matheus"))

// /* 6 */
// let listaPadrao = [1, 2, 3];
// listaPadrao.push(299);
// console.log(listaPadrao)

// /* 7 */
// let listaComum = [5, 4, 3, 2, 1];
// listaComum.pop();
// console.log(listaComum)



/////////////////////////////////////////
// DESAFIO
/////////////////////////////////////////
// let totalCabecas = 10;
// let totalPatas = 22;

// for (let quantidadeGalinha = 0; quantidadeGalinha <= totalCabecas; quantidadeGalinha++) {
//     let quantidadePorco = totalCabecas - quantidadeGalinha;
//     let patas = (quantidadeGalinha * 2) + (quantidadePorco * 4);
//     if (patas == totalPatas) {
//         console.log(`Total de porcos: ${quantidadePorco}`);
//         console.log(`Total de galinhas: ${quantidadeGalinha}`);
//         break;
//     }
// }