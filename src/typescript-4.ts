interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}
  
function retriveType({ type }: User) {
    console.log(type);
    
    return type
}


