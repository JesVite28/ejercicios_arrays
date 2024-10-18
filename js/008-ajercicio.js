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

function buscarElemento(arreglo, valor) {
    return arreglo.includes(valor);
}

let arregloDeDatos = agregarDatosHastaSalir();
let valor = prompt("Ingresa el valor a buscar:");
console.log(`¿El valor ${valor} está en el arreglo? `, buscarElemento(arregloDeDatos, parseFloat(valor)));
