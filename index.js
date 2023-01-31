//!TASK 1

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function isEven(num) {
  return num % 2 === 0;
}

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function delimeters(num) {
  let result = [];
  for (i = 1; i <= num; i++) {
    if (num % i === 0) result.push(i);
  }
  return result;
}

const firstTask = () => {
  const result = prompt("Enter the number");
  if (isFinite(result) && result.trim() !== "" && !Number.isInteger(result)) {
    console.log(
      `Number : ${result}\nFactorial: ${factorial(result)}\nSquare : ${
        result * result
      }\nisPrime: ${isPrime(result)}\nisEven: ${isEven(
        result
      )}\nDelimeters: ${delimeters(result)} `
    );
  } else {
    console.log("Invalid input");
    firstTask();
  }
};

firstTask();

//!TASK 2

function secondTask() {
  let symInput = prompt("Enter characters");
  if (symInput.length < 1 || symInput.length > 3 || symInput.trim() === "") {
    console.log("Incorrect input!");
    secondTask();
    return;
  }

  const numInput = Number(prompt("Enter a positive number"));
  if (!Number.isInteger(numInput) || numInput <= 1 || numInput >= 10) {
    console.log("Incorrect input!");
    secondTask();
    return;
  }
  symInput += " ";
  console.log(`${symInput.repeat(numInput)}\n`.repeat(numInput).trim());
}

secondTask();
