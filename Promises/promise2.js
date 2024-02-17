const promise = new Promise(function (resolve, reject) {
    let error = true;

    // setTimeout(function () {
    //     console.log("hei");
    // }, 1000);

    if (!error) {
        resolve(
            {
                username: "Arijit",
                password: "123",
            }
        );
    } else {
        reject("error occured");
    }
})


promise
    .then(
        function (user) {
            return user.username;
        }
    )
    .then(
        function (username) {
            console.log(username);
        }
    )
    .catch(
        function (error) {
            console.log(error);
        }
)
    
// console.log("done");
    

