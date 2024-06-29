//Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

edad = prompt('Ingresa tu edad:');
   if (edad > 17) {
       console.log('Eres mayor de edad.');
   } else {
       console.log('Eres menor de edad.');
   }
