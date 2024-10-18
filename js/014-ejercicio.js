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
function unirEnCadena(arreglo) {
    return arreglo.join(' ');
}

let arregloDeDatos = agregarDatosHastaSalir();
console.log("El arreglo unido en una cadena es: ", unirEnCadena(arregloDeDatos));
