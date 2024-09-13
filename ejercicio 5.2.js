const students = [ 
     {
        name: "Aice",
        grade: 4
     },
     {
        name: "Emma",
        grade: 5
     },
     
     {
        name: "Louis",
        grade: 3
     },
     
     {
        name: "Rachel",
        grade: 4
     },
     
     {
        name: "Lex",
        grade: 2
     },
];

const returnMediaGrade = (array) =>  {
    let resultGrade = 0;
    array.forEach(element => {
        resultGrade = resultGrade + element.grade
    });
    return resultGrade/array.length
};

console.log("La media de las calificaciones de los estudiantes es: " + returnMediaGrade(students));


