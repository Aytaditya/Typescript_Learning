function detectType(val:number | string){
    if(typeof val==="string"){
        return val.toUpperCase();
    }
     return val+3

}


function provideId(id:string | null):string{
    if(!id){
        return "No id provided"
    }
    else{
        return `Id provided is ${id}`
    }
}

interface user{
    name:string,
    email:string
}
interface admin{
    name:string,
    email:string,
    isAdmin:boolean
}

const ifAdmin=(account:user | admin):boolean=>{
    if("isAdmin" in account){
        return account.isAdmin
    }
    else return false
}

// instance of can only be used with new keyword 
function logValue(x:Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString())
    }
    else{
        console.log(x.toUpperCase())
    }
}


type fish={
    swim:()=>void
}
type bird={
    fly:()=>void
}
function move(animal:fish | bird):animal is fish{
     return (animal as fish).swim() !== undefined
    
}


// discriminated unions

interface Circle{
    kind:"circle",
    radius:number
}
interface Square{
    kind:"square",
    side:number
}
interface Rectangle{
    kind:"rectangle",
    height:number,
    width:number
}
type shape=Circle | Square 

function getShape(shape:shape):number{
    if(shape.kind==="circle"){
        return shape.radius
    }
    else{
        return shape.side
    }
}

type shape1=Circle | Square | Rectangle

function getArea(shape:shape1):number{
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side ** 2
        case "rectangle":
            return shape.height * shape.width
        default:
            const _defaultshape:never=shape
            return _defaultshape
    }
}