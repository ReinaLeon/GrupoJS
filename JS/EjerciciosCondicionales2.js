let saldo = 20000;
if (window.confirm("¿Le interesa saber su saldo?")) {
  alert(saldo);
}

const productos = prompt("¿Que producto desea comprar? \n Leche: $25000  \n Agua: $10000 \n Jugo: $15000");
switch (productos) {
    case "leche":
        if(saldo >= 20000) {
            alert("¡Su compra a sido exitosa!")
        }else {
            alert("Saldo insuficiente, no se ha podido realizar su compra")
        }
        break;
        case "agua":
        if(saldo >= 10000) {
            alert("¡Su compra a sido exitosa!")
        }else {
            alert("Saldo insuficiente, no se ha podido realizar su compra")
        }
        break;
        case "jugo":
        if(saldo >= 15000) {
            alert("¡Su compra a sido exitosa!")
        }else {
            alert("Saldo insuficiente, no se ha podido realizar su compra")
        }
        break;    
}

