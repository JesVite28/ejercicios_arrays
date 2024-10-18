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
function eliminarDuplicados(arreglo) {
    let unicos = [];
    arreglo.forEach(elemento => {
        if (!unicos.includes(elemento)) {
            unicos.push(elemento);
        }
    });
    return unicos;
}

let arregloDeDatos = agregarDatosHastaSalir();
console.log("El arreglo sin duplicados es: ", eliminarDuplicados(arregloDeDatos));
