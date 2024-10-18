function planoArreglo(arreglo) {
    let plano = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (Array.isArray(arreglo[i])) {
            for (let j = 0; j < arreglo[i].length; j++) {
                plano.push(arreglo[i][j]);
            }
        } else {
            plano.push(arreglo[i]);
        }
    }
    return plano;
}


let arregloAnidado = [1, [2, 3], [4, 5, 6], 7];
console.log(planoArreglo(arregloAnidado));

// function planoArreglo(arreglo) {
//     return arreglo.flat();
// }


// let arregloAnidado = [[1, 2], [3, 4], [5]];
// console.log("El arreglo aplanado es: ", planoArreglo(arregloAnidado));

