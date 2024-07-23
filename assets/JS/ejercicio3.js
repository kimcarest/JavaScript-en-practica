let valor1 = document.querySelector("#valor1")
let valor2 = document.querySelector("#valor2")

const btnSumar = document.querySelector("#btn-sumar")
const btnRestar = document.querySelector("#btn-restar")

let resultado = document.querySelector(".resultado")

btnSumar.addEventListener('click', () => {
    let resultadoSumar = +valor1.value + +valor2.value
    resultado.innerHTML = resultadoSumar
})

btnRestar.addEventListener('click', () => {
    let resultadoRestar = +valor1.value - +valor2.value
    if (resultadoRestar < 0) {
        resultado.innerHTML = 0 
    } else {
        resultado.innerHTML = resultadoRestar
    }
})