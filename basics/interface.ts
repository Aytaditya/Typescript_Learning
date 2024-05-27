interface user{
    readonly dbId: number;
    name: string;
    age: number;
    address?: string;
    ready():string  // function that will return string
}
//interface can be reopened 
interface user{
    githubToken:string
}

interface admin extends user{   //admin will have all the properties of user
    admin:boolean
}

let aditya: user = {
    dbId: 1,
    name: "aditya",
    age: 18,
    ready:()=>{
        return "ready"
    },
    githubToken:"aditya123"
}

