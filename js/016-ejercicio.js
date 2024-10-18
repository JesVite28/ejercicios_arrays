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
function encontrarElemento(arreglo, valor) {
    return arreglo.find(elemento => elemento === valor);
}

let arregloDeDatos = agregarDatosHastaSalir();
let valor = prompt("Ingresa el valor a encontrar:");
console.log(`El valor encontrado es: `, encontrarElemento(arregloDeDatos, parseFloat(valor)));
