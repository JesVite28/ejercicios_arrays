
// Ejercicios Básicos

// 1. Suma de los elementos de un arreglo
function sumaArreglo() {
    let arr = prompt("Introduce números separados por comas:").split(",").map(Number);
    let suma = arr.reduce((acc, num) => acc + num, 0);
    alert("La suma de los elementos es: " + suma);
}
sumaArreglo();

// 2. Encuentra el mayor número
function maximoArreglo() {
    let arr = prompt("Introduce números separados por comas:").split(",").map(Number);
    let maximo = Math.max(...arr);
    alert("El número más grande es: " + maximo);
}
maximoArreglo();

// 3. Promedio de números
function promedioArreglo() {
    let arr = prompt("Introduce números separados por comas:").split(",").map(Number);
    let promedio = arr.reduce((acc, num) => acc + num, 0) / arr.length;
    alert("El promedio es: " + promedio);
}
promedioArreglo();

// 4. Invertir un arreglo
function invertirArreglo() {
    let arr = prompt("Introduce elementos separados por comas:").split(",");
    let invertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        invertido.push(arr[i]);
    }
    alert("El arreglo invertido es: " + invertido.join(", "));
}
invertirArreglo();

// 5. Conteo de elementos
function contarElementos() {
    let arr = prompt("Introduce elementos separados por comas:").split(",");
    alert("El número de elementos es: " + arr.length);
}
contarElementos();

// 6. Concatenar arreglos
function concatenarArreglos() {
    let arr1 = prompt("Introduce el primer arreglo separado por comas:").split(",");
    let arr2 = prompt("Introduce el segundo arreglo separado por comas:").split(",");
    let concatenado = arr1.concat(arr2);
    alert("Los arreglos concatenados son: " + concatenado.join(", "));
}
concatenarArreglos();

// 7. Eliminar duplicados
function eliminarDuplicados() {
    let arr = prompt("Introduce elementos separados por comas:").split(",");
    let unico = [...new Set(arr)];
    alert("Arreglo sin duplicados: " + unico.join(", "));
}
eliminarDuplicados();

// 8. Buscar elemento
function buscarElemento() {
    let arr = prompt("Introduce elementos separados por comas:").split(",");
    let valor = prompt("Introduce el valor a buscar:");
    let encontrado = arr.includes(valor);
    alert("¿El elemento está en el arreglo? " + encontrado);
}
buscarElemento();

// 9. Filtrar números pares
function filtrarPares() {
    let arr = prompt("Introduce números separados por comas:").split(",").map(Number);
    let pares = arr.filter(num => num % 2 === 0);
    alert("Números pares: " + pares.join(", "));
}
filtrarPares();

// 10. Multiplicar por 2
function multiplicarPorDos() {
    let arr = prompt("Introduce números separados por comas:").split(",").map(Number);
    let multiplicado = arr.map(num => num * 2);
    alert("Arreglo multiplicado por 2: " + multiplicado.join(", "));
}
multiplicarPorDos();

// Ejercicios Intermedios

// 1. Ordenar alfabéticamente
function ordenarAlfabeticamente() {
    let arr = prompt("Introduce palabras separadas por comas:").split(",");
    let ordenado = arr.sort();
    alert("Ordenado alfabéticamente: " + ordenado.join(", "));
}
ordenarAlfabeticamente();

// 2. Ordenar números
function ordenarNumeros() {
    let arr = prompt("Introduce números separados por comas:").split(",").map(Number);
    let ordenado = arr.sort((a, b) => a - b);
    alert("Números ordenados: " + ordenado.join(", "));
}
ordenarNumeros();

// 3. Palabras más largas que "n" letras
function palabrasLargas() {
    let arr = prompt("Introduce palabras separadas por comas:").split(",");
    let n = parseInt(prompt("Introduce el número mínimo de letras:"));
    let largas = arr.filter(palabra => palabra.length > n);
    alert("Palabras con más de " + n + " letras: " + largas.join(", "));
}
palabrasLargas();

// 4. Unir en una cadena
function unirEnCadena() {
    let arr = prompt("Introduce palabras separadas por comas:").split(",");
    let cadena = arr.join(", ");
    alert("Cadena unida: " + cadena);
}
unirEnCadena();

// 5. Buscar el índice de un elemento
function indiceElemento() {
    let arr = prompt("Introduce elementos separados por comas:").split(",");
    let valor = prompt("Introduce el valor a buscar:");
    let indice = arr.indexOf(valor);
    alert("El índice del elemento es: " + indice);
}
indiceElemento();

// 6. Encontrar un elemento específico
function encontrarElemento() {
    let arr = [
        { clave: "nombre", valor: "Juan" },
        { clave: "nombre", valor: "Ana" },
        { clave: "nombre", valor: "Carlos" }
    ];
    let valor = prompt("Introduce el nombre a buscar:");
    let resultado = arr.find(obj => obj.valor === valor);
    alert("Elemento encontrado: " + JSON.stringify(resultado));
}
encontrarElemento();

// 7. Todos los números son mayores que "n"
function todosMayores() {
    let arr = prompt("Introduce números separados por comas:").split(",").map(Number);
    let n = parseInt(prompt("Introduce el número mínimo:"));
    let resultado = arr.every(num => num > n);
    alert("¿Todos los números son mayores que " + n + "? " + resultado);
}
todosMayores();

// 8. Algunos números son pares
function algunosPares() {
    let arr = prompt("Introduce números separados por comas:").split(",").map(Number);
    let resultado = arr.some(num => num % 2 === 0);
    alert("¿Algunos números son pares? " + resultado);
}
algunosPares();

// 9. Suma acumulada
function sumaAcumulada() {
    let arr = prompt("Introduce números separados por comas:").split(",").map(Number);
    let suma = arr.reduce((acc, num) => acc + num, 0);
    alert("Suma acumulada: " + suma);
}
sumaAcumulada();

// 10. Producto de todos los elementos
function productoElementos() {
    let arr = prompt("Introduce números separados por comas:").split(",").map(Number);
    let producto = arr.reduce((acc, num) => acc * num, 1);
    alert("Producto de todos los elementos: " + producto);
}
productoElementos();
