//Variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
// let pluralSingular = 'intento'
let maximoIntentos = 5;

while (numeroUsuario != numeroSecreto) {
    
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor: "));
    /*
    Este codigo realiza la comparacion.
    */
   //console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste el número secreto es ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El numero Secreto es Menor");
        } else {
            alert("El numero Secreto es Mayor");
        }
        //incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        //pluralSingular ='intentos';
        if (intentos > maximoIntentos) {
            alert('Numero maximo de intentos has perdido');
            break;
        }
    }    
}
