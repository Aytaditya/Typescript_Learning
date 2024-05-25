const user={name:"Aditya",
            age:21,
            email:"aditya@gmail.com",
            isActive:true,
        }

const createUser=({name:string,isPaid:boolean})=>{
   
}
createUser({name:user.name,isPaid:user.isActive})

//correct way to declare a function that returns an object
function createCourse():{name:string,price:number}{
    return {name:"React",price:0}
}

//correct way to declare a function that returns an object and has inputs as well
function makingCourse(name:string,price:number):{name:string,price:number}{
    return {name:name,price:price}
}

export{}