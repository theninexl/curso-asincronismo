function sum(num1,num2){
    return num1+num2;
}

function calc(num1,num2,callback) {
    return callback(num1,num2);
}

console.log(calc(2,2,sum));
//llamar a la función de suma a través de un callback permitiría crear, por ejemplo, diferentes funciones de suma, resta, multiplicacion, a las que se puede llamar desde una sola invovacion en la que metes las cifras y la operacion que quieres hacer
//-------------------------------


setTimeout(()=>{
    console.log('Hola javascript');
},2000);

//------------------------------

function greeting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(greeting,2000,'David');