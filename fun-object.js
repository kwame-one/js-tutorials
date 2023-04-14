function Vehicle(name, speed) {
    this.name = name;
    this.speed = speed;
}

Vehicle.prototype.getName = function() {
    return this.name;
}

Vehicle.prototype.getSpeed = function() {
    return this.speed;
}

var honda = new Vehicle("honda", 123);
console.log(honda.name)
console.log(honda.speed)
console.log(honda.getName())
console.log(honda.getSpeed())