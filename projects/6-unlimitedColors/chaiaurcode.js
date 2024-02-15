const codes = "0123456789ABCDEF";
const body = document.querySelector("body");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
let setIntervalId = null;

startButton.addEventListener(
    "click",
    function (e) {
        if(setIntervalId == null) 
            setIntervalId = setInterval(
                function () {
                    body.style.backgroundColor = createRandomColors();
                }, 1000);
    }
);


stopButton.addEventListener(
    "click",
    function (e) {
        clearTimeout(setIntervalId);
        setIntervalId = null;
    }
);

function createRandomColors() {
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += codes.charAt(Math.floor(Math.random() * 16));
    }

    return color;
}



