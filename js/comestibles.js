//Productos que se incorporan mediante getElementById en el DOM

   // Datos de ejemplo de los productos
   const productos = [
    {
      nombre: 'Producto 1',
      descripcion: 'Esta es la descripción del Producto 1.',
      imagen: '../img/ajonegro.jpg'
    },
    {
      nombre: 'Producto 2',
      descripcion: 'Esta es la descripción del Producto 2.',
      imagen: 'imagen2.jpg'
    },
    {
      nombre: 'Producto 3',
      descripcion: 'Esta es la descripción del Producto 3.',
      imagen: 'imagen3.jpg'
    }
  ];

  // Obtener el contenedor de productos
  const contenedorProductos = document.getElementById('contenedor-productos');

  // Agregar los productos al contenedor
  productos.forEach(producto => {
    const elementoProducto = document.createElement('div');
    elementoProducto.classList.add('producto');
    elementoProducto.textContent = producto.nombre;

    const elementoImagen = document.createElement('img');
    elementoImagen.src = producto.imagen;
    elementoImagen.style.display = 'none';

    const elementoDescripcion = document.createElement('div');
    elementoDescripcion.classList.add('descripcion');
    elementoDescripcion.textContent = producto.descripcion;

    elementoProducto.addEventListener('click', () => {
      elementoImagen.style.display = elementoImagen.style.display === 'none' ? 'block' : 'none';
      elementoDescripcion.style.display = elementoDescripcion.style.display === 'none' ? 'block' : 'none';
    });

    contenedorProductos.appendChild(elementoProducto);
    contenedorProductos.appendChild(elementoImagen);
    contenedorProductos.appendChild(elementoDescripcion);
  });