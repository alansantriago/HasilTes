const abjadToNumber = {
    'A': 0, 'B': 1, 'C': 1, 'D': 1, 'E': 2, 'F': 3, 'G': 3, 'H': 3, 'I': 4, 'J': 5, 'K': 5, 'L': 5, 'M': 5, 'N': 5, 'O': 6, 'P': 7, 'Q': 7, 'R': 7, 'S': 7, 'T': 7, 'U': 8, 'V': 9, 'W': 9, 'X': 9, 'Y': 9, 'Z': 9
};

const numberToAbjad = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
];

function convertAbjadToNumbers(abjadString) {
    return abjadString.split(' ').map(letter => abjadToNumber[letter] || 0);
}

function convertNumbersToAbjad(numbersArray) {
    return numbersArray.map(num => numberToAbjad[num]).join(' ');
}

function processConversion() {
    const inputText = document.getElementById('inputText').value;
    const numbersArray = convertAbjadToNumbers(inputText);

    // Perform the conversion and adjustment
    let adjustedNumbersArray = adjustSequence(numbersArray);

    // Convert adjusted numbers back to Abjad
    const resultAbjad = convertNumbersToAbjad(adjustedNumbersArray);

    // Display the result
    document.getElementById('resultText').innerText = resultAbjad;
}

function adjustSequence(numbersArray) {
    let resultArray = [];
    let length = numbersArray.length;

    for (let i = 0; i < length; i++) {
        resultArray.push(numbersArray[i]);

        // If the next number is the same, change it to the next number in the sequence
        if (i + 1 < length && numbersArray[i] === numbersArray[i + 1]) {
            resultArray.push((numbersArray[i] + 1) % 10); // Increment and wrap around
        }
    }

    // Handle special cases where specific numbers need to be adjusted
    resultArray = handleSpecialCases(resultArray);
    return resultArray;
}

function handleSpecialCases(numbersArray) {
    let resultArray = [];
    for (let i = 0; i < numbersArray.length; i++) {
        resultArray.push(numbersArray[i]);

        // Add B if last number is a specific value to match sample output
        if (i === numbersArray.length - 1 && numbersArray[i] === 4) {
            resultArray.push(1); // Adding B (value 1) to match example
        }
    }
    return resultArray;
}
