//objects

//three ways of creating objects
/**
 * 1. object initiazer
 * 2. function
 * 3. class syntax
 */

const Vehicle = {
    name: '',
    speed: 0,

    getName: function() {
        return this.name;
    },

    getSpeed: function() {
        return this.speed;
    },

    getSpeed2(){
        return this.speed;
    }
}

const honda = Object.create(Vehicle);
honda.name = 'Honda';
honda.speed = 120;
console.log(honda.getName())
console.log(honda.getSpeed())
console.log(honda.getSpeed2())