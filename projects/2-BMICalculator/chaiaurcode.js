const form = document.querySelector("form");
console.log(form);

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = parseInt(document.querySelector("#weight").value);
    const height = parseInt(document.querySelector("#height").value);
    const results = document.querySelector("#results");
    console.log(height, weight, results);

    if (isNaN(weight) || isNaN(height) || height < 0 || weight < 0) {
        results.innerHTML = "<span>enter correct height and weight</span>";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            results.innerHTML = `<span>your bmi ${bmi}(under weight)</span>`;
        } else if (bmi < 24.9) {
            results.innerHTML = `<span>your bmi ${bmi}(normal range)</span>`;
        } else {
            results.innerHTML = `<span>your bmi ${bmi}(overweight)</span>`;
        }
        
    }
})