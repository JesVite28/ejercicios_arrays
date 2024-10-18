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
function todosMayoresQue(arreglo, n) {
    return arreglo.every(numero => numero > n);
}

let arregloDeDatos = agregarDatosHastaSalir();
let n = prompt("Ingresa el número n para comparar:");
console.log(`¿Todos los números son mayores que ${n}? `, todosMayoresQue(arregloDeDatos, parseFloat(n)));
