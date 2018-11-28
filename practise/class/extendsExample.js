class Vechile {

    constructor() {
        this.distance = [];
        this.mode = -1;
    }

    start() {
        console.log('vechile started');
    }
    
    drive() {
        console.log('setting up the vechile drive mode');
        this.start();
        this.engineInternal();
        console.log('vechile is now in drive mode');
    }

    driveDistance(x) {
        this.distance.push(x);
        return this.distance.reduce((acc, value) => acc + value, 0);
    }

    engineInternal() {
        return 'Vechile Engine';
    }
}


class Car extends Vechile {

    constructor() {
        super();
        this.wheels = 4;
    }

    start() {
        console.log('unlocked the car Mode');
    }

    drive() {
        console.log('setting up the car drive Mode');
        super.drive();
        console.log('set your gears');
    }



    driveDistance(x) {
        this.distance.push(x);
        return this.distance.reduce((acc, value) => acc + value, 0);
    }

    engineCar() {
        return 'Car Engine';
    }

}

function start() {
    console.log('global start');
}

const audi = new Car();
const vechile = new Vechile();
console.log('test 1');
audi.drive();
console.log('test 2');
vechile.drive();
console.log('test 3');
console.log(vechile.driveDistance(10));
console.log('test 4');
console.log(audi.driveDistance(20));
console.log('test 5');
console.log(audi.driveDistance(20));
console.log(audi.distance, vechile.distance);

