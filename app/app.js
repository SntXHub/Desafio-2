// desafio 2

document.getElementById('formPreg').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura las respuestas
    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const lenguaje = document.getElementById('lenguaje').value.trim();

    // Validar la edad
    if (isNaN(edad) || edad === "" || edad.length > 2) {
        alert("Por favor, ingresa una edad válida (máximo 2 dígitos).");
        return;
    }

    // Validar los campos de texto
    if (nombre === "" || lenguaje === "") {
        alert("Por favor, completa todas las preguntas.");
        return;
    }

    // Mostrar el mensaje final
    const mensaje = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;
    document.getElementById('mensaje').textContent = mensaje;

    // Mostrar la sección de resultados
    document.getElementById('resultado').classList.remove('hidden');
    document.getElementById('seguir').classList.remove('hidden');
    document.getElementById('lenguajeNombre').textContent = lenguaje;
});

// Eventos para los botones de seguimiento
document.getElementById('botonSi').addEventListener('click', function() {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
});

document.getElementById('botonNo').addEventListener('click', function() {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
});