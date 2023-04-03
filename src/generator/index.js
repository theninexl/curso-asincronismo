/*el generator nos permite generar una serie de pasos dentro de una iteración a los que podremos acceder de manera controlada. Para señalar una función como generator usamos ese asterisco al final de la palabra function*/
function* gen(){
    yield 1;
    yield 2;
    yield 3;
}
/*guardamos el generador en una variable para poder acceder a el*/
const g = gen();

/*con la palabra next lo que hacemos es iterar sobre el siguiente paso dentro de la función generadora.*/
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

/*iteracion dentro de un array*/

function* iterate(array){
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Oscar','Ana','Lucia','Juan']);

console.log(it.next());
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
