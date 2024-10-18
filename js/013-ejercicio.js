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

function palabrasMasLargasQue(arreglo, n) {
    return arreglo.filter(palabra => palabra.length > n);
}

let arregloDeDatos = agregarDatosHastaSalir();
let n = prompt("Ingresa el número n para comparar las longitudes:");
console.log(`Las palabras con más de ${n} letras son: `, palabrasMasLargasQue(arregloDeDatos, parseInt(n)));
