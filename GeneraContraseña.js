function chequearLongitud(longitud) {

  if (!longitud) {
    return "debe ingresar la longitud";
  }

  if (typeof longitud !== "string") {
    return "La longitud recibida no es válida";
  }

  const numero = Number(longitud);

  if (numero < 3) {
    return "La longitud debe ser mayor o igual a 3";
  }

  if (numero > 10) {
    return "La longitud debe ser menor o igual a 10";
  }

  return numero;
}

function generarContrasena(longitud, especiales, numeros, mayusculas) {

  var caracteres = "abcdefghijklmnopqrstuvwxyz";

  if (mayusculas) {
    caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numeros) {
    caracteres += "0123456789";
  }

  if (especiales) {
    caracteres += "!@#$%^&*()_+";
  }

  var contraseña = "";

  for (var i = 0; i < longitud; i++) {
    var randomIndex = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres[randomIndex];
  }

  return contraseña;
}

var boton = document.getElementById("generar");

boton.addEventListener("click", function () {

  var longitudInput = document.getElementById("length").value;
  var especiales = document.getElementById("special").checked;
  var numeros = document.getElementById("numbers").checked;
  var mayusculas = document.getElementById("uppercase").checked;

  var validacion = chequearLongitud(longitudInput);

  if (typeof validacion === "string") {
    alert(validacion);
    return;
  }

  var nuevaContraseña = generarContrasena(validacion, especiales, numeros, mayusculas);

  alert("Tu contraseña es: " + nuevaContraseña);
});
