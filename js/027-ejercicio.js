function contarOcurrencias(arreglo, valor) {
    let contador = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === valor) {
            contador++;
        }
    }
    return contador;
}


let arregloOcurrencias = [1, 2, 3, 1, 4, 1, 5];
let valorBuscado = 1;
console.log(contarOcurrencias(arregloOcurrencias, valorBuscado));


// function contarOcurrencias(arreglo, valor) {
//     return arreglo.reduce((contador, elemento) => (elemento === valor ? contador + 1 : contador), 0);
// }

// let arregloDeDatos = agregarDatosHastaSalir(); 
// let valorABuscar = prompt("Ingresa el valor que deseas contar: ");
// console.log("El valor", valorABuscar, "aparece", contarOcurrencias(arregloDeDatos, parseFloat(valorABuscar)), "veces.");

