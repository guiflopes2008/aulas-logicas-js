//crie um array de objetos em que cada objeto é um produto, tendo como chave ( nome , preço descriçao). Crie pelo menos 3 produtos

//crie uma variavel que ira armazenar o array com os nomes dos produtos 

//crie uma segunda variável que irá armazenar o array com os preços dos produtos

//Use o laço for ou for of para exibir cada item do array da variável de nomes no console

const produtos = [
    {
        nome: "garrafa",
        preco: 50.00,
        descricao: "Uma garrafa simples e versátil, perfeita para te acompanhar na rotina. Leve, fácil de carregar e feita pra manter sua bebida sempre à mão."
    },
    {
        nome: "mochila",
        preco: 150.00,
        descricao: "Estilo, praticidade e aquele toque descolado. Essa mochila é feita pra quem tá sempre em movimento."
    },

    {
        nome: "caderno",
        preco: 30.00,
        descricao: "Com capa moderna e design simples, esse caderno é perfeito pra anotar ideias, desenhar ou planejar."
    }
]

const nomesProduto = produtos.map(produto => produto.nome)
const precoProduto = produtos.map(produto => produto.preco)
const descricaoProduto = produtos.map(produto => produto.descricao)


for (let i = 0; i < nomesProduto.length; i++) {
    console.log(`${nomesProduto[i]}: R$ ${precoProduto[i].toFixed(2)}`);
}


