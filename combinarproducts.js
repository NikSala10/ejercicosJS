
const peopleNameAge = [
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
]

const peopleSecondNameAge =   [
    {
        nombre: "Luisa Gomez",
        edad: 17
      },

       {
        nombre: "Gina Perez",
        edad: 29
       },

       {
        nombre: "Luz Maria Alzate",
        edad: 60
       }

]

function newArrayPeople(arrayPeopleFirst,arrayPeopleSecond) {
    const newPeople = arrayPeopleFirst.concat(arrayPeopleSecond);
    console.log(newPeople);
}

newArrayPeople(peopleNameAge,peopleSecondNameAge)