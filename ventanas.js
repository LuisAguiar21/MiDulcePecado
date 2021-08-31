// Ventana teléfono

var abrirtl = document.getElementById("botón-teléfono")
var VentanaTeléfono = document.getElementById("teléfono-ventana")
var cerrartl = document.getElementById("cerrar-1")

abrirtl.addEventListener("click", () => {
    VentanaTeléfono.classList.add("ventana-abierta")
})

cerrartl.addEventListener("click", () => {
    VentanaTeléfono.classList.remove("ventana-abierta")
})