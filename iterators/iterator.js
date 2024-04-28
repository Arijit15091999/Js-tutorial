arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

let iterator = arr[Symbol.iterator]()

while (true) {
    const { value, done } = iterator.next()
    if (done) break
    console.log(value)
}