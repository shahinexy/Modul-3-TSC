{
    // Abstraction

    // Abstraction interface
    interface Vehicle {
        startEngine(): void;
        stopEngine(): void;
    }

    class Car implements Vehicle{
        startEngine(): void {
            console.log('I am starting the car');
        }

        stopEngine(): void {
            console.log('car is stoping');
        }

        test(){
            console.log('I am just testing');
        }
    }

    const toyotaCar = new Car();
    toyotaCar.startEngine


    //  ========= abstract class  =======
    abstract class Vehicle2 {
        abstract startEngine(): void;

        abstract stopEngine(): void;

        test(){
            console.log('I am just testing');
        }
    }

    class Honda extends Vehicle2{
         startEngine(): void {
            console.log('I am starting the car');
        }

        stopEngine(): void {
            console.log('car is stoping');
        }
    }

    const hondaCar = new Honda()
    hondaCar.stopEngine()

    //
}