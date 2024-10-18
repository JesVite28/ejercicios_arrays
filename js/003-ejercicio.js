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
function promedioArreglo(arreglo) {
    let sumaElementos = 0;
    arreglo.forEach(elementoArreglo => {
        sumaElementos += elementoArreglo;
    });
    return sumaElementos / arreglo.length;
}

let arregloDeDatos = agregarDatosHastaSalir();
console.log("El promedio es: ", promedioArreglo(arregloDeDatos));
