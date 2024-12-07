{
    // OOP - Class

    class Animal {
        // public name : string;
        // public speacise : string;
        // public sound: string


        // === Parameter Properties  =====
        constructor(public name: string, public speacise: string, public sound: string){
            // this.name = name;
            // this.speacise = speacise;
            // this.sound =  sound
        }

        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);
        }

    }

    const dog = new Animal("German bhai", "dog", "Ghew Ghew")

    const cat = new Animal("Japanise Catu", "Cat", "Mew Mew")

         
    //
}