{
    // Type guard

    // typeof guard
    type Alphaneumaric = string | number;
    const add = (param1: Alphaneumaric, param2: Alphaneumaric): Alphaneumaric =>{
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2;
        }
        else{
            return param1.toString() + param2.toString()
        }
    }

    console.log(add(5,5));
    console.log(add('2',2));


    // in guard
    type NormalUser = {
        name : string
    }

    type Admin = {
        name: string,
        role: "admin"
    }

    const getUser = (user: NormalUser | Admin) =>{
        if('role' in user) {
            return `My name is: ${user.name}, Role is: ${user.role}`
        }
        else{
            return `My name is: ${user.name}`
        }
    }

    const normalUser : NormalUser ={
        name: "Rifat"
    }
    console.log(getUser(normalUser));

    const admin : Admin ={
        name: "Shahin",
        role: "admin"
    }
    console.log(getUser(admin));
    

    // 
}