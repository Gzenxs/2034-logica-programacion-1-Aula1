//Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". En caso contrario, muestra "¡Buena semana!".

let diaSemana = prompt('¿Qué día de la semana es?');
// Convierte a minúsculas y quita acentos
diaSemana = diaSemana.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

if (diaSemana === 'sabado' || diaSemana === 'domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}