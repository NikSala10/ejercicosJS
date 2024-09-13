const books = [
    {
        title: "luis el 2",
        author: "manuel elkin",
        age: 2005,
        pages: 480,
    },
    {
        title: "la maria",
        author: "ignacio baladan",
        age: 1999,
        pages: 220,
    },
    {
        title: "El Viaje Inesperado",
        author: "Carlos Ruiz",
        age: 2010,
        pages: 350,
    },
    {
        title: "La Sombra del Viento",
        author: "Javier Marías",
        age: 2002,
        pages: 480,
    },
    {
        title: "Cien Años de Soledad",
        author: "Gabriel García Márquez",
        age: 1967,
        pages: 150,
    },
    {
        title: "El Amor en los Tiempos del Cólera",
        author: "Gabriel García Márquez",
        age: 1985,
        pages: 120,
    },
];

const returnFilterBooks = (array) =>  {
  let newArrayBooks = [];
    array.forEach(element => {
        if ((element.age > 2000) && (element.pages > 300)) {
         newArrayBooks.push(element);
            
        }
    });
    return newArrayBooks;
};

console.log(returnFilterBooks(books));
 