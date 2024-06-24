const d = document;
const textarea = d.getElementById("miTextarea");
const carga = d.getElementById("carga");
const resultadotext = d.getElementById("result__text");
const buttonencrip = d.getElementById("encriptarBtn");
const buttondesencrip = d.getElementById("desencriptarBtn");
const buttoncopiar = d.getElementById("copiarBtn");

const llaves = [
   ["e", "enter"],
   ["i", "imes"],
   ["o", "ober"],
   ["u", "ufat"],
   ["a", "ai"],
];

function encriptarMensaje(mensaje) {
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
   resultadotext.textContent = "capturando mensaje";
});

buttonencrip.addEventListener("click", (e) => {
   e.preventDefault();
   let mensaje = textarea.value.toLowerCase();
   let mensajeEncriptado = encriptarMensaje(mensaje);
   resultadotext.textContent = mensajeEncriptado;
   buttoncopiar.classList.remove("hidden");
});

buttondesencrip.addEventListener("click", (e) => {
   e.preventDefault();
   let mensaje = textarea.value.toLowerCase();
   let mensajeDesencriptado = desencriptarMensaje(mensaje);
   resultadotext.textContent = mensajeDesencriptado;
   buttoncopiar.classList.remove("hidden");
});
