function* getNextElement() {
    console.log('I am in the generator')
    yield 1
    yield 2
    console.log('somewhere in the generator')
    yield 4
    yield 5
}
let iter = getNextElement()

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())