const estudiantes =[
    {
       nombre: "maria",
       calificacion: 4
    },

     {
       nombre: "manu",
       calificacion: 5
     },

      {
       nombre: "alex",
       calificacion: 3
      },

]




// function returnStudent(array, nombre) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].nombre == nombre) {
//             console.log(array[i]);
//             return;  
//         }
//     }
//     console.log(null);  
// }

// returnStudent(estudiantes,"manu")



// en la CLASE

const findStudent = (array, name) =>  {
let studentFound = null;
    array.forEach(student => {
        if (student.name === name) studentFound = student;
        
    });
    return studentFound;
};

console.log(findStudent(estudiantes, 'manu'));



// const findStudent = (array, name) =>  {
//     let studentFound = '';
//         array.forEach(student => {
//             if (student.name === name) {
//                 studentFound = student;
//             } 
//         });
    
//         return studentFound;
//     };
    
//     console.log(findStudent(estudiantes, 'manu'));