//crie uma função que recebe um parâmetro de media e verifica em condicional se a nota for maior que 7, o aluno está aprovado, senão, o aluno está reprovado

//const soma = (x, y) => x + y

// const resultadoDaSoma = soma(5, 8, 9, 4)

// console.log(resultadoDaSoma)


function media (nota=8){


    
if(nota>=7){
    console.log("aprovado")
}else if (nota >=6){
    console.log("recuperação")
} 
else{
    console.log("reprovado")
}
}

media(             )