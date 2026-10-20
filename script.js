const boton = document.querySelector(".boton-menu");
const enlaces = document.querySelector(".menu-enlaces");

boton.addEventListener("click", function () {
    enlaces.classList.toggle("abierto");
});

// Formulario de contacto: muestra "¡Gracias!" en vez de enviar
const formulario = document.querySelector(".formulario");
const gracias = document.querySelector(".gracias");

if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();
        document.querySelector("#gracias-nombre").textContent = document.querySelector("#nombre").value;
        formulario.hidden = true;
        gracias.hidden = false;
    });
}

// Botones "Agregar": muestran un aviso que se va solo
const aviso = document.querySelector(".aviso");
const botonesAgregar = document.querySelectorAll(".boton-agregar");
let temporizador;

botonesAgregar.forEach(function (botonAgregar) {
    botonAgregar.addEventListener("click", function () {
        const nombre = botonAgregar.closest(".producto").querySelector("h3").textContent;
        aviso.textContent = "✓ " + nombre + " agregado";
        aviso.classList.add("visible");

        clearTimeout(temporizador);
        temporizador = setTimeout(function () {
            aviso.classList.remove("visible");
        }, 2500);
    });
});
