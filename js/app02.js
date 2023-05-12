var btn = document.getElementById('inicio');
btn.onclick = function() {
    inicio();
};

function inicio() {
    var nombre = document.getElementById('nombre').value;
    var mensajeBienvenida = 'Te has registrado con exito ' + nombre;    
    var divMensaje = document.createElement('div');
    divMensaje.innerHTML = mensajeBienvenida;
    divMensaje.classList.add('mensaje-bienvenida');

    var contenedor = document.getElementById('contenedor');
    contenedor.appendChild(divMensaje);       


    var mensaje = nombre;
    var divMensaje = document.createElement('div');
    divMensaje.innerHTML = mensaje;
    var contenedor1 = document.getElementById('contenedor1');
    contenedor1.appendChild(divMensaje);

    
} 













