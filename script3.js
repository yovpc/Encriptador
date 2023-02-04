const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){
  const textEncriptado = encriptar(textArea.value)
  mensaje.value = textEncriptado
  textArea.value = "";
  mensaje.style.backgroundImage = "none"
}


function encriptar(stringEncriptado){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase()

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptado.includes(matrizCodigo[i][0])){
      stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return stringEncriptado
  
}

function btnDesencriptar(){
  const textEncriptado = desencriptar(textArea.value)
  mensaje.value = textEncriptado
  textArea.value = "";
}


function desencriptar(stringDesencriptado){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptado = stringDesencriptado.toLowerCase()

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptado.includes(matrizCodigo[i][1])){
      stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
  }
  return stringDesencriptado
}

function btnCopiar(){
	mensaje.select();
	navigator.clipboard.writeText(mensaje.value);
	mensaje.value = "";
	alert("Texto copiado:");
}