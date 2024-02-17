const promise = new Promise(function (resolve, reject) {
    setTimeout(
        function () {
            let error = true;

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
        }, 1000
    );
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
    .finally(function () {
        console.log("promise done");
    }
    );
console.log(promise);
console.log("done");
console.log(promise);
    

