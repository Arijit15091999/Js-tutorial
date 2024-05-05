function createPromise (data) {
  return new Promise(function exec (resolve, reject) {
    setTimeout(function () {
      try {
        resolve(data)
      } catch (e) {
        reject(e)
      }
    }, 5000)
  })
}

async function promiseHandler () {
  let value = await createPromise(1000)
  console.log(value)
  return value
}

let value = promiseHandler()
console.log(value)

console.log('done')
