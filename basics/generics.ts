function identity<Type>(num:Type):Type {
    return num;
}
identity(5); // 5
identity("hello"); // "hello"
identity(true); // true

// once a argument goes through it, its type gets locked and is same as return type


// GENERICS IN ARRAY 
function identity1<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
} // taking array as in put 


// arrow function
const adityaa=<Type>(arb:Type):Type=>{
    return arb
}