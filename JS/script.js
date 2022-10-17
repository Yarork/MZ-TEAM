function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

let productoA = new Producto("camisetas", 100, 102)
let productoB = new Producto("camperas", 80, 243)
let productoC = new Producto("remeras amarillas", 60, 151)
let productoD = new Producto("tazas", 140, 0)
let productoE = new Producto("bolsas", 30, 53)

let listaProductos = [productoA, productoB, productoC, productoD, productoE]

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)


alert("En nuestra tienda, usted puede encontrar los siguientes productos con stock: \n - " + listaNombres.join("\n - "))

function bienvenida(nombre, apellido){
    alert("Bienvenido " + nombre + " " + apellido)
}

function calcularIva(precioTotal){
    precioConIva = precioTotal + precioTotal * 0.21
    alert("El precio total de la compra con IVA (21%) es de " + precioConIva)
}

function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

function calculoStock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
    }
    else{
        alert("Actualmente tenemos " + stock + " unidades de este producto")
    }
}
nombre = prompt("Ingrese su nombre: ")
apellido = prompt("Ingrese su apellido: ")

bienvenida(nombre, apellido)

let precioTotal = 0

let texto = prompt("Ingrese SI para continuar con la compra\n Ingrese NO para salir de la tienda").toUpperCase()
if(texto == "SI"){
    let compraProductoA = prompt("Ingrese el numero de " + productoA.nombre + " que quiera agregar al carrito, su valor es de " + productoA.precio)
    calculoStock(compraProductoA, productoA.stock, productoA.precio)

    let compraProductoB = prompt("Ingrese el numero de " + productoB.nombre + " que quiera agregar al carrito, su valor es de " + productoB.precio)
    calculoStock(compraProductoB, productoB.stock, productoB.precio)

    let compraProductoC = prompt("Ingrese el numero de " + productoC.nombre + " que quiera agregar al carrito, su valor es de " + productoC.precio)
    calculoStock(compraProductoC, productoC.stock, productoC.precio)

    let compraProductoD = prompt("Ingrese el numero de " + productoD.nombre + " que quiera agregar al carrito, su valor es de " + productoD.precio)
    calculoStock(compraProductoD, productoD.stock, productoD.precio)

    let compraProductoE = prompt("Ingrese el numero de " + productoE.nombre + " que quiera agregar al carrito, su valor es de " + productoE.precio)
    calculoStock(compraProductoE, productoE.stock, productoE.precio)

    alert("El precio total de la compra sin IVA es de " + precioTotal )

    calcularIva(precioTotal)
    alert("Gracias por su compra!")
}
else{
    alert("Gracias por su respuesta")
}