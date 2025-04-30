//crie um programa que verifique o faturamento médio dos 3 trimestres de 2024, sendo

//1° trimestre => 20000

//2° trimestre => 35000

//3° trimestre => 35000

//se for maior que 25.000, o faturamento medio é o esperado. Mas, se o faturamento for menor de 25.000, o faturamento médio está abaixo do esperado

//utilize um objeto para registrar os detalhes. Utilize desestruturação para facilitar o acesso aos elementos, e fazer os calculos. por fim, use um condicional


const faturamento ={
    primeiroTrimestre: 20000,
    segundoTrimestre: 30000,
    terceiroTrimestre: 30000,
}

const{primeiroTrimestre,segundoTrimestre,terceiroTrimestre} = faturamento

const mediaFaturamento = ((primeiroTrimestre + segundoTrimestre + terceiroTrimestre)/3).toFixed(2)

console.log(`mediaFaturamento ${mediaFaturamento}`)

if(mediaFaturamento > 25000){
    console.log("o faturamento medio é o esperado")
}else{
    console.log("o faturamento não é o valor esperado")
}
