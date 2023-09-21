const carrito = {};

const listaCarrito = document.querySelector('#lista-carrito');
const total = document.querySelector('#total');

const botonesAgregar = document.querySelectorAll('#mainContent form button[type="submit"]');
botonesAgregar.forEach(boton => {
  boton.addEventListener('click', () => {
    const producto = boton.closest('.card');
    const idProducto = producto.getAttribute('id');
    const nombreProducto = producto.querySelector('p').textContent;
    const precioProducto = parseFloat(producto.querySelector('p').textContent.match(/\d+/)[0]);

    if (carrito[idProducto]) {
      carrito[idProducto].cantidad++;
    } else {
      carrito[idProducto] = {
        id: idProducto,
        nombre: nombreProducto,
        precio: precioProducto,
        cantidad: 1,
      };
    }

    actualizarListaCarrito();
  });
});

const botonesQuitar = document.querySelectorAll('#lista-carrito button');
botonesQuitar.forEach(boton => {
  boton.addEventListener('click', () => {
    const idProducto = boton.closest('li').getAttribute('data-id');

    delete carrito[idProducto];

    actualizarListaCarrito();
  });
});

function actualizarListaCarrito() {
  listaCarrito.innerHTML = '';

  for (const idProducto in carrito) {
    const producto = carrito[idProducto];

    const elementoLista = document.createElement('li');
    elementoLista.setAttribute('data-id', idProducto);

    const nombreProducto = document.createElement('span');
    nombreProducto.textContent = producto.nombre;
    elementoLista.appendChild(nombreProducto);

    const cantidadProducto = document.createElement('span');
    cantidadProducto.textContent = producto.cantidad;
    elementoLista.appendChild(cantidadProducto);

    const precioProducto = document.createElement('span');
    precioProducto.textContent = `$${producto.precio}`;
    elementoLista.appendChild(precioProducto);

    const botonQuitar = document.createElement('button');
    botonQuitar.textContent = 'Quitar';
    elementoLista.appendChild(botonQuitar);

    listaCarrito.appendChild(elementoLista);
  }

  actualizarTotalCarrito();
}
function actualizarTotalCarrito() {
  let totalCarrito = 0;

  for (const idProducto in carrito) {
    const producto = carrito[idProducto];

    totalCarrito += producto.precio * producto.cantidad;
  }

  total.textContent = `$${totalCarrito}`;
}
