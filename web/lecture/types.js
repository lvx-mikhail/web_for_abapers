var length = 666;                                    // Number
var Name = "jason bourne";                           // String

var x1 = { firstName: "jason", lastName:"bourne"};    //Object
console.log(typeof x1);



var x2 = 3 + "Pigs";                                 //String
console.log(typeof x2);




var x3 = 600 + 60 + 6 + " Satan ";                   //666 Satan
console.log(typeof x3);
var x4 =" Satan "  + 600 + 60 + 6;                   //Satan 600606
console.log(typeof x4);








var x5 = ["Saab", "Volvo", "BMW"];                //Array
console.log(typeof x5);




var x6;
console.log(typeof x6); //undefined
var x7=null;
console.log(typeof x7); //object

/*console.log(typeof x8); //undefined

console.log(x7 == x8); //true

console.log(x7 === x8); //false*/

console.log(Math.min(0, 150, 30, 20, -8, -200)); // returns -200


function rand(min,max){
    return Math.floor(Math.random*(max-min))+min;
}