// function createPromise(max) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * max);

//             if (num % 2 == 0) {
//                 resolve(num);
//             } else {
//                 reject(num);
//             }
//         }, 3000)
//     });
// }

// let x = createPromise(5);

// function createPromise(max) {
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < 1000000000; i++) {}
//         let num = Math.floor(Math.random() * max)

//         if (num % 2 == 0) {
//             resolve(num)
//         } else {
//             reject(num)
//         }

//     });
// }

// let x = createPromise(5);

function createPromise(...num) {
    return new Promise(function executor(resolve, reject) {
        let length = num.length;
        if (length % 2 == 0) {
            resolve({ msg: "success" });
        } else {
            reject({ msg: "failure" });
        }
    })
}

let x = createPromise(1, 2, 3, 4, 5, 6, 7);
x.then(function onFullfillment1(value) {
    console.log("onFullfillment:- ", value);
}, function onFailure1(value) {
    console.log("onFailure:- ", value);
})
x.then(function onFullfillment2(value) {
    console.log("onFullfillment:- ", value);
}, function onFailure2(value) {
    console.log("onFailure:- ", value);
})