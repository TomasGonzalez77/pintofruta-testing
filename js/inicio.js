//revisar en github porque se elimino el alert
function enviarConsulta() {
    // Obtener los datos del formulario
    const nombre = document.querySelector('input[name="nombre"]').value;
    const correo = document.querySelector('input[name="correo"]').value;
    const consulta = document.querySelector('textarea[name="consulta"]').value;

    // Autenticar con la API de Gmail
    gapi.auth2.getAuthInstance().signIn().then(() => {
        const accessToken = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;

        // Enviar el correo electrónico usando la API de Gmail
        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + accessToken);
        headers.append('Content-Type', 'application/json');

        const body = JSON.stringify({
            to: 'elnikoomg404@gmail.com', // reemplaza con tu correo electrónico
            subject: 'Consulta de ' + nombre,
            body: consulta + '\n\n' + correo,
        });

        fetch('https://www.googleapis.com/gmail/v1/users/me/messages/send', {
            method: 'POST',
            headers: headers,
            body: body,
        }).then(response => {
            if (response.ok) {
                alert('Consulta enviada correctamente');
                document.querySelector('#formulario').reset();
            } else {
                alert('Ha habido un error al enviar la consulta');
            }
        });
    });
}

// Cargar la API de Gmail
gapi.load('client:auth2', () => {
    gapi.client.init({
        apiKey: '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',
        clientId: '354540909746-mv1brrmhge42gk64mmigmqtjflp8mn4q.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/gmail.compose',
    }).then(() => {
        gapi.auth2.getAuthInstance().signIn();
    });
});