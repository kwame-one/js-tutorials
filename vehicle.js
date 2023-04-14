class  Vehicle {
    name = ''
    speed = 0

    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    setName(name) {
        this.name = name
    }

    getSpeed() {
        return this.speed;
    }

    getName() {
        return this.name;
    }
}

// var honda = new Vehicle('honda', 111);
var honda = new Vehicle("corolla", 20);
console.log(honda.getName())
console.log(honda.getSpeed())
honda.setName('honda')
honda.setSpeed(123)
console.log(honda.getName())
console.log(honda.getSpeed())