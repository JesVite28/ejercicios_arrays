function combinarObjetos(arreglo1, arreglo2) {
    let combinado = [];
    for (let i = 0; i < arreglo1.length; i++) {
        let nuevoObjeto = {};
        for (let key in arreglo1[i]) {
            nuevoObjeto[key] = arreglo1[i][key];
        }
        for (let key in arreglo2[i]) {
            nuevoObjeto[key] = arreglo2[i][key];
        }
        combinado.push(nuevoObjeto);
    }
    return combinado;
}


let arreglo1 = [{ nombre: 'Juan', edad: 30 }, { nombre: 'Ana', edad: 25 }];
let arreglo2 = [{ ciudad: 'Madrid' }, { ciudad: 'Barcelona' }];
console.log(combinarObjetos(arreglo1, arreglo2));



// function combinarObjetos(arreglo1, arreglo2) {
//     return arreglo1.map((objeto, index) => ({ ...objeto, ...arreglo2[index] }));
// }

// let arreglo1 = [
//     {nombre: "Juan", edad: 25},
//     {nombre: "María", edad: 30}
// ];
// let arreglo2 = [
//     {profesion: "Ingeniero"},
//     {profesion: "Doctora"}
// ];
// console.log("Objetos combinados: ", combinarObjetos(arreglo1, arreglo2));
