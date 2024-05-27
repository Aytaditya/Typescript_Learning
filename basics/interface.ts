interface user{
    readonly dbId: number;
    name: string;
    age: number;
    address?: string;
}

let aditya: user = {
    dbId: 1,
    name: "aditya",
    age: 18,
}