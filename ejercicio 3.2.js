const products = [
    {
        nombre: "Manzana",
        precio: 1500
    },
    {
        nombre: "Plátano",
        precio: 2550
    },
    {
        nombre: "Naranja",
        precio: 4100
    },
    {
        nombre: "Uva",
        precio: 2200
    },
    {
        nombre: "Sandía",
        precio: 5100
    },
    {
        nombre: "Mango",
        precio: 800
    },
    {
        nombre: "Pera",
        precio: 13000
    },
    {
        nombre: "Melocotón",
        precio: 2500
    }
];

const returnHighPriceProduct = (array) => {
    let objectHighPrice = array[0];
    //  se puede inicializar con cualqueir objeto del array, se parece al ejerciico de pseint del maximo, 
    array.forEach(element => {
        if (element.precio > objectHighPrice.precio) {
            objectHighPrice = element;
        }
    });
    return objectHighPrice;
};

console.log(returnHighPriceProduct(products));
