class Student {

    #name = undefined
    #dob = undefined
    #stage = undefined

    constructor(name, dob, stage) {
        // this.#name = name;
        // this.#dob = dob;
        // this.#stage = stage;

        this.setName(name)
        this.setStage(stage)
        this.setDob(dob)
    }

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
        return this.#name;
    }

    getDob() {
        return this.#dob;
    }

    getStage() {
        return this.#stage;
    }
}


let kwame = new Student('kwame', '2011-11-01', 'class 5');
console.log(kwame.getName());
kwame.setName('new kwame name')
console.log(kwame.getName());