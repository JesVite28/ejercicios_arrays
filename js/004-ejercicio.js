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

function invertirArreglo(arreglo) {
    let arregloInvertido = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        arregloInvertido.push(arreglo[i]);
    }
    return arregloInvertido;
}

let arregloDeDatos = agregarDatosHastaSalir();
console.log("La suma es: ", arregloInvertido(arregloDeDatos));
