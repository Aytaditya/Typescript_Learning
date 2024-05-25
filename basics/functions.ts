function add(a:number,b:number){
    return a+b;
}
console.log(add(4,5))


const adi=(inp:string)=>{
    console.log("Hello Aditya ",inp)
}
adi("Aryan")


//correct way to declare function
function multiply(a:number,b:number):number{
    return a*b;
}
console.log(multiply(4,5))

const rtn=(s:string):string=>{
    return "I am Batman"
}

const heros=['Batman','Superman','Flash']

heros.map((hero):string=>{
   return  `Hero is ${hero}`
})

//void when function does not return anything
function hii(name:string):void{
    console.log("Hello ",name)
}
hii("Aditya")

//never when function does not return anything and throws an error
function handleError(msg:string):never{
    throw new Error(msg)
}


export {}