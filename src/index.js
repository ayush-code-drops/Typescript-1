var a = 5;
a = 7;
console.log(a);
var x;
x = true;
var list = [1, 2, 3];
list.push(4);
//another way of declaring a type
var arr;
arr = [1, 2, 3];
var tuple;
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
var same = Color;
console.log(same);
//function return statement can be given a particular response
//void type is used when you don't want to return anything
function sum(a, b) {
    console.log(a + b);
}
var obj;
obj = { label: "button", color: "red", size: 4, optional: "optional and could skip" };
//annoymous/arrow func
var add = function (a, b) {
    return a + b;
};
function printName(_a) {
    var lastname = _a.lastname, firstname = _a.firstname;
    if (lastname)
        return lastname + "" + firstname;
    return firstname;
}
var ans = printName({ firstname: "ayush" });
console.log(ans);
//Union type
//for giving multiple types to a value
var value;
var val;
