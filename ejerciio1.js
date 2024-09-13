let suma = 0
const personasEdades = [
     {
        nombre: "Maria Antonieta de la Rosa",
        edad: 18
     },

      {
        nombre: "Silvia Maria Cortes",
        edad: 19
      },

       {
        nombre: "Manuela Solarte Males",
        edad: 29
       },

       {
        nombre: "Luisa Gomez",
        edad: 17
      },

       {
        nombre: "Gina Perez",
        edad: 29
       }

]

// function returnAge(array) {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i].edad;
//         suma = suma + element
        
//     }
//     console.log("La suma total de las edades de las personas es: " + suma);   
//     return suma
// }
// returnAge(personasEdades)


// en clase

// const sum = (array) => {
  let sumTotal = 0
//   for (let i = 0; i < array.length; i++) {
//     sumTotal = sumTotal + array[i].age; 
//   }
//   return sumTotal;
// }

// console.log(sum(personasEdades));

array.forEach(miniObject => {
  sumTotal = sumTotal + miniObject.age
});

// sumTotal += miniObject.age (otra forma de hacerlo, vas a sumarle tal cosa)

return sumTotal;


console.log(sum(personasEdades));