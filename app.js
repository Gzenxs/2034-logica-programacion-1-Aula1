//Variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor: ");

console.log(numeroUsuario);
/*
Este codigo realiza la comparacion.
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste el número secreto es ${numeroSecreto}`);
} else {
    //Lacondicion no se cumplió
    alert("Lo siento, no acertaste el número");
}