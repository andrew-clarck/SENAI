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

/* 3 */
// function numeroPrimo(num) {
//     if (num <= 1) {
//         return "O número não é primo se for 1 ou menor, ele deve conter 2 divisores, não apenas 1."
//     } else {
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i == 0) {
//                 return `Divisor encontrado. O número ${num} não é primo.`;
//             } else {
//             }
//         }
//         return `Nenhum divisor encontrado. O número ${num} é primo.`;
//     }
// }

// const numero = 13;
// console.log(numeroPrimo(numero));

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
