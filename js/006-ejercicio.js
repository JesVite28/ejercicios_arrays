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

function concatenarArreglos(arreglo1, arreglo2) {
    return arreglo1.concat(arreglo2);
}

let arreglo1 = agregarDatosHastaSalir();
let arreglo2 = [2,0,2,3,0,0,3,4];
console.log("Los arreglos concatenados son: ", concatenarArreglos(arreglo1, arreglo2));

