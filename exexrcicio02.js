const produto01 = {
    nome: "garrafa",
    preco: 20.00,
    quantidade: 3
}

const produto02 = {
    nome:"abridor",
    preco: 5.00,
    quantidade: 2
}

const multiplicação1 = produto01.preco * produto01.quantidade
const multiplicação2 = produto02.preco * produto01.quantidade

console.log(`o resultado é${multiplicação1 + multiplicação2}`)

