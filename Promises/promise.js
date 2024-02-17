
const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Timeout");
        resolve(1000);
    }, 1000);
})

promise.then(function (value) {
    console.log("promise resolved");
    console.log(value);
})