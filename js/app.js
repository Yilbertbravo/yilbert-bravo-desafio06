window.document.write("<h2>Ejercicio 1</h2>");

// gato1 = "😺";
// gato2 = "😸";
// gato3 = "😹";

let cantidadDeGatos = 1;
i = 1;


while (i <= cantidadDeGatos) {

    window.document.write("<p>Gato #" + i + ": 😺</p>");
    i++;
    if (i >= 2 && i <= cantidadDeGatos) {
        // i++;
        window.document.write("<p>Gato #" + i + ": 😸</p>");
        i++;

    }
    if (i >= 3 && i <= cantidadDeGatos) {
        // i++;
        window.document.write("<p>Gato #" + i + ": 😹</p>");
    }
    i++;
}


window.document.write("<h2>Ejercicio 2</h2>");

const GATOBLANCO = "🐈";
const PASOS = "🐾";

let cantidadDeGatos2 = 1;
let cantidadDePasos = 5;
let g = 1;
let p = 1;

while (g <= cantidadDeGatos2 && p <= cantidadDePasos) {

    window.document.write("<p>Gato #" + g + ": " + GATOBLANCO + PASOS.repeat(cantidadDePasos) + "</p>");
    g++;
}

window.document.write("<h2>Ejercicio 3</h2>");

const GATOBLANCO3 = "🐈";
const GATONEGRO3 = "🐈‍⬛";
const PASOS3 = "🐾";

let cantidadDeGatos3 = 2;
let cantidadDePasos3 = 3;
let g3 = 1;
let p3 = 0;

do {
    if (g3 % 2 != 0) {
        window.document.write("<p>Gato #" + g3 + ": " + GATOBLANCO3 + PASOS3.repeat(cantidadDePasos3) + "</p>");
    }

    if (g3 % 2 === 0) {
        window.document.write("<p>Gato #" + g3 + ": " + GATONEGRO3 + PASOS.repeat(cantidadDePasos3) + "</p>");
    }
    g3++;
} while (g3 <= cantidadDeGatos3 && p3 <= cantidadDePasos3) { }
