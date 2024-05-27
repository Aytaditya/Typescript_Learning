let score:number | string =33;
score="aditya" // changing score
// score=true error

function getdb(id:string | number){
    if(typeof id==='string'){
        return id.toUpperCase()
    }
    
}
console.log(getdb("aditya"))


const arr:number[] | string[]=[1,2,3,4,5] //this means can be either number array or string array
const arr2:number[] | string[]=["aditya","kumar","singh"] 
const arr3:(number | string)[]=[1,2,3,4,5,"aditya","kumar","singh"]  //mix of both 



// literal types
let pi:3.14=3.14
//pi=2.3  error