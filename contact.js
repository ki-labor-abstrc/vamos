document.addEventListener('DOMContentLoaded', function() {
    // Inicializar EmailJS
    emailjs.init("5qxp40LEgWmPQRiLV");

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener valores del formulario
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const comments = document.getElementById('comments').value.trim();
        const tipoInteres = document.querySelector('input[name="consulta"]:checked')?.value;

        // Validar que todos los campos están llenos
        if (!name || !email || !comments || !tipoInteres) {
            alert('Por favor, completa todos los campos antes de enviar.');
            return;
        }

        // Preparar los parámetros para el correo
        const templateParams = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            tipo_interes: tipoInteres,
            message: document.getElementById('comments').value // Enviando como "message"
        };
        

        // Mostrar indicador de carga
        const button = document.querySelector('.btn-enviar');
        const originalText = button.textContent;
        button.textContent = 'Enviando...';
        button.disabled = true;

        // Enviar el correo
        emailjs.send('service_sksmiie', 'template_4rqbna7', templateParams)
            .then(function(response) {
                alert('¡Mensaje enviado con éxito!');
                document.getElementById('contact-form').reset();
            })
            .catch(function(error) {
                alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
                console.log('Error:', error);
            })
            .finally(function() {
                // Restaurar el botón
                button.textContent = originalText;
                button.disabled = false;
            });
    });
});
