document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector(".container");
    let botonesBarra = document.querySelectorAll(".boton-barra");

    function cargarProductos(productos) {
        container.innerHTML = "";

        productos.forEach((producto) => {
            container.innerHTML += retornarCardHTML(producto);
        });
    }

    function retornarCardHTML(producto) {
        return `
        <div class="cards" style="width: 19rem;">
            <img src="${producto.img}" class="producto-imagen">
            <div class="producto-body">
                <h5 class="producto-titulo">${producto.name}<br>Año:${producto.year}</h5>
                <p class="producto-info">${producto.description}</p>
                <a href="#" class="btn btn-primary">Agregar al carrito: $${producto.price}.</a>
            </div>
        </div>`;
    }

    function filtroPorCategoriaFor(array, type) {
        if (type === "Todos") {
            return array;
        }
        let juegosFiltrados = []
        for (let i = 0; i < array.length; i++) {
            if (array[i].category === type) {
                juegosFiltrados.push(array[i]);
            }
        }
        return juegosFiltrados;
    }

    botonesBarra.forEach(boton => {
        boton.addEventListener("click", () => {
            let categoria = boton.getAttribute("data-category");
            let juegosFiltrados = filtroPorCategoriaFor(juegos, categoria);
            cargarProductos(juegosFiltrados);
        });
    });

    // Cargar todos los productos inicialmente
    cargarProductos(juegos);
});