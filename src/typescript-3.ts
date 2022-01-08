//Interface
interface assignment{
    title: string;
    status: boolean;
    id: number;
}

//getname function

interface Person{
    firstname: string;
    lastname?:string
  }
function printName({ lastname, firstname }: Person):string{
    if (lastname) return lastname + "" + firstname;

    return firstname
}

let ans1 = printName({ firstname: "ayush" })
console.log(ans1);

//address interface

interface Address{
    houseNo: number;
    street: string;
    city: string;
    pin: number;
    state: string;
    country: string;
}

//Persondetails

interface PersonDetails{
    prefix?: string;
    phones: Array<number>;
    addresses: Array<string>;
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
}

//PhoneBook function
function PhoneBook({ email, firstname, lastname }: PersonDetails):Array<string> {
    let arr = []
    if (email) {
        arr.push(email) 
    }
    arr.push(firstname, lastname)
    return arr

}