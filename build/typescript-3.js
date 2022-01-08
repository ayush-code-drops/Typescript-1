function printName({ lastname, firstname }) {
    if (lastname)
        return lastname + "" + firstname;
    return firstname;
}
let ans1 = printName({ firstname: "ayush" });
console.log(ans1);
//PhoneBook function
function PhoneBook({ email, firstname, lastname }) {
    let arr = [];
    if (email) {
        arr.push(email);
    }
    arr.push(firstname, lastname);
    return arr;
}
