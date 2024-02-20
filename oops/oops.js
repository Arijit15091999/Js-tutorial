function User(username, signinCount, isLoggedin) {
    this.username = username;
    this.signinCount = signinCount;
    this.isLoggedin = isLoggedin;

    this.getUser = function () {
        console.log(this);
    } 
    return this;
}

const user = new User("Arijit", 11, true);

console.log(user);
user.getUser();