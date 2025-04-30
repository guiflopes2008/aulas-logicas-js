const notasMatematica = {
    primeiroTrimestre: 6,
    segundoTrimestre: 9.5,
    terceiroTrimestre: 7.5,

}

const{primeiroTrimestre,segundoTrimestre,terceiroTrimestre} = notasMatematica

const mediaDeMatematica = ((primeiroTrimestre + segundoTrimestre + terceiroTrimestre) /3).toFixed(2)

// console.log(mediaDeMatematica)

if(mediaDeMatematica >= 6){
    console.log("aprovado")
}else if(mediaDeMatematica>=5){
    console.log("recuperação")
}else{
    console.log("reprovado")
}