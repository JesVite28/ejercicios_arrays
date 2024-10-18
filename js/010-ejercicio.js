function agregarDatosHastaSalir() {
    let palabraClave = "salir";
    let dato;
    let arreglo = [];
    do {
        dato = prompt(`Ingresa un dato (o escribe '${palabraClave}' para salir):`);
        if (dato.toLowerCase().trim() !== palabraClave) {
            arreglo.push(parseFloat(dato));
        }
    } while (dato.toLowerCase() !== palabraClave);
    return arreglo;
}

function multiplicarPorDos(arreglo) {
    return arreglo.map(numero => numero * 2);
}

let arregloDeDatos = agregarDatosHastaSalir();
console.log("El arreglo multiplicado por 2 es: ", multiplicarPorDos(arregloDeDatos));
