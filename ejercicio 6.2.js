const fruits = [
     {
        name: "mora"

     },
     {
        name: "pera"

     },
     {
        name: "fresa"

     },
     {
        name: "mora"

     },
     {
        name: "pera"

     },
     {
        name: "mora"

     },

];

const newObjectFruits = (array) =>   {
    let sumFruits = {};
        array.forEach(element => {
            const fruitName = element.name;
            if (sumFruits[fruitName]) {
                sumFruits[fruitName] += 1;
            } else {
                sumFruits[fruitName] = 1;
            }
    });
    return sumFruits;
};

console.log(newObjectFruits(fruits));

