function makeApiCall() {
    console.log('making api call')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('api returned response')
            // reject('api did not return right response')
        }, 5000)
    })
}

makeApiCall()
.then((result) => {
    console.log(result)
    return result;
})
.then((result) => {
    console.log(result.toUpperCase())
    return result
})
.then((result) => console.log(result.toLowerCase()))

.catch((e) => console.log(e))
.finally(() => {
    console.log('something')
})


