const age = prompt("Ingresa tu edad");

if (age >= 18) {
  alert("Tienes acceso a la discoteca");
} else {
  alert("Debes ser mayor de 18 años para acceder a la discoteca");
}
const sexo = prompt("Ingrese su genero");

if (sexo == "mujer" && age > 25) {
  alert("Monto a pagar: $25.000");
} else if (sexo == "mujer" && age < 25) {
  alert("Monto a pagar: $20.000");
}

if (sexo == "hombre" && age > 24) {
  alert("Monto a pagar: $30.000");
} else if (sexo == "hombre" && age < 24) {
  alert("Monto a pagar: $25.000");
}
