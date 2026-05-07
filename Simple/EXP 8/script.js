// Factorial: multiply all numbers from 1 to n
function calculateFactorial() {
    var n = parseInt(document.getElementById("number").value);
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
    document.getElementById("result").innerText = "Factorial of " + n + " = " + result;
}

// Fibonacci: each number = sum of previous two
function generateFibonacci() {
    var n = parseInt(document.getElementById("number").value);
    var series = [0, 1];
    for (var i = 2; i < n; i++) {
        series[i] = series[i - 1] + series[i - 2];
    }

    let output="";

    for (let i=0; i < series.length; i++) {
        output += series[i] + ", ";
    }
    document.getElementById("result").innerText = "Fibonacci series up to " + n + ": " + output;
}

// Prime: a number divisible only by 1 and itself
function listPrimes() {
    var n = parseInt(document.getElementById("number").value);
    var primes = [];
    for (var i = 2; i <= n; i++) {
        var isPrime = true;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }

    let output = "";

    for (let i=0; i < primes.length; i++) {
        output += primes[i] + ", ";
    }
    document.getElementById("result").innerText = "Primes up to " + n + ": " + output;
}

// Palindrome: same forwards and backwards (eg: 121, madam)
function checkPalindrome() {
    var num = document.getElementById("number").value;
    let reversed = "";
    for (let i=num.length-1; i >= 0; i--) {
        reversed += num[i];
    }

    if (num == reversed) {
        document.getElementById("result").innerText = num + " is a Palindrome";
    } else {
        document.getElementById("result").innerText = num + " is NOT a Palindrome";
    }
}
