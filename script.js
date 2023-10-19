const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector(".results")
    const resultsInfo = document.querySelector(".result-info")

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if(height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = "Enter Valid height number";
    } else if(weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = "Enter Valid weight number";
    } else {
        results.innerHTML = `<span>${bmi}</span>`  
        if(results < 18.5) {
            resultsInfo.innerHTML = "You are in under weight range"
        } else if(results >= 18.6 && results < 24.9) {
            resultsInfo.innerHTML = "You are in normal range"
        } else {
            resultsInfo.innerHTML = "You were in over weight range"
        }
    } 

})
