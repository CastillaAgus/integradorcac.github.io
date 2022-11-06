const btnResumen = document.getElementById("btnResumen");
const cantEntradas = document.getElementById("cantEntradas");
const pTotalPago = document.getElementById("pTotalPago");
const categoria = document.getElementById("categoria");
const btnBorrar = document.getElementById("btnBorrar");
let entrada = 200;
let total;
let descJunior = 0.15;
let descEstudiante = 0.8;
let descTrainee = 0.5;
let entradaJunior = entrada - (entrada * descJunior);
let entradaTrainee = entrada - (entrada * descTrainee);
let entradaEstudiante = entrada - (entrada * descEstudiante);

function pagoTotal() {
    if (categoria.value == "3") {
        total = entradaEstudiante * cantEntradas.value;
    } else if (categoria.value == "2") {
        total = entradaJunior * cantEntradas.value;
    } else if (categoria.value == "1") {
        total = entradaTrainee * cantEntradas.value;
    } else {
        total = entrada * cantEntradas.value;
    }
    return total;
}

function mostrarResumen() {
    pTotalPago.innerHTML = "Total a pagar: $ " + total;
}

function borrar() {
    pTotalPago.innerHTML = "Total a pagar: $ 0";
}
categoria.addEventListener("click", pagoTotal);
cantEntradas.addEventListener("click", pagoTotal);
btnResumen.addEventListener("click", mostrarResumen);
btnBorrar.addEventListener("click", borrar);