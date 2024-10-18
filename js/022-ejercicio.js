function eliminarFalsy(arreglo) {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i]) {
            nuevoArreglo.push(arreglo[i]);
        }
    }
    return nuevoArreglo;
}


let arregloConFalsy = [0, 1, false, 2, '', 3, null, 'Hola', undefined];
console.log(eliminarFalsy(arregloConFalsy));


// function eliminarFalsy(arreglo) {
//     return arreglo.filter(Boolean);
// }

// let arregloDeDatos = agregarDatosHastaSalir(); 
// console.log("El arreglo sin valores falsy es: ", eliminarFalsy(arregloDeDatos));
