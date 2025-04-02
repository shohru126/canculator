function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;
    
    if (isNaN(num1) || isNaN(num2)) {
        result = "iltmos son kiriting";
    } else {
        switch (operation) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
        }
    }
    document.getElementById("result").innerText = "Result: " + result;
}