function download(url) {
    return new Promise(function executor(resolve, reject) {
        setTimeout(function() {
            console.log('data downloaded from ', url)
            const data = 'dummyData'
            resolve(data)
        })
    })
}
let x = download("www.example.com");
x.then(function fullfillmentHandler(value) {
    console.log(value);
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("done")
        }, 5000);
    })
}).then(function(data) {
    // this .then will only execute after the promise has been resolved
    console.log(data);
})