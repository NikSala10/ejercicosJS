const tasks = [
    {
        id: 1,
        description: "Complete the project report"
    },
    {
        id: 2,
        description: "Buy groceries for the week"
    },
    {
        id: 1,
        description: "Schedule a meeting with the team"
    },
    {
        id: 4,
        description: "Prepare presentation for the conference"
    },
    {
        id: 2,
        description: "Finish reading the book"
    },
    {
        id: 6,
        description: "Clean the house"
    },
    {
        id: 7,
        description: "Call the plumber to fix the sink"
    },
    {
        id: 4,
        description: "Send out invitations for the event"
    }
];

// const removeIdTasks = (array) =>  {
//     let idDuplique = new Set();
//     const newArrayTaskIdOnly = [];
    
//     array.forEach(element => {
//         if (!idDuplique.has(element.id)) {
//             idDuplique.add(element.id);
//             newArrayTaskIdOnly.push(element);
//         }
//     });
//     return newArrayTaskIdOnly;
// };

// console.log(removeIdTasks(tasks));


const removeIdTasks = (array) => {
    let idSeen = [];
    const newArrayTaskIdOnly = [];

    array.forEach(element => {
        if (!idSeen.includes(element.id)) {
            idSeen.push(element.id);
            newArrayTaskIdOnly.push(element);
        }
    });

    return newArrayTaskIdOnly;
};

console.log(removeIdTasks(tasks));

