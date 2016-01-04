var friends = {
    bill: {
        firstName: "Bill" ,
        lastName: "Bob" ,
        number: "234-543-3456",
        address: ['1234 Malberry Lane, Davie, FL 321234']
        },
    steve: {
        firstName: "Steve",
        lastName: "Joe",
        number: "313-232-4567",
        address: ["825 Holly Lane, Plantation, FL 33317"]
        }
    }

   var list = function(obj) {
    for(var prop in obj) {
    console.log(prop);
         }
    };
    list(friends);
