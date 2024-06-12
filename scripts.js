
document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.querySelector('.carrusel-inner');
    let currentIndex = 0;
    const images = carrusel.querySelectorAll('img');
    const totalImages = images.length;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        const offset = -currentIndex * 100;
        carrusel.style.transform = `translateX(${offset}%)`;
    }, 8000); // Cambia el intervalo a 8 segundos para mayor lentitud
});


document.addEventListener("DOMContentLoaded", () => {
    // Obtener el elemento donde mostraremos la fecha actual
    const fechaActualElement = document.getElementById('fecha-actual');
    
    // Función para actualizar la fecha actual
    function actualizarFechaActual() {
        const fecha = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const fechaFormateada = fecha.toLocaleDateString('es-ES', options);
        fechaActualElement.textContent = fechaFormateada;
    }
    
    // Llamar a la función para mostrar la fecha actual al cargar la página
    actualizarFechaActual();
    
    // Obtener el elemento del calendario
    const calendario = document.getElementById('calendario');
    
    // Configurar el calendario utilizando la librería Datepicker.js
    const datepicker = new Datepicker(calendario, {
        autohide: true,
        format: 'dd/mm/yyyy',
        language: 'es'
    });
    
    // Escuchar cambios en el calendario y actualizar la fecha actual
    calendario.addEventListener('changeDate', () => {
        const fechaSeleccionada = datepicker.getDate();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const fechaFormateada = fechaSeleccionada.toLocaleDateString('es-ES', options);
        fechaActualElement.textContent = fechaFormateada;
    });
});

/* scripts.js */
document.addEventListener("DOMContentLoaded", () => {
    const horaActualElement = document.getElementById('hora-actual');

    function actualizarHoraActual() {
        const fecha = new Date();
        const hora = fecha.getHours();
        const minutos = fecha.getMinutes();
        const segundos = fecha.getSeconds();
        const horaFormateada = `${hora}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
        horaActualElement.textContent = horaFormateada;
    }

    actualizarHoraActual(); // Llamar a la función al cargar la página

    // Actualizar la hora cada segundo
    setInterval(actualizarHoraActual, 1000);
});

/* scripts.js */
document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');

    // Función para enviar un mensaje
    function sendMessage() {
        const message = chatInput.value;
        if (message.trim() !== '') {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            // Limpiar el campo de entrada después de enviar el mensaje
            chatInput.value = '';
            // Desplazar el scroll hacia abajo para mostrar el último mensaje
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    // Escuchar clic en el botón de enviar
    sendButton.addEventListener('click', sendMessage);

    // Escuchar tecla "Enter" en el campo de entrada
    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});
