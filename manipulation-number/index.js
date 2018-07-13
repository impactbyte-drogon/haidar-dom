console.log("=== Manipulation Number ===");

const title = document.getElementById("title")
// console.log("title", titleElement);

const output = document.getElementById("output-paragraph")

const button = document.getElementById("number-button")

const getNumbers = () => {
    const numberFirst = document.getElementById("number-first").value
    const numberSecond = document.getElementById("number-second").value

    output.innerText = `First number: ${numberFirst}
    Second number: ${numberSecond}`
}

// onclick="getNumbers()"
button.onclick = getNumbers

button.addEventListener("click", getNumbers)
button.addEventListener("contextmenu", getNumbers)