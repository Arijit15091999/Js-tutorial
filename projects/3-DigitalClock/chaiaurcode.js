
const clock = document.querySelector("#clock");
console.log(clock);

setInterval(
    function () {
        const date = new Date();
        const localTime = date.toLocaleTimeString()
        clock.innerHTML = `<span>${localTime}</span>`
    }, 1000
);