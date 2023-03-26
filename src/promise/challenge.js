import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
};

//llamar a la API igual que hacíamos con callbacks pero usando fetch. Fetch es en si mismo una promesa por eso podemos usar then y catch al llamar a la función fetchData

//lo comento para que no interfiera en la parte inferior
/*
fetchData (`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products)
    })
    .then(()=> {
        console.log('hola');
    })
    .catch(error => console.log(error));
*/

//-------------------------------------------------------

//llamamos a la URL para obtener los productos
fetchData(`${API}/products`)
    //ya tenemos la respuesta y la convertimos a un objeto json llamado products
    .then(response => response.json())
    .then(products => {
        //console.log(products);
        //usaremos fetchData para llamar a la primera posición del array products y ver su id
        return fetchData(`${API}/products/${products[0].id}`)
    })
    //ya tenemos la respuesta y la vamos a almacenar en un objeto llamado product
    .then(response => response.json())
    .then(product => {
        console.log(product);
        console.log(product.title);
        //usaremos el objeto producto para llamar a la categoría para saber su id
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    //ya tenemos la respuesta y la vamos a almacenar en un objeto llamado category
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(()=> console.log('Finally'));