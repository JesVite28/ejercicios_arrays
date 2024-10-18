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
function ordenarNumeros(arreglo) {
    return arreglo.sort((a, b) => a - b);
}

let arregloDeDatos = agregarDatosHastaSalir();
console.log("El arreglo ordenado es: ", ordenarNumeros(arregloDeDatos));
