{
    // instancesof
    class Aniaml {
        name: string;
        species: string;

        constructor( name: string, species: string){
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log('Animal is making sound');
        }
    }

    class Dog extends Aniaml{
        constructor(name: string, species: string){
            super(name,species)
        }

        makeBark(){
            console.log("I'm barking");
        }
    }

    class Cat extends Aniaml{
        constructor(name: string, species: string){
            super(name,species)
        }

        makeMeaw(){
            console.log("I'm meawing");
        }
    } 

    // === smart way to use ====
    // const isDog = (animal: Aniaml): animal is Dog =>{
    //     return animal instanceof Dog
    // }

    const isCat = (animal: Aniaml): animal is Cat =>{
        return animal instanceof Cat
    }

    // ==========

    const getAnimal = (animal: Aniaml) =>{
        // instancesof
        if(animal instanceof Dog){
            animal.makeBark()
        } 
        else if(isCat(animal)){
            animal. makeMeaw
        }
        else{
            animal.makeSound
        }
    }

    const dog = new Dog('Mr. Dog', 'Dog')
    const cat = new Dog('Mr. Cat', 'Cat')

    getAnimal(dog)


    //
}