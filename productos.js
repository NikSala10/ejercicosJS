const products =[
    {
       nombre: "fresa",
       precio: 18
    },

     {
       nombre: "banano",
       precio: 60
     },

      {
       nombre: "sandia",
       precio: 70
      },

]
//  en la CLASE: 

const filterProducts = (array) =>  {
    let newArray =  []
    array.forEach(element => {
        if (element.precio > 50) {
            newArray.push(element);
        }
    });
    return newArray;
}

console.log(filterProducts(products));
 

// lo gice yo -->

// function newArrayPrice(array) {
//     const newProducts = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].precio > 50) {
//             newProducts.push(array[i].nombre)
//         }
        
//     }
//     console.log("Los productos con un precio mayor a 50 son:" + newProducts);
    
// }

// newArrayPrice(products)

