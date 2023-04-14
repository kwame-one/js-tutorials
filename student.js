class Student {
    #name = undefined
    #dob = undefined
    #stage = undefined

    setName(newValue) {
        this.#name = newValue;
    }

    setDob(newValue) {
        this.#dob = newValue;
    }

    setStage(newValue) {
        this.#stage = newValue
    }

    getName() {
        return this.#name.toUpperCase();
    }

    getDob() {
        return this.#dob;
    }

    getStage() {
        return this.#stage;
    }

    getAge() {
        return Math.random() * 10;
    }
}


// let alex = new Student();
// let doe = new Student();
let kwame = new Student();
kwame.setName('sandy doe') // 
kwame.setDob("2022-10-11")
kwame.setStage("form 3")
console.log('accessing private field ', kwame.name);
console.log(kwame.getName())
console.log(kwame.getAge())
// alex.setStage("class 2")
// console.log(alex)