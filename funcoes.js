// function saudacao(){
//     console.log("Bom dia!")
// }

//arrow function com parâmetros

// const saudacao = (turno,nome="Joao")=>{
//     console.log(`${turno} ${nome}`)
// }

// saudacao("bom dia","Guilherme")
// saudacao("boa noite")

// const soma = (x, y) => x + y

// const resultadoDaSoma = soma(5, 8, 9, 4)

// console.log(resultadoDaSoma)

// const subtracao = (x, y) => x - y

// const resultadoDasubtracao = subtracao(6, 7, 3)

// console.log(resultadoDasubtracao)

// const divisao = (x, y) => x / y

// const ResultadoDaDivisao = divisao(10, 4)

// console.log(ResultadoDaDivisao)



// const multiplicacao = (x, y) => x * y

// const ResultadoDaMultiplicacao = multiplicacao(40, 6)

// console.log(ResultadoDaMultiplicacao)

// console.log(soma(5,7))

//fução retoornando o calculo de duas funções

// const calculo = (x, y, z, a) => {
//     return soma(x, y) + multiplicacao(z, a)
// }

// const resultadoDoCalculo = calculo(10, 2, 5, 7)

// console.log(resultadoDoCalculo)

//retomar o valor de várias funções em umreturs dentro de um objeto

// const calculo = (x,y) => {
//     return {
//         soma: soma (x,y),
//         subtracao:subtracao(x,y),
//         multiplicacao:multiplicacao(x,y),
//         divisao:multiplicacao(x,y)
//     }
// }

// const ResultadoFinalDoCalculo = calculo(20,10)

// console.log("resultado final",ResultadoFinalDoCalculo)

//escopo global e local (de bloco ou função)

const escopoGlobal = "Escopo Global"

function chamaEscopo(){
    const escopoLocal = "Escopo Local"
    console.log(escopoGlobal)
}

console.log(escopoLocal)