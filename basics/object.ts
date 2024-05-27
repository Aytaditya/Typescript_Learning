const user={name:"Aditya",
            age:21,
            email:"aditya@gmail.com",
            isActive:true,
        }



//correct way to declare a function that returns an object
function createCourse():{name:string,price:number}{
    return {name:"React",price:0}
}

//correct way to declare a function that returns an object and has inputs as well
function makingCourse(name:string,price:number):{name:string,price:number}{
    return {name:name,price:price}
}

type User={name:string,age:number,email:string,isActive:boolean}
function helloUser(user:User):void{
    console.log(`Hello ${user.name}`)
}
helloUser({name:"Aditya",age:21,email:"",isActive:true}) //passing an object of type User

export{}