// Función para mezclar la lista
function mezclar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let nombres = [];

// Función para agregar nombres a la lista
function agregarNombre(event) {
    if (event.key === 'Enter') {
        let nombreInput = document.getElementById('nombres');
        let nombre = nombreInput.value.trim();
        
        if (nombre === '') {
            alert('QUE SE INGRESE UN NOMBRE VALIDO');
            return;
        }
        
        nombres.push(nombre);
        nombreInput.value = '';
        mostrarNombres();
    }
}

// Función para mostrar los nombres ingresados
function mostrarNombres() {
    let listaNombres = document.getElementById('lista-nombres');
    listaNombres.innerHTML = nombres.map(n => `<p style='margin: 5px; font-size: 18px;'>${n}</p>`).join('');
}

// Función para sortear un solo amigo secreto
function sortearAmigoSecreto() {
    if (nombres.length < 2) {
        alert('Ingresa al menos dos nombres para el sorteo.');
        return;
    }
    
    mezclar(nombres);
    let elegido = nombres[Math.floor(Math.random() * nombres.length)];
    
    document.getElementById('resultado').innerHTML = `
        <div style='margin-top: 20px; text-align: center;'>
            <img src='https://cdn-icons-png.flaticon.com/512/2820/2820750.png' alt='Confeti' width='60' height='60'>
            <p style='font-size: 24px; font-weight: bold; margin-top: 10px;'>🎉 ¡El amigo secreto es: ${elegido}! 🎉</p>
        </div>
    `;
}

// HTML y CSS básicos para mostrar en pantalla
document.addEventListener("DOMContentLoaded", function() {
    document.body.innerHTML = `
        <div style='text-align: center;'>
            <h1 style='margin-bottom: 30px;'>🎁 Sorteo de Amigo Secreto 🎁</h1>
            <label for='nombres' style='margin-bottom: 20px; display: block;'>Ingresa los nombres y presiona Enter:</label>
            <input type='text' id='nombres' placeholder='Ejemplo: Ana' style='margin-bottom: 20px;' onkeypress='agregarNombre(event)'>
            <div id='lista-nombres' style='margin-top: 10px;'></div>
            <br>
            <button onclick='sortearAmigoSecreto()' style='margin-bottom: 20px;'>Sortear</button>
            <div id='resultado' style='margin-top: 30px;'></div>
        </div>
    `;
});
