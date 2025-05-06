const numeros = [1,2,3,4,5]

const pares = numeros.filter(num => num % 2 ===0)

// console.log("numeros pares" , pares)


const produtos = [
    {
        nome:"notebook",
        preco:3000
    },
    {
        nome:"Mouse",
        preco:50
    },
    {
        nome:"Monitor",
        preco:120
    },
    {
        teclado:"teclado",
        preco:120
    }
]

const produtosMaioresQueMil = produtos.filter(produto => produto.preco <120)

// console.log(produtosMaioresQueMil)

const mouse = [
    {
        nome:"mouse",
        preco:200
    },
    {
        nome:"mouse",
        preco:50
    },
    {
        nome:"mouse",
        preco:120
    },
    {
        teclado:"mouse",
        preco:120
    },
    {
        nome:"cama",
        preco:905
    }


]

const mouses = mouse.filter(produto => produto.nome === "mouse")
 
console.log(mouses)