function crearArregloDeString(cadena) {
    let palabra = '';
    let arreglo = [];
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== ' ') {
            palabra += cadena[i];
        } else {
            if (palabra.length > 0) {
                arreglo.push(palabra);
            }
            palabra = '';
        }
    }
    if (palabra.length > 0) {
        arreglo.push(palabra);
    }
    return arreglo;
}


let cadena = "Hola mundo desde JavaScript";
console.log(crearArregloDeString(cadena));


// function crearArregloDeString(cadena) {
//     return cadena.split(' ');
// }

// let cadena = prompt("Ingresa una cadena de texto: ");
// let arregloDePalabras = crearArregloDeString(cadena);
// console.log("El arreglo de palabras es: ", arregloDePalabras);

