//object is collection of properties and behaviours(methods / functions)
{}
const laptop = {
    name: '',
    screenSize: '',
    keyboardType: '',
    processor: '',
    memory: '',
    harddrive: '',

    shutdown: function() {
        console.log(this.name, ' has shutdown')
    },

    reboot: function() {
        console.log(this.name, ' is rebooting')
    }
};

const mac = Object.create(laptop)
const hp = Object.create(laptop)

mac.name = 'M1'
hp.name = 'Pavilion'

mac.shutdown()
hp.shutdown()