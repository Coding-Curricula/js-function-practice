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

//String.fromCharCode(num) - converts a number to a character
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
    const encodedMessage = encodeURI(resultMessage);

    // return the result
    return decodeURI(encodedMessage);
}

// test the rollDice function
console.log("rollDice", rollDice("dhimom"));
console.log("rollDice", rollDice("d20"));
console.log("rollDice", rollDice("d100"));
console.log("rollDice", rollDice("d1000"));