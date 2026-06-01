document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    // Pon el código 52 y luego los 10 dígitos del celular. (Sin el signo + ni espacios)
    const numeroAdministracion = "527831159516"; 

    // 2. Capturar solo lo que escribió la persona
    const nombre = document.getElementById('name').value.trim();
    const asunto = document.getElementById('issue').value.trim();

    // 3. Armar el mensaje
    const mensaje = `Hola, envío la información del formulario:%0A%0A` +
                    `*Nombre:* ${nombre}%0A` +
                    `*Asunto:* ${asunto}`;

    const url = `https://wa.me/${numeroAdministracion}?text=${mensaje}`;

    window.location.href = url; 
});