function createPromise (data) {
  return new Promise(function exec (resolve, reject) {
    setTimeout(function () {
      resolve(data)
    }, 5000)
  })
}
const p1 = createPromise(1000)
const p2 = createPromise(1000)
const p3 = createPromise(1000)

Promise.all([p1, p2, p3]).then(function (values) {
    console.log(values);
})
