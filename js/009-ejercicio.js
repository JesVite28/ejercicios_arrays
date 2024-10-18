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

function filtrarPares(arreglo) {
    return arreglo.filter(numero => numero % 2 === 0);
}

let arregloDeDatos = agregarDatosHastaSalir();
console.log("Los números pares son: ", filtrarPares(arregloDeDatos));
