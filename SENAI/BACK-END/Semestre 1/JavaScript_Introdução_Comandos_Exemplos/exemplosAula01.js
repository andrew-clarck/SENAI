// var salve = "Manda salve Marlon";
// var salve = "Manda salve Daniel"; // Redeclara a variável
// console.log(salve); // Saída: Manda salve Daniel

// var num = 2+2;
// console.log(num); // Saída: 4

// let daniel = "Manda salve Daniel";
// daniel = daniel + " e Celso"; // Reatribuição da variável:  Adiciona " e Celso"
// // let daniel = daniel = " e Celso"; // Redeclara a variável: Dá erro no código - let não permite redeclaração
// console.log(daniel); // Saída: Manda salve Daniel e Celso

// const professores = "Daniel, Celso e Marlon";
// // professores = "Caio"; // Reatribui variável para "Caio" = ERRO - const não permite
// console.log(professores);



// let nomeCompleto = "Celso Rodrigo Giusti"; // Regra camelCase



// let texto = "Olá Daniel"; // String
// let numero = 42; // Number
// let booleano = true; // Boolean
// let nulo = null; // Null
// let indefinido; // Undefined

// console.log(typeof texto);
// console.log(typeof numero);
// console.log(typeof booleano);
// console.log(typeof nulo);
// console.log(typeof indefinido);



// let lista = [1, 2, 3]; // Array

// let pessoa = {nome: "Daniel", idade: 23}; // Objeto

// function saudacao(nome){
//     return `Olá, ${nome}`;
// }

// console.log(lista);
// console.log(lista[0]); // Exibe apenas o item segundo o índice, ou seja, exibe "1"
// console.log(typeof lista); // Exibe object, e não stray, pois a lista trata de diversos valores

// console.log(pessoa);
// console.log(pessoa.nome, pessoa.idade); // Exibe itens específicos do objeto
// console.log(typeof pessoa);

// console.log(saudacao("Daniel")); // Define "nome" como "Daniel"
// console.log(typeof saudacao)



// let nome = "Daniel";

// if (nome != "Daniel") {
//     console.log("Não é o Daniel");
//     let teste = 10; // essa variável só existe nesse bloco (Dentro de "if")
// } else {
//     console.log("É o Daniel. Olá Daniel!");
// }
// console.log(teste); // A variável teste não é encontrada, pois está em outro bloco



// let professor = "Daniel";

// if (professor == "Marlon") {
//     console.log("É o Marlon. Olá Marlon!")
// } else if (professor == "Celso") {
//     console.log("É o Celso. Olá Celso!")
// } else {
//     console.log("É o Daniel. Olá Daniel!")
// }


// let idade = 18;
// let mensagem = idade >= 18 ? "Adulto" : "Menor";
// console.log(mensagem);



// let num = 3;

// switch (num) {
//     case 1:
//         console.log("Número 1");
//         break;
//     case 2:
//         console.log("Número 2");
//         break;
//     default:
//         console.log("Outro número")
// }



// for (let i = 0; i < 10; i++) {
//     console.log("Olá Daniel" [i]);
// }

// let nome = ["Daniel", "Marlon", "Celso"];
// for (let i = 0; i < 3; i++) {
//     console.log("Olá,", nome[i])
// }


// let nomes = ["Celsão", "Marlão?", "Danielzão"];

// nomes.forEach(num => console.log(num))


// let contador = 0;

// while (contador < 3) {
//     console.log(contador);
//     contador++;
// }


// let num = 0;
// do {
//     console.log(num);
//     num++;
// } while (num < 3);



// let listaProfessores = ["Daniel", "Marlon", "Celso"];
// console.log(listaProfessores[0]); // Mostra o primeiro item da lista, "Daniel"

// listaProfessores.push("Ricardo"); // Adiciona item ao final da lista
// console.log(listaProfessores);
// listaProfessores.pop(); // Remove o último item da lista
// console.log(listaProfessores);
// listaProfessores.unshift("Fernandão"); // Adiciona item no início da lista
// console.log(listaProfessores);
// listaProfessores.shift(); // Remove item do início da lista
// console.log(listaProfessores);

// console.log(listaProfessores.includes("Daniel")); // Verifica se item está na lista. True
// console.log(listaProfessores.indexOf("Marlon")); // Identifica a posição dos itens na lista. 1
// console.log(listaProfessores.length); // Mostra a quantidade de itens na lista