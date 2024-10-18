function combinarYOrdenar(arreglos) {
    let combinado = [];
    for (let i = 0; i < arreglos.length; i++) {
        for (let j = 0; j < arreglos[i].length; j++) {
            combinado.push(arreglos[i][j]);
        }
    }
    
    for (let i = 0; i < combinado.length - 1; i++) {
        for (let j = 0; j < combinado.length - i - 1; j++) {
            if (combinado[j] > combinado[j + 1]) {
                let temp = combinado[j];
                combinado[j] = combinado[j + 1];
                combinado[j + 1] = temp;
            }
        }
    }
    
    return combinado;
}


let arreglosParaCombinar = [[3, 1, 4], [7, 5, 6], [9, 2, 8]];
console.log(combinarYOrdenar(arreglosParaCombinar));

// function combinarYOrdenar(...arreglos) {
//     return [].concat(...arreglos).sort((a, b) => a - b);
// }

// let arreglo1 = agregarDatosHastaSalir(); // Primer arreglo
// let arreglo2 = agregarDatosHastaSalir(); // Segundo arreglo
// console.log("Los arreglos combinados y ordenados son: ", combinarYOrdenar(arreglo1, arreglo2));

