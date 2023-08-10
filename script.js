function agregarComentario() {
  var comentarioInput = document.getElementById("comentarioInput");
  var comentario = comentarioInput.value.trim();

  if (comentario !== "") {
    var contenedorComentarios = document.getElementById("contenedorComentarios");
    var nuevoComentario = document.createElement("div");
    nuevoComentario.classList.add("comentario");
    nuevoComentario.textContent = comentario;
    contenedorComentarios.appendChild(nuevoComentario);
   
    nuevoComentario.setAttribute("style", "font-size: 16px; color: white;");
    nuevoComentario.style.backgroundColor = "green";
    nuevoComentario.style.padding = "10px";
    comentarioInput.value = ""; 

  }
}
    var carrito = [];

    function agregarAlCarrito(nombreProducto, precioProducto) {
      var producto = {
        nombre: nombreProducto,
        precio: precioProducto
      };

      carrito.push(producto);

      actualizarContadorCarrito();

      mostrarProductosEnCarrito();

      calcularTotalCarrito();
    }

    function actualizarContadorCarrito() {
      var contadorCarrito = document.getElementById("contadorCarrito");
      contadorCarrito.textContent = carrito.length;
    }

    function mostrarProductosEnCarrito() {
      var contenedorProductos = document.getElementById("productosCarrito");

      contenedorProductos.innerHTML = "";

      carrito.forEach(function(producto) {
        var nuevoProducto = document.createElement("div");
        nuevoProducto.classList.add("productoCarrito");
        nuevoProducto.innerHTML = "<h3>" + producto.nombre + "</h3><p>Precio: $" + producto.precio + "</p>";

        contenedorProductos.appendChild(nuevoProducto);
      });
    }

    function calcularTotalCarrito() {
      var totalCarrito = 0;

      carrito.forEach(function(producto) {
        totalCarrito += producto.precio;
      });

      var elementoTotalCarrito = document.getElementById("totalCarrito");
      elementoTotalCarrito.textContent = "Total: $" + totalCarrito;
    }

    function realizarCompra() {
      if (carrito.length > 0) {
        console.log("Compra realizada:", carrito);

        carrito = [];
        actualizarContadorCarrito();
        mostrarProductosEnCarrito();
        calcularTotalCarrito();

        alert("¡Compra realizada con éxito!");

      } else {
        alert("El carrito está vacío. Agrega productos antes de realizar la compra.");
      }
      
    }