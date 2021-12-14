let dia = prompt("ingrese un dia de la semana");
let a = "Este es un dia entresemana";
let b = "Este es un dia de fin de semana";
let actividad = {};
switch (dia) {
  case "lunes":
    alert(a);
    actividad = {
      dia: "lunes",
      actividad: prompt("Ingrese que desea hacer el lunes"),
      tipo: a,
    };
    break;
  case "martes":
    alert(a);
    actividad = {
      dia: "martes",
      actividad: prompt("Ingrese que desea hacer el martes"),
      tipo: a,
    };
    break;
  case "miercoles":
    alert(a);
    actividad = {
      dia: "miercoles",
      actividad: prompt("Ingrese que desea hacer el miercoles"),
      tipo: a,
    };
    break;
  case "jueves":
    alert(a);
    actividad = {
      dia: "jueves",
      actividad: prompt("Ingrese que desea hacer el jueves"),
      tipo: a,
    };
    break;
  case "viernes":
    alert(a);
    actividad = {
      dia: "viernes",
      actividad: prompt("Ingrese que desea hacer el viernes"),
      tipo: a,
    };
    break;
  case "sabado":
    alert(b);
    actividad = {
      dia: "sabado",
      actividad: prompt("Ingrese que desea hacer el sabado"),
      tipo: b,
    };
    break;
  case "domingo":
    alert(b);
    actividad = {
      dia: "domingo",
      actividad: prompt("Ingrese que desea hacer el domingo"),
      tipo: b,
    };
    break;
  default:
    alert("no es un dia de la semana");
    break;
}

alert(
  "actividad: " +
    actividad.actividad +
    "\n" +
    "dia: " +
    actividad.dia +
    "\n" +
    "tipo: " +
    actividad.tipo
);
