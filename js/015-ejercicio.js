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
function buscarIndice(arreglo, valor) {
    return arreglo.indexOf(valor);
}

let arregloDeDatos = agregarDatosHastaSalir();
let valor = prompt("Ingresa el valor para encontrar su índice:");
console.log(`El índice del valor ${valor} es: `, buscarIndice(arregloDeDatos, parseFloat(valor)));
