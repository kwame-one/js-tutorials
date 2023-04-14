function makeApiCall() {
    console.log('making api call')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('api returned response')
            // reject('api did not return right response')
        }, 5000)
    })
}

(async () => {
    try {
        const response = await makeApiCall();
        console.log(response);
        console.log(response.toUpperCase());
        console.log(response.toLowerCase());
        console.log('something')
    } catch(err) {
        console.log(err);
    }
})()