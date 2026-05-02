document.addEventListener("DOMContentLoaded", function () {

    const contenedor = document.getElementById("productos");

     const productos = [
        { nombre: "Silla 1", precio: 185, imagen: "https://via.placeholder.com/220", descripcion: "Silla cómoda ideal para oficina" },
        { nombre: "Silla 2", precio: 160, imagen: "https://via.placeholder.com/220", descripcion: "Silla resistente para uso rudo" },
        { nombre: "Silla 3", precio: 150, imagen: "https://via.placeholder.com/220", descripcion: "Diseño elegante para sala" },
        { nombre: "Silla 4", precio: 600, imagen: "https://via.placeholder.com/220", descripcion: "Perfecta para gamers" },
        { nombre: "Silla 5", precio: 2200, imagen: "https://via.placeholder.com/220", descripcion: "Minimalista y ligera" },
        { nombre: "Silla 6", precio: 2500, imagen: "https://via.placeholder.com/220", descripcion: "Alta calidad y durabilidad" },
        { nombre: "Silla 7", precio: 2700, imagen: "https://via.placeholder.com/220", descripcion: "Diseño moderno" },
        { nombre: "Silla 8", precio: 3000, imagen: "https://via.placeholder.com/220", descripcion: "Super cómoda" },
        { nombre: "Silla 9", precio: 3200, imagen: "https://via.placeholder.com/220", descripcion: "Ideal para oficina" }
    ];

    productos.forEach(producto => {
        const card = `
            <div class="card">
                <img src="${producto.imagen}">
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
                <button class="boton" onclick="verMas('${producto.nombre}')">Ver más</button>
            </div>
        `;

        contenedor.innerHTML += card;
    });
  window.productos = productos;

function verMas(nombre) {
    const producto = window.productos.find(p => p.nombre === nombre);
    alert(producto.nombre + ":\n" + producto.descripcion);
}
});

function verMas(nombre) {

    const productos = [
        { nombre: "Silla 1", descripcion: "Silla cómoda ideal para oficina" },
        { nombre: "Silla 2", descripcion: "Silla resistente para uso rudo" },
        { nombre: "Silla 3", descripcion: "Diseño elegante para sala" },
        { nombre: "Silla 4", descripcion: "Perfecta para gamers" },
        { nombre: "Silla 5", descripcion: "Minimalista y ligera" },
        { nombre: "Silla 6", descripcion: "Alta calidad y durabilidad" },
        { nombre: "Silla 7", descripcion: "Diseño moderno" },
        { nombre: "Silla 8", descripcion: "Super cómoda" },
        { nombre: "Silla 9", descripcion: "Ideal para oficina" }
    ];

    const producto = productos.find(p => p.nombre === nombre);

    alert(nombre + ":\n" + producto.descripcion);
}

let index = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    index++;
    if (index >= slides.length) {
        index = 0;
    }
}

setInterval(mostrarSlide, 3000);