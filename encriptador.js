const d = document;
const textarea = d.querySelector("form__input");
const imagendemonito = d.getElementById("result");
const carga = d.querySelector("loader");
const resultado = d.querySelector("result__title");
const resultadotext = d.querySelector("result__text");
const buttonencrip = D.querySelector("form.btn");
const buttondesencrip = D.querySelector("form.btn");
const buttoncopiar = d.querySelector("result__btn");

const llaves = [
  ["e", "enter"],
  ["i", "imes"],
  ["o", "ober"],
  ["u", "ufat"],
  ["a", "ai"],
];

function ecriptarmensaje(mensaje) {
  let mensajeEncriptado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i];
    let encriptada = letra;
    for (let j = 0; j < llaves.length; j++) {
      if (letra === llaves[j][0]) {
        encriptada = llaves[j][1];
        break;
      }
    }
    mensajeEncriptado += encriptada;
  }
  return mensajeEncriptado;
}

function desencriptarMensaje(mensaje) {
  let mensajeDesencriptado = mensaje;

  for (let i = 0; i < llaves.length; i++) {
    let regex = new RegExp(llaves[i][1], "g");
    mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
  }

  return mensajeDesencriptado;
}

textarea.addEventListener("input", (e) => {
  carga.classList.remove("hidden");
  resultado.textContent = "capturando mensaje";
});

buttonencrip.addEventListener("click", (e) => {
  e.preventDefault();
  let mensaje = textarea.value.toLoweCase();
  let mensajeEncriptado = ecriptarmensaje(mensaje);
  resultadotext.textContent = mensajeEncriptado;
  buttoncopiar.classList.remove("hidden");
});
