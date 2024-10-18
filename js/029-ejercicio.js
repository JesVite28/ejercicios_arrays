function agruparPorEdades(arreglo) {
    let grupos = {};
    for (let i = 0; i < arreglo.length; i++) {
        let decada = Math.floor(arreglo[i].edad / 10) * 10;
        if (!grupos[decada]) {
            grupos[decada] = [];
        }
        grupos[decada].push(arreglo[i]);
    }
    return grupos;
}


let personas = [{ nombre: 'Juan', edad: 30 }, { nombre: 'Ana', edad: 25 }, { nombre: 'Carlos', edad: 35 }, { nombre: 'Lucía', edad: 22 }];
console.log(agruparPorEdades(personas));

