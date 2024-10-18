function transformarArregloDeObjetos(arreglo) {
    let nombres = [];
    for (let i = 0; i < arreglo.length; i++) {
        nombres.push(arreglo[i].nombre);
    }
    return nombres;
}


let arregloObjetos = [{ nombre: 'Juan', edad: 30 }, { nombre: 'Ana', edad: 25 }, { nombre: 'Carlos', edad: 35 }];
console.log(transformarArregloDeObjetos(arregloObjetos));

// function transformarArregloDeObjetos(arreglo) {
//     return arreglo.map(objeto => objeto.nombre);
// }

// let arregloDeObjetos = [
//     {nombre: "Juan", edad: 25},
//     {nombre: "María", edad: 30},
//     {nombre: "Pedro", edad: 40}
// ];
// console.log("Nombres extraídos de los objetos: ", transformarArregloDeObjetos(arregloDeObjetos));
