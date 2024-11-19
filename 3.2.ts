{
    // OOP - inheritance
    class Student {
        public name : string;
        public age : number;
        public address: string


        constructor( name: string,  age: number,  address: string){
            this.name = name;
            this.age = age;
            this.address =  address
        }

       studentData(){
        console.log(`Student Namea: ${this.name}`)
       }

    }

    const student1 = new Student('Sakibut', 22, "Adamjee")


    //
}