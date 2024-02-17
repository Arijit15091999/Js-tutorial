const promise = new Promise(function (resolve, reject) {
    setTimeout(
        function () {
            let error = false;

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


async function usePromise() {
    try {
        const response = await promise;
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

usePromise();