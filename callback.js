function sleep(name) {
    console.log(name, 'is now sleeping')
}

function eat(name, method, milli) {
    console.log(name, 'is now eating')
    setTimeout(() => {
        method(name)
    }, milli);
    
}

eat('kwame', sleep, 5000)
eat('alex', sleep, 1000)
eat('doe', sleep, 100)


