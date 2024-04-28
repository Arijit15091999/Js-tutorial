function iterator(array) {
    let index = 0

    function hasNext() {
        return index >= 0 && index < array.length
    }

    function next() {
        if (index > array.length) throw new Error('index out of bounds');
        let element = array[index++]
        return element
    }

    return { hasNext, next }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let { hasNext, next } = iterator(arr)

while (hasNext()) {
    console.log(next())
}