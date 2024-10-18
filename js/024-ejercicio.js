function reemplazarNegativos(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 0) {
            arreglo[i] = Math.abs(arreglo[i]);
        }
    }
    return arreglo;
}


let arregloConNegativos = [1, -2, 3, -4, 5];
console.log(reemplazarNegativos(arregloConNegativos));

// function reemplazarNegativos(arreglo) {
//     return arreglo.map(numero => numero < 0 ? Math.abs(numero) : numero);
// }

// let arregloDeDatos = agregarDatosHastaSalir(); // Usa la función para ingresar números
// console.log("El arreglo con valores negativos reemplazados es: ", reemplazarNegativos(arregloDeDatos));
