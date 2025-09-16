function juegoPUM() {
    let resultado = "";
    for (let numero = 1; numero <= 100; numero++) {
        resultado += "Número generado: " + numero;
        if (numero % 10 === 7 || numero % 7 === 0) {
            resultado += " PUM!";
        }
        resultado += "\n";
    }
    return resultado;
}

function salarios(horastrabajadas, turno) {
    let salario = 0;
    if (turno === "m") {
        salario = horastrabajadas * 15 * 0.92;
    } else if (turno === "t") {
        salario = horastrabajadas * 17 * 0.90;
    } else if (turno === "n") {
        salario = horastrabajadas * 20 * 0.88;
    } else {
        console.log("Turno no válido");
    }
    return salario;
}