const student = {
    name: '',
    dob: '',
    stage: '',

    setName(newValue) {
        this.name = newValue;
    },

    setDob(newValue) {
        this.dob = newValue;
    },

    setStage(newValue) {
        this.stage = newValue
    },

    getName() {
        return this.name
    },

    getDob() {
        return this.dob;
    },

    getStage() {
        return this.stage;
    }
}