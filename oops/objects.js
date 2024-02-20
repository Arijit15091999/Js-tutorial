function createUser(username, score) {
    this.username = username || "default";
    this.score = score || 0;
}

createUser.prototype.incerment = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(this);
}

const userOne = new createUser("Arijit");
const userTwo = new createUser("Aman");
userOne.incerment();
console.log(userOne.score);
console.log(userTwo.score);