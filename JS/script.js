let nombreProductoA = "REMERA AMARILLAS"
let precioProductoA = 100
let stockProductoA = 40

let nombreProductoX = "REMERA GRIS"
let precioProductoX = 100
let stockProductoX = 40

let nombreProductoB = "camisetas"
let precioProductoB = 80
let stockProductoB = 100

let nombreProductoC = "tazas"
let precioProductoC = 30
let stockProductoC = 20

let nombreProductoD = "CAMPERAS"
let precioProductoD = 110
let stockProductoD = 60

let nombreProductoE = "BOLSAS"
let precioProductoE = 30
let stockProductoE = 50

function bienvenida(nombre, apellido){
    alert("Bienvenido " + nombre + " " + apellido)
}

function calcularIva(a){
    precioConIva = a * 1.21
    alert("El precio total de la compra con IVA es de " + precioConIva)
}

function precioCuota(a){
    precioConIva = a / 3
    alert("El precio total de la compra con IVA es de: " + a + " y cada cuota es de: " + precioConIva)
}

nombre = prompt("Ingrese su nombre: ")
apellido = prompt("Ingrese su apellido: ")

bienvenida(nombre, apellido)

let precioTotal = 0
let precioC = 0
let precioConIva = 0

let texto = prompt("Ingrese SI para continuar con la compra \nIngrese NO para salir de la tienda")
if(texto == "SI"){
    let compraRemeras = prompt("Ingrese el numero de " + nombreProductoA + " que quiera comprar, su valor unitario es de " + precioProductoA)
    if(compraRemeras <= stockProductoA){
        precioTotal = precioTotal + compraRemeras * precioProductoA
    }
    else{
        alert("No contamos con tanto stock en estos momentos")
    }

    let compraRemeras2 = prompt("Ingrese la cantidad de " + nombreProductoX + " que desee comprar, su valor unitario es de " + precioProductoX)
    if(compraRemeras2 <= stockProductoX){
        precioTotal = precioTotal + compraRemeras2 * precioProductoX
    }
    else{
        alert("No contamos con tanto stock en estos momentos")
    }
    
    let compraPantalones = prompt("Ingrese el numero de " + nombreProductoB + " que quiera comprar, su valor unitario es de " + precioProductoB)
    if(compraPantalones <= stockProductoB){
        precioTotal = precioTotal + compraPantalones * precioProductoB
    }
    else{alert("No contamos con tanto stock en estos momentos")}

    let compraShorts = prompt("Ingrese el numero de " + nombreProductoC + " que quiera comprar, su valor unitario es de " + precioProductoC)
    if(compraShorts <= stockProductoC){
        precioTotal = precioTotal + compraShorts * precioProductoC
    }
    else{alert("No contamos con tanto stock en estos momentos")}

    let compraCamperas = prompt("Ingrese el numero de " + nombreProductoD + " que quiera comprar, su valor unitario es de " + precioProductoD)
    if(compraCamperas <= stockProductoD){
        precioTotal = precioTotal + compraCamperas * precioProductoD
    }
    else{alert("No contamos con tanto stock en estos momentosS")}

    let compraGorros = prompt("Ingrese el numero de " + nombreProductoE + " que quiera comprar, su valor unitario es de " + precioProductoE)
    if(compraGorros <= stockProductoE){
        precioTotal = precioTotal + compraGorros * precioProductoE
    }
    else{alert("No contamos con tanto stock en estos momentos")
}

    alert("El precio total comprando en efectivo es de " + precioTotal )

    calcularIva(precioTotal)
    
    precioCuota (precioConIva)

    alert("Gracias por comprarnos a nosotros!!")
}
else{
    alert("Que tengas buen dia!")
}