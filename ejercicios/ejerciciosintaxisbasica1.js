function calcularLetraDNI(dni) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    if (typeof dni !== "number" || dni < 0 || dni > 99999999) {
        return "Error: DNI no válido";
    }
    let indice = dni % 23;
    return letras[indice];
}



function invertirTexto(texto) {
    return texto.split("").reverse().join("");
}


function generarNumerosAleatorios() {
    let numeros = new Set();
    while (numeros.size < 100) {
        let num = Math.floor(Math.random() * 1000) + 1;
        numeros.add(num);
    }
    return Array.from(numeros);
}


function contarLetra(frase, letra) {
    let contador = 0;
    for (let char of frase) {
        if (char.toLowerCase() === letra.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}


function divisores(numero) {
    let resultado = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            resultado.push(i);
        }
    }
    return resultado;
}
