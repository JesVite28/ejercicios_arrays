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

function ordenarAlfabeticamente(arreglo) {
    return arreglo.sort();
}

let arregloDeDatos = agregarDatosHastaSalir();
console.log("El arreglo ordenado alfabéticamente es: ", ordenarAlfabeticamente(arregloDeDatos));
