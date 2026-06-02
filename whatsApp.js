document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    // El número al que se enviará el WhatsApp
    const numeroAdministracion = "527831385140"; 

    // 1. Capturar todos los campos nuevos usando los IDs correctos de tu HTML
    const nombre = document.getElementById('nombreAlumno').value.trim();
    const fechaNac = document.getElementById('fechaNacimiento').value.trim();
    const estadoCivil = document.getElementById('estadoCivil').value.trim();
    const lugarNac = document.getElementById('lugarNacimiento').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const curp = document.getElementById('curp').value.trim();
    const numTel = document.getElementById('numeroTelefonico').value.trim();
    const numCasa = document.getElementById('numeroCasa').value.trim(); // Este no era obligatorio
    const direccion = document.getElementById('direccion').value.trim();
    const nombreTutor = document.getElementById('nombreTutor').value.trim();
    const numTutor = document.getElementById('numeroTutor').value.trim();

    // 2. Armar el mensaje estructurado
    // Usamos un pequeño truco con el numCasa para que si no escriben nada, diga "No aplica"
    const mensaje = `Hola, envío mis datos para el formulario UNID:%0A%0A` +
                    `*Nombre:* ${nombre}%0A` +
                    `*Fecha de Nacimiento:* ${fechaNac}%0A` +
                    `*Estado Civil:* ${estadoCivil}%0A` +
                    `*Lugar de Nacimiento:* ${lugarNac}%0A` +
                    `*Correo:* ${correo}%0A` +
                    `*CURP:* ${curp}%0A` +
                    `*Celular:* ${numTel}%0A` +
                    `*Teléfono de casa:* ${numCasa ? numCasa : 'No aplica'}%0A` +
                    `*Dirección:* ${direccion}%0A` +
                    `*Tutor:* ${nombreTutor}%0A` +
                    `*Teléfono del Tutor:* ${numTutor}`;

    // 3. Crear el enlace final
    const url = `https://wa.me/${numeroAdministracion}?text=${mensaje}`;

    // 4. Redirigir a WhatsApp
    window.location.href = url; 
});
