function linearSearch (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i
    }
  }

  return undefined
}

function binarySearch (arr, target) {
  let start = 0,
    end = arr.length - 1

  while (start <= end) {
    let mid = start + (end - start) / 2

    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return undefined
}

module.exports = {
  linearSearch,
  binarySearch
}
