//Variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let pluralSingular = 'intento'
while (numeroUsuario != numeroSecreto) {

    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor: ");
    /*
    Este codigo realiza la comparacion.
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste el número secreto es ${numeroSecreto}. Lo hiciste en ${intentos} ${pluralSingular}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El numero Secreto es Menor");
        } else {
            alert("El numero Secreto es Mayor");
        }
        intentos = intentos + 1;
        pluralSingular ='intentos';
    }    
}
