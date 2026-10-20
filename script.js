const boton = document.querySelector(".boton-menu");
const enlaces = document.querySelector(".menu-enlaces");

boton.addEventListener("click", function () {
    enlaces.classList.toggle("abierto");
});
