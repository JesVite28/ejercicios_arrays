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


function encontrarMayorNumero(arreglo) {
    let mayorNumero = arreglo[0];
    arreglo.forEach(elementoArreglo => {
        if (elementoArreglo > mayorNumero) {
            mayorNumero = elementoArreglo;
        }
    });
    return mayorNumero;
}

let arregloDeDatos = agregarDatosHastaSalir();
console.log("El número más grande es: ", encontrarMayorNumero(arregloDeDatos));
