const promise = new Promise((resolve,reject)=>{
    resolve('hey')
})

const cows = 12;

const countCows = new Promise((resolve,reject)=>{
    if (cows > 10) {
        resolve(`We have ${cows} cows in the farm`);
    } else {
        reject(`There are not enough cows in the farm`);
    }
})

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(()=>console.log('Finally'));