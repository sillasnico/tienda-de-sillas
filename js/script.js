document.addEventListener("DOMContentLoaded", function () {

    const contenedor = document.getElementById("productos");

     const productos = [
    { nombre: "Silla color azul claro", precio: 150, imagen: "img/silla1.jpg", descripcion: "Silla cómoda ideal para aventos" },
    { nombre: "Silla color azul cielo", precio: 150, imagen: "img/silla2.jpg", descripcion: "Silla resistente para uso rudo" },
    { nombre: "Silla color azul marino", precio: 150, imagen: "img/silla3.jpg", descripcion: "Diseño elegante para sala" },
    { nombre: "Silla monobloque color blanco", precio:150, imagen: "img/silla4.jpg", descripcion: "Perfecta para gamers" },
    { nombre: "Silla de coca color rojo", precio: 180, imagen: "img/silla5.jpg", descripcion: "Minimalista y ligera" },
    { nombre: "Mesa de coca con 4 sillas incluidas color rojo ", precio: 600, imagen: "img/silla6.jpg", descripcion: "Alta calidad y durabilidad" },
    { nombre: "Mesa con 4 sillas incluidas color azul marino", precio: 600, imagen: "img/silla7.jpg", descripcion: "Diseño moderno" },
    { nombre: "Silla 8", precio: 3000, imagen: "img/silla8.jpg", descripcion: "Super cómoda por muchoooooo" },
    { nombre: "Silla 9", precio: 3200, imagen: "img/silla9.jpg", descripcion: "Ideal para oficina" }
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
        { nombre: "Silla 1", descripcion: "Silla cómoda ideal para la oficina" },
        { nombre: "Silla 2", descripcion: "Silla resistente para uso rudo" },
        { nombre: "Silla 3", descripcion: "Diseño elegante para sala" },
        { nombre: "Silla 4", descripcion: "Perfecta para gamers" },
        { nombre: "Silla 5", descripcion: "Minimalista y ligera" },
        { nombre: "Silla 6", descripcion: "Alta calidad y durabilidad" },
        { nombre: "Silla 7", descripcion: "Diseño moderno" },
        { nombre: "Silla 8", descripcion: "Super cómoda por muchoooooo" },
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

