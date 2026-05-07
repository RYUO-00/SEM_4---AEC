function calculateFactorial() {
    let number = parseInt(document.getElementById("number").value);
    if (isNaN(number) || number < 0) {
        alert("Please enter a valid non-negative number");
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById("result").innerText =
        `Factorial of ${number} is ${factorial}`;
}

function generateFibonacci() {
    let number = parseInt(document.getElementById("number").value);
    if (isNaN(number) || number < 1) {
        alert("Please enter a valid positive number");
        return;
    }
    let fibonacci = [0, 1];
    for (let i = 2; i < number; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    document.getElementById("result").innerText =
        `Fibonacci Series up to ${number} numbers: ${fibonacci.slice(0, number).join(", ")}`;
}

function listPrimes() {
    let number = parseInt(document.getElementById("number").value);
    if (isNaN(number) || number < 2) {
        alert("Please enter a valid number greater than 1");
        return;
    }
    let primes = [];
    for (let i = 2; i <= number; i++) {
        let isPrime = true;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    document.getElementById("result").innerText =
        `Prime numbers up to ${number}: ${primes.join(", ")}`;
}

function checkPalindrome() {
    let number = document.getElementById("number").value;
    if (number === "") {
        alert("Please enter a valid number");
        return;
    }
    let reversed = number.split("").reverse().join("");
    let isPalindrome = (number === reversed);
    document.getElementById("result").innerText =
        `${number} is ${isPalindrome ? "" : "not "}a palindrome`;
}
