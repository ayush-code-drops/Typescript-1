var a = 5;
a = 7
console.log(a)

let x: boolean;
x = true;

let list: number[] = [1, 2, 3]

list.push(4)



//another way of declaring a type
let arr: Array<number>
arr = [1, 2, 3]

let tuple: [String, Number];
tuple = ["Indirapuri", 83]

//tuple has fixed length;

//Enums
// red green blue
//   1   2    3

enum Color{
   red,
    green,
    blue 
}

let same = Color
console.log(same)


//function return statement can be given a particular response

//void type is used when you don't want to return anything
function sum(a :number, b:number): void{
    console.log(a + b);
}

//Object
//Interface

interface Buttonprops{
    label: string;
    color: string;
    size: number;
    optional?:string
    
}

let obj: Buttonprops;

obj = { label: "button", color: "red", size: 4,optional:"optional and could skip"};

  //annoymous/arrow func

let add = (a: number, b: number) :number => {
    return a + b;
}



//getName Function 
interface Person{
    firstname: string;
    lastname?:string
  }
function getName({ lastname, firstname }: Person):string{
    if (lastname) return lastname + "" + firstname;

    return firstname
}



let ans = getName({ firstname: "ayush" })
console.log(ans);

//Interface Address
interface Address{
    houseNo: number;
    street: string;
    city: string;
    pin: number;
    state: string;
    country: string;
}
//Union type
//for giving multiple types to a value
let value: number | string | null;

let val: "ab" | "as" | "at" | "ac"

//Types

type networkRequest = {
    state:"loading"
}

type networkFailed = {
    state: "failed",
    err:string
}

type networkSuccess = {
    state: "success",
    response: {
        title: string,
        status: boolean,
        id:number
    }
}

type networkState= networkRequest | networkSuccess | networkFailed;

