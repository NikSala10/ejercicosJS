const tasks = [
    {
        id: 1,
        description: "Hacer la compra",
        state: "pendiente"
    },
    {
        id: 2,
        description: "Limpiar la casa",
        state: "completada"
    },
    {
        id: 3,
        description: "Estudiar para el examen",
        state: "pendiente"
    },
    {
        id: 4,
        description: "Pagar las facturas",
        state: "completada"
    },
    {
        id: 5,
        description: "Preparar la cena",
        state: "pendiente"
    }
];

const returnNewArrayFilterTasks = (array) =>  {
    let newArrayTasks = [];
    array.forEach(element => {
        if ((element.id % 2) != 0) {
            element.state = "completada";
            newArrayTasks.push(element);
        }
    });
    return newArrayTasks;
};

console.log(returnNewArrayFilterTasks(tasks));
