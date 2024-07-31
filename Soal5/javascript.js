// Updated dictionary for conversion
const abjadToNumber = {
    'A': 1, 'B': 1, 'C': 1, 'D': 1, 'E': 3, 'F': 3, 'G': 3, 'H': 3, 'I': 5, 'J': 5, 'K': 5, 'L': 5, 'M': 5, 'N': 5, 'O': 7, 'P': 7, 'Q': 7, 'R': 7, 'S': 7, 'T': 7, 'U': 8, 'V': 8, 'W': 8, 'X': 8, 'Y': 8, 'Z': 8
};

// Convert letters to numbers based on the dictionary
function convertAbjadToNumbers(abjadString) {
    return abjadString.split(' ').map(letter => abjadToNumber[letter] || 0);
}

// Function to process the conversion and display the result
function processConversion() {
    const inputText = document.getElementById('inputText').value;
    const numbersArray = convertAbjadToNumbers(inputText);

    // Output the result as a space-separated string of numbers
    document.getElementById('resultText').innerText = numbersArray.join(' ');
}
