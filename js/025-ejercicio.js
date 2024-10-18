function estaVacio(arreglo) {
    return arreglo.length === 0;
}

let arregloVacio = [];
let arregloNoVacio = [1, 2, 3];
console.log(estaVacio(arregloVacio));   
console.log(estaVacio(arregloNoVacio)); 

// function estaVacio(arreglo) {
//     return arreglo.length === 0;
// }

// let arregloDeDatos = agregarDatosHastaSalir(); // Usa la función para ingresar números
// console.log("¿Está vacío el arreglo?: ", estaVacio(arregloDeDatos));
