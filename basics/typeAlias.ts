type Point={
    x:number,
    y:number
}
//now we can use this type to declare variables
const coordinates=(point:Point):void=>{
    console.log(`Coordinates are ${point.x} and ${point.y}`)
}
coordinates({x:4,y:5})


//type alias for a function returning a string and taking an object as input
type User={name:string,age:number,email:string,isActive:boolean}

const search=(user:User):string=>{
    return `User is ${user.name}`
}
console.log(search({name:"Aditya",age:21,email:"",isActive:true}))


type u={
    //readonly means we cannot change the value of _id
    readonly _id:string,
    name:string,
    email:string,
    isActive:boolean,
    creditCardDetails?:string
    //? means creditCardDetails is optional and may or may not be present
}

let adityaUser:u={
    _id:"123",
    name:"Aditya",
    email:"",
    isActive:true
}

adityaUser.name="Aditya Aryan" //allowed changing name as it is not readonly

//adityaUser._id="235"  not allowed changing _id as it is readonly

