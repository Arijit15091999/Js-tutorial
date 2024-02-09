const body = document.querySelector("body");
// console.log(body);
const buttons = document.querySelectorAll(".button");
// console.log(buttons);

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function(event) {
    console.log(event);
    console.log(event.target);
    body.style.backgroundColor = event.target.id;
  })
})
