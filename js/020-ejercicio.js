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
function productoDeTodos(arreglo) {
    return arreglo.reduce((producto, valorActual) => producto * valorActual, 1);
}

let arregloDeDatos = agregarDatosHastaSalir();
console.log("El producto de todos los elementos es: ", productoDeTodos(arregloDeDatos));
