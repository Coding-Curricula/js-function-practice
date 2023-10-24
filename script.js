// parseInt(string, radix) - converts a string to an integer
const string1 = '100';
const num1 = parseInt(string1);
console.log("parseString", num1);

// parseFloat - converts a string to a float
const string2 = '100.5';
const num2 = parseFloat(string2);
console.log("parseFloat", num2);

// isNaN - checks if a value is NaN
const result = [100, "hi mom"];
console.log("isNaN", isNaN(result));

// String.fromCharCode(num) - converts a number to a character
const char = String.fromCharCode(65);
console.log("fromCharCode", char);

// Array.isArray(value) - checks if a value is an array
const arr = [654];
console.log("isArray", Array.isArray(arr));

// Math.random() - generates a random number between 0 and 1
const randomNum = Math.floor(Math.random() * 10);
console.log("randomNum", randomNum);

// roll the dice function
function rollDice(diceType) {
    // check if the input is a valid string
    if (typeof diceType !== "string") {
        return "Invalid Input";
    }

    // extract the number from the dice type using parseInt
    const sides = parseInt(diceType.slice(1));

    // check if the pased value isa valid integer
    if (isNaN(sides) || !Number.isInteger(sides)) {
        return "Invalid dice type";
    }

    // roll the dice using Math.random()
    const roll = Math.floor(Math.random() * sides + 1);

    // construct the result message using encodeURI()
    const resultMessage = `You rolled a ${roll} on a ${diceType} dice`;
    return resultMessage;
}

// test the rollDice function
console.log("rollDice", rollDice("dhimom"));
console.log("rollDice", rollDice("d20"));
console.log("rollDice", rollDice("d100"));
console.log("rollDice", rollDice("d1000"));

// multiply numbers function
function multiplyNums(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

// test the multiplyNums function
console.log("multiplyNums function", multiplyNums(10, 20));

// function to check for even numbers
function isEven(num) {
    return num % 2 === 0
}

console.log("isEven function", isEven(13));

// convert celcius to fahrenheit
function celToFahr(c) {
    return (c * 9 / 5) + 32;
}

console.log("celToFahr function", celToFahr(0));

// get the max of two numbers
function maxNum(a, b) {
    if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    } else {
        return "Equal";
    }
}

console.log("maxNum function", maxNum(1000, 1000));

// function to dynamically greet a user
function hiUser(userName) {
    if (userName === undefined) {
        return "Hi Guest";
    }

    return `Hi ${userName}`;
}

console.log("hiUser function", hiUser("John"));

// function to square a number
function square(a) {
    return a * a;
}

console.log("square function", square(20));

// function to check if a number is positive
function checkPositive(a) {
    return a > 0;
}

console.log("checkPositive function", checkPositive(1));

// function to validate password is at least 8 characters long and has one number and one special character
function validatePassword(password) {
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }

    const hasNumber = /\d/.test(password);

    if (!hasNumber) {
        return "Password must have at least one number";
    }

    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test
        (password);

    if (!hasSpecialChar) {
        return "Password must have at least one special character";
    }

    return "Password is valid";
}

console.log("validatePassword function", validatePassword("p@ssw0rd"));

// object methods
const pet = {
    name: "Doggo",
    age: 3,
    breed: "Labrabor",
    color: "Black",
    gender: "Male",
    legs: 4,
    toys: ["Ball", "Bone", "Rope"],
    walk: function () {
        console.log("I am walking");
    },
    namedWalk: function (name) {
        console.log(`${name} is walking ${this.name}`);
    },
    iNamedWalked: function () {
        console.log(`I am walking, ${this.name}`);
    }
};

console.log("pet object", pet);
pet.walk();
pet.namedWalk("John");
pet.iNamedWalked();