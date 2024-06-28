//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Enhorabuena, has ganado!". En caso contrario, muestra "Inténtalo de nuevo para ganar."

let puntuacion = prompt("Ingresa tu puntuacion");

if (puntuacion >= 100) {
  alert('¡Enhorabuena, has ganado!');
} else {
  alert('Inténtalo de nuevo para ganar.');
}