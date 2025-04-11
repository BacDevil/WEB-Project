
function showOutput() {
    const input = document.getElementById('userInput').value;
    const output = document.getElementById('output');

    if (input.trim() === "") {
        output.textContent = "Please enter something!";
    } else if(input.trim() == "Hello") {
        output.textContent = "Hello is a nice word for human being.";
     
    } else {
        output.textContent = "i said: " + input;
    }
}