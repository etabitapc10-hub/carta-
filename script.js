const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");
const sonido = document.getElementById("clickSound");

envoltura.addEventListener("click", () => {
  sonido.currentTime = 0;
  sonido.play();

  envoltura.classList.toggle("abierto");
  carta.classList.toggle("mostrar-carta");
});

