let pedido = prompt("¿Que tamaño de pizza desea ordenar?");
switch (pedido) {
  case "personal":
    let sabor = prompt(
      "Ingrese el sabor que desea hawaiana, pollo con champiñones, carnes "
    );
    switch (sabor) {
      case "hawaiana":
        let adicionales = prompt("sin piña o con piña");
        if (adicionales === "sin piña") {
          alert("su pizza es:" + pedido + sabor + adicionales + " con salami");
        } else {
          alert("su pizza es:" + pedido + sabor + adicionales + " con salami");
        }
        break;

      case "pollo con champiñones":
        let adicionales1 = prompt("con salsa o borde de queso");
        if (adicionales1 === "con salsa") {
          let adicionales2 = prompt("con queso o sin queso");
          if (adicionales2 === "con queso") {
            alert(
              "su pizza es: " +
                pedido +
                " " +
                sabor +
                " " +
                adicionales1 +
                " " +
                adicionales2
            );
          } else {
            alert(
              "su pizza es: " +
                pedido +
                " " +
                sabor +
                " " +
                adicionales1 +
                " " +
                adicionales2
            );
          }
        }
        if (adicionales1 === "borde de queso") {
          let adicionales3 = prompt("con queso o sin queso");
          if (adicionales3 === "con queso") {
            alert(
              "su pizza es: " +
                pedido +
                " " +
                sabor +
                " " +
                adicionales1 +
                " " +
                adicionales3
            );
          } else {
            alert(
              "su pizza es: " +
                pedido +
                " " +
                sabor +
                " " +
                adicionales1 +
                " " +
                adicionales3
            );
          }
        } else {
          alert("eso no esta en el menu");
        }

      case "carnes":
        let adicionales4 = prompt("Sin Salami o con cabano");
        if (adicionales4 === "sin salami") {
          alert(
            "su pizza es: " +
              " " +
              pedido +
              " " +
              sabor +
              " " +
              adicionales4 +
              " " +
              "con queso"
          );
        } else {
          alert(
            "su pizza es: " +
              " " +
              pedido +
              " " +
              sabor +
              " " +
              adicionales4 +
              " " +
              "con queso"
          );
        }

      default:
        alert("no esta en el menu");
        break;
    }

  case "mediana":
    let sabor2 = prompt("Ingrese el sabor que desea mexicana o criolla");
    switch (sabor2) {
      case "mexicana":
        let adicionales5 = prompt("sin nachos o con nachos");
        if (adicionales5 === "sin nachos") {
          alert(
            "su pizza es:" +
              pedido +
              sabor2 +
              adicionales5 +
              " con extra guacamole"
          );
        } else {
          alert(
            "su pizza es:" +
              pedido +
              sabor2 +
              adicionales5 +
              " con extra guacamole"
          );
        }
        break;
      case "criolla":
        let adicionales6 = prompt("con maiz o sin maiz");
        if (adicionales6 === "con maiz") {
          adicionales6 = " con maiz ";
        } else {
          adicionales6 === "sin maiz";
        }
        let adicionales7 = prompt("con Queso o extra Carne");
        if (adicionales7 === "Con Queso") {
          alert("su pizza es:" + pedido + sabor2 + adicionales6 + adicionales7);
        } else {
          adicionales7 === "con Extra Carne";
          alert("su pizza es:" + pedido + sabor2 + adicionales6 + adicionales7);
        }
      default:
        alert("eso no esta en el menú");
        break;
    }

  case "familiar":
    let sabor3 = prompt("Ingrese el sabor que desea Vegetariana o Carne&Pollo");
    if (sabor3 === "vegetariana") {
      let adicionales9 = prompt("con queso o sin queso");
      if (adicionales9 === "con queso") {
        alert("su pizza es:" + pedido + sabor3 + adicionales9);
      } else {
        alert("su pizza es:" + pedido + sabor3 + adicionales9);
      }
    }

    if (sabor3 === "carne y pollo") {
      let adicionales11 = prompt(
        "adicion de salchicha o adicion de champiñones"
      );
      if (adicionales11 === "adicion de salchicha") {
        alert("su pizza es:" + pedido + sabor3 + adicionales11);
      } else {
        alert("su pizza es:" + pedido + sabor3 + adicionales11);
      }
    }
}
