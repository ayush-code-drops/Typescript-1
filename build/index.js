var a = 5;
a = 7;
console.log(a);
let x;
x = true;
let list = [1, 2, 3];
list.push(4);
//another way of declaring a type
let arr;
arr = [1, 2, 3];
let tuple;
tuple = ["Indirapuri", 83];
//tuple has fixed length;
//Enums
// red green blue
//   1   2    3
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
//function return statement can be given a particular response
//void type is used when you don't want to return anything
function sum(a, b) {
    console.log(a + b);
}
let obj;
obj = { label: "button", color: "red", size: 4, optional: "optional and could skip" };
//annoymous/arrow func
let add = (a, b) => {
    return a + b;
};
function printName({ lastname, firstname }) {
    if (lastname)
        return lastname + "" + firstname;
    return firstname;
}
let ans = printName({ firstname: "ayush" });
console.log(ans);
