function login() {
    var username = document.getElementById('floatingInput').value;
    var password = document.getElementById('floatingPassword').value;

    if (username === 'usuario' && password === 'contraseña') {
        window.location.href = 'central.html';
    } else {
        alert('Inicio de sesión fallido');
    }
}