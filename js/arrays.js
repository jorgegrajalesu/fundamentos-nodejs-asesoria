// sintaxis del array 

let marcasAuto = [];//estaria declarando un array vacío

const marcasAuto2 = [
    'Renault',
    'Mazda',
    'Toyota',
    'Ferrari',
    'Mercedes'

];

// mostrar todas las marcas de los autos
console.log(marcasAuto2);

// mostrar la primera de marca de autos
console.log('la primera marca de autos: ' , marcasAuto2[0]);

// contar los elementos del array
console.log('Cuántos son los elementos del array: ' , marcasAuto2.length);

// mostrar el último elemento del array
let ultimaMarca = marcasAuto2[marcasAuto2.length - 1];
console.log('La última marca es: ' , ultimaMarca);

// con el metodo PUSH para agregar un elemento al array
let nuevaMarca = marcasAuto2.push('Ford');
console.log(marcasAuto2 , nuevaMarca);

// implementar al principio del array la marca BMW

let marcaPrincpio = marcasAuto2.unshift('BMW');
console.log(marcaPrincpio , marcasAuto2 );


