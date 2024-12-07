{
    // Polymorphism

    class Person {
        getSleep(){
            console.log(`People sleep for 8 hours per day`);
        }
    }

    class Studnet extends Person {
        getSleep(){
            console.log(`Student sleep for 7 hours per day`);
        }
    }

    class Developer extends Person {
        getSleep(){
            console.log(`Developer sleep for 6 hours per day`);
        }
    }

    const getSleepHours = (params: Person) =>{
        params.getSleep()
    }

    const person = new Person()
    const student = new Studnet()
    const developer = new Developer()

    getSleepHours(person)
    getSleepHours(student)
    getSleepHours(developer)


    // =============

    class Shape {
        getArea(): number {
            return 0
        }
    }

    class Circle extends Shape {
        radius : number;

        constructor(radius: number){
            super()
            this.radius = radius
        }

        getArea(): number {
             return Math.PI * this.radius * this.radius;
        }
    }

    class Reactangle extends Shape {
        height : number;
        width : number;

        constructor(height: number, width: number){
            super()
            this.height = height
            this.width = width
        }

        getArea(): number {
             return  this.height * this.width;
        }
    }

    const getShapeArea = (param: Shape) =>{
        console.log(param.getArea());
    }

    const shape1 = new Shape()
    const shape2 = new Circle(10)
    const shape3 = new Reactangle(30, 20)

    getShapeArea(shape1)
    getShapeArea(shape2)
    getShapeArea(shape3)

    //
}