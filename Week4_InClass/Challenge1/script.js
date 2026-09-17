function calculate() {

    // YOUR CODE GOES HERE
    function calculate() {
    const num1 = parseInt(document.getElementById("number1").value);
    const num2 = parseInt(document.getElementById("number2").value);

    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    document.getElementById("result").textContent = "Sum: " + sum;
}

document.getElementById("calculate-btn").addEventListener("click", calculate);
    
}