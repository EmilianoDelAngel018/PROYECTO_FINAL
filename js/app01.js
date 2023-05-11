const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('#lista-productos');
const contenedor = document.querySelector('#lista-carrito tbody');
const vaciarCarritobtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

inicarEventos()
function inicarEventos() {
    listaProductos.addEventListener('click', agregarProducto)
    carrito.addEventListener('click', eliminarProducto)
    vaciarCarritobtn.addEventListener('click', vaciarCarrito)
}

function agregarProducto(e) {
    e.preventDefault()
    if (e.target.classList.contains('agregar-carrito')) {
        const producto = e.target.parentElement.parentElement;
        leerDatosProducto(producto)
    }
}

function leerDatosProducto(producto) {
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        nombre: producto.querySelector('h2').textContent,
        precio: producto.querySelector('.precio').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }


    if (articulosCarrito.some(producto => producto.id === infoProducto.id)) {
        const productos = articulosCarrito.map(producto => {
            if (producto.id === infoProducto.id) {
                producto.cantidad++
                return producto
            } else {
                return producto
            }
        })
        articulosCarrito = [...productos]
    } else {
        articulosCarrito = [...articulosCarrito, infoProducto];
    }

    console.log(articulosCarrito)
    carritoHTML();
}

function eliminarProducto(e){
    e.preventDefault();

    if (e.target.classList.contains('borrar-producto')){
        const productoID=e.target.getAttribute('data-id')
        articulosCarrito=articulosCarrito.filter(producto=>producto.id !==productoID)
        carritoHTML()
    }
}

function vaciarCarrito(){
    contenedor.innerHTML='';
    while (contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
}

function carritoHTML(){
    vaciarCarrito()

    articulosCarrito.forEach(producto=>{
        const row =document.createElement('tr')
        row.innerHTML=`
        <td>
        <img class="imgCar" src="${producto.imagen}">
        </td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td><a href="#" class="vacio borrar-producto" data-id="${producto.id}">🗑️</a></td>
        `
        contenedor.appendChild(row);
    })
}