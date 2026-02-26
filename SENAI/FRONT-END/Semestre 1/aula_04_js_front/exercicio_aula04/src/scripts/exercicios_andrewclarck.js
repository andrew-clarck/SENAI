// EXER 1
///////////////////////
// const nome = prompt("Olá, qual é o seu nome?")
// const sobrenome = prompt("Qual o seu sobrenome?")

// const nomeCompleto = nome.trim().concat(" ", sobrenome.trim()).toLowerCase()
// const contagemNomeCompleto = nome.trim().length + sobrenome.trim().length
// // Para garantir que não haverá espaços, por esse motivo também não utilizei nomeCompleto, pois contaria o espaço entre os nomes

// alert(`Seja bem-vindo, ${nomeCompleto}!`)
// alert(`Seu nome possui ${contagemNomeCompleto} caracteres!`)
///////////////////////
// EXER 2
///////////////////////
// const valor = prompt("Qual foi o valor total do jantar?")
// const quantidadePessoas = prompt("Quantas pessoas irão pagar?")
// const valorPorPessoa = (valor / quantidadePessoas).toFixed(2)

// alert(`Cada amigo deve pagar R$${valorPorPessoa}.`)
///////////////////////
// EXER 3
///////////////////////
// const valor = prompt("Olá, qual foi o valor total da compra?")

// const cupom = confirm("Você possui um cupom de desconto?")

// if (valor > 150 || cupom) {
//     console.log("Frete Grátis Liberado")
// } else {
//     console.log("Frete pago")
// }
///////////////////////
// EXER 4
///////////////////////
// const numero = prompt("Olá, escolha um número entre 1 e 10")
// const numeroSorteado = Math.floor(Math.random() * 10) + 1

// if (numero == numeroSorteado) {
//     alert("Parábens! Você ganhou um brinde!")
// } else {
//     alert(`Que pena, o número sorteado foi ${numeroSorteado}`)
// }
///////////////////////
// EXER 5
///////////////////////
class Veiculo {
    constructor(modelo, marca, ano) {
        this.modelo = modelo,
        this.marca = marca,
        this.ano = ano
    }

    idadeVeiculo(anoAtual) {
        const idade = anoAtual - this.ano
        return idade
    }
}

const veiculo1 = new Veiculo("Civic", "Honda", 2018)


const anoAtualUsuario = prompt("Olá, qual é o ano atual?") // O exercício requer que o usuário digite o ano, portanto não usei Date()

// const anoAtual = new Date()

// alert(`O veículo ${veiculo1.marca} ${veiculo1.modelo} ${veiculo1.ano} possui ${veiculo1.idadeVeiculo(anoAtual.getFullYear())} anos.`) - Versão utilizando a função Date()

alert(`O veículo ${veiculo1.marca} ${veiculo1.modelo} ${veiculo1.ano} possui ${veiculo1.idadeVeiculo(anoAtualUsuario)} anos.`)