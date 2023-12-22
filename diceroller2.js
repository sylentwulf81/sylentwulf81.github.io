// Declare variables
let dieRollResult;



const die = {
    sides: 0,
    roll: function (){
        return Math.floor(Math.random() * this.sides) + 1;
    }
};

// Set the number of sides for the chosen die

function setDieSides(numSides) {
    die.sides = numSides; 
}

// Four sided die

function rollFourSided() {
    setDieSides(4); // Set the die to have 4 sides
    const result = die.roll() // Call the roll function from the Die object
    console.log(`You rolled a ${result} with a ${die.sides}-sided die.`)
    const resultDisplayText = document.getElementById('resultDisplay');
    resultDisplayText.innerHTML = `You rolled a ${result} with a ${die.sides}-sided die.`;
}

function rollSixSided() {
    setDieSides(6); // Set the die to have 6 sides
    const result = die.roll() // Call the roll function from the Die object
    console.log(`You rolled a ${result} with a ${die.sides}-sided die.`)
    const resultDisplayText = document.getElementById('resultDisplay');
    resultDisplayText.innerHTML = `You rolled a ${result} with a ${die.sides}-sided die.`;
}

function rollEightSided() {
    setDieSides(8); // Set the die to have 4 sides
    const result = die.roll() // Call the roll function from the Die object
    console.log(`You rolled a ${result} with a ${die.sides}-sided die.`)
    const resultDisplayText = document.getElementById('resultDisplay');
    resultDisplayText.innerHTML = `You rolled a ${result} with a ${die.sides}-sided die.`;
}

function rollTenSided() {
    setDieSides(10); // Set the die to have 4 sides
    const result = die.roll() // Call the roll function from the Die object
    console.log(`You rolled a ${result} with a ${die.sides}-sided die.`)
    const resultDisplayText = document.getElementById('resultDisplay');
    resultDisplayText.innerHTML = `You rolled a ${result} with a ${die.sides}-sided die.`;
}

function rollTwelveSided() {
    setDieSides(12); // Set the die to have 4 sides
    const result = die.roll() // Call the roll function from the Die object
    console.log(`You rolled a ${result} with a ${die.sides}-sided die.`)
    const resultDisplayText = document.getElementById('resultDisplay');
    resultDisplayText.innerHTML = `You rolled a ${result} with a ${die.sides}-sided die.`;
}

function rollTwentySided() {
    setDieSides(20); // Set the die to have 20 sides
    const result = die.roll(); // Call the roll function from the Die object
    const resultDisplayText = document.getElementById('resultDisplay');
    
    if (result === 1) {
        resultDisplayText.innerHTML = `You rolled a ${result} with a ${die.sides}-sided die. Critical failure!`;
    } else if (result === 20) {
        resultDisplayText.innerHTML = `You rolled a ${result} with a ${die.sides}-sided die. Critical success!!`;
    } else {
        resultDisplayText.innerHTML = `You rolled a ${result} with a ${die.sides}-sided die.`;
    }
}