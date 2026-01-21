let carrito=[]

document.addEventListener("DOMContentLoaded", () => {
    console.log("Pasteleria Chococat cargada correctamente");


let botonesAgregar=document.querySelectorAll(".btn-agregar");
botonesAgregar.forEach(boton => {
    boton.addEventListener("click", function() {
        let nombreProducto=boton.getAttribute("data-nombre");
        let precioProducto=boton.getAttribute("data-precio");
        agregarAlCarrito(nombreProducto, precioProducto);
    });
});
});

document.getElementById("btn-carrito").addEventListener("click", function() {
    document.getElementById("carrito").classList.remove("oculto");
});
document.getElementById("cerrar-carrito").addEventListener("click", function() {
    document.getElementById("carrito").classList.add("oculto");
});

function agregarAlCarrito(nombre, precio) {
    let existe=false;
    for(let i=0; i<carrito.length; i++) {
        if(carrito[i].nombre===nombre) {
            carrito[i].cantidad++;
            existe=true;
            break;
        }
    }
    if(!existe) {
        carrito.push({nombre: nombre, precio: parseInt(precio), cantidad: 1});
    } 
    actualizarCarrito();   
}

function actualizarCarrito() {
    let listaCarrito=document.getElementById("lista-carrito");
    listaCarrito.innerHTML="";
    let total=0;

    for(let i=0; i<carrito.length; i++) {
        let item=carrito[i];
        let subtotal=item.precio * item.cantidad;
        total= total + subtotal;

        let divItem=document.createElement("div");
        divItem.className="item-carrito";
        divItem.innerHTML="<p><strong>" + item.nombre + "</strong></p>"
            + "<p>Cantidad: " + item.cantidad + "</p>"
            + "<p>Precio: $" + item.precio + "</p>"
            + "<p>Subtotal: $" + subtotal + "</p>"
            + "<button class='btn-eliminar' onclick='eliminarProducto(" + i + ")'>Eliminar</button>";
        listaCarrito.appendChild(divItem);
    }
    document.getElementById("total-carrito").textContent=total;
    document.getElementById("contador-carrito").textContent=carrito.length;
}

function eliminarProducto(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}

const socialItems=document.querySelectorAll(".social-item");
socialItems.forEach(item => {
    item.addEventListener("click", function(e) {
        const link = this.getAttribute("href");
        if (link){
            console.log(`Redirigiendo a: ${link}`);
            window.open(link, "_blank");
        }   
    });
});

