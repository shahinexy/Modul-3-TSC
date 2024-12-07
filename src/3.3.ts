{
    // Type guard

    // typeof
    const add = (param1: string | number, param2: string|number): string | number =>{
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2;
        }
        else{
            return param1.toString() + param2.toString()
        }
    }

    console.log(add(5,5));
    console.log(add('2',2));

    // 
}