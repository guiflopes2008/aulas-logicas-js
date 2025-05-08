let contador = 0

const resultado = document.querySelector("#resultado")

const btnIncrementaValor = document.querySelector("#btnIncrementar")

const btnDecrementaValor = document.querySelector("#btnmenos")

btnIncrementaValor.addEventListener("click", () => {
    contador++
    resultado.textContent = `Contador: ${contador}`


})


btnDecrementaValor.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        resultado.textContent = `Contador: ${contador}`;
    }
});