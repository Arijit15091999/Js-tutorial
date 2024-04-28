function process() {
    let i = 0

    function increment() {
        i += 1
        return i
    }

    function defaultValue() {
        i = 0
        return i
    }

    return {
        increment,
        defaultValue
    }
}
let { increment, defaultValue } = process();
console.log(increment);