let guardar
const products =[
    {
       nombre: "Reloj",
       precio: 89
    },

     {
       nombre: "Diadema",
       precio: 30
     },

      {
       nombre: "Audifonos",
       precio: 10
      },

      {
        nombre: "Estuche para gafas",
        precio: 12
     },
 
      {
        nombre: "Termo",
        precio: 120
      },
 
       {
        nombre: "Perfume",
        precio: 56
       },
 

]

// function newArrayProducts(array) {
//     const newProducts = array.slice();
//     for (let i = 0; i < array.length; i++) {

//         for (let j = 0; j < array.length; j++) {
//             if (array[i].precio < array[j].precio) {
//                 guardar = array[j].precio
//                 array[j].precio = array[i].precio
//                 array[i].precio = guardar
                
//             }
//         }
//     }
//     console.log(newProducts);
//     return newProducts
// }


// newArrayProducts(products)

// EN LA CLASE


const sortProducts = (array) =>  {
  const newArrayProducts = array.sort((a,b) =>  {
    return a.precio - b.precio;
  });
  
  return newArrayProducts;
};

console.log(sortProducts(products));
