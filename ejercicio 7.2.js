const transaccitions = [
     {
        category: "servicio",
        monto: 3200000
     },
     {
        category: "hogar",
        monto: 1200000
     },
     {
        category: "servicio",
        monto: 250000
     },
     {
        category: "hogar",
        monto: 567800
     },
];

const returnTotalMontoCategory = (array) =>  {
   // const newArrayCategories = [];
   let sumTotalCategories = [ {
      category: "servicio",
      monto: 0
   },
   {
      category: "hogar",
      monto: 0
   }];
    
   array.forEach(element => {
      if (element.category === "servicio") {
         sumTotalCategories[0].monto += element.monto
         
      } else  {
         sumTotalCategories[1].monto += element.monto 
      }
   });
    return sumTotalCategories;
};

console.log(returnTotalMontoCategory(transaccitions));


//  array.forEach(element => {
   //     if (!newArrayCategories.includes(element.category) ) {
   //       newArrayCategories.push(element.category)
   //     }
   //  });

   //  array.forEach(element => {
   //    if (element) {
         
   //    }
   //  });