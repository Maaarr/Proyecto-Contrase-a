let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    let numDigitado = parseInt(cantidad.value);
    console.log('Longitud contrasena: ' + numDigitado);

    if (numDigitado < 8) {
        alert("La cantidad de caracteres debe ser mayor a 8");
    } else {
        let password = '';
        for (let i = 0; i < numDigitado; i++) {
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            console.log('Caracter aleatorio ' + (i + 1) + ": " + caracterAleatorio);

            password += caracterAleatorio;
        }
        console.log('Password: ' + password);

        contrasena.value = password;

    }
}


function limpiar() {
    cantidad.value = '';
    contrasena.value = '';
}