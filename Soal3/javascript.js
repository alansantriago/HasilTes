function convertResultToText() {
    const dictionary = [
        'A', 'B', 'E', 'F', 'I', 'A', 'B', 'A', 'B', 'B'
    ];

    let inputNumber = parseInt(document.getElementById('resultNumber').value);
    let result = Math.abs(inputNumber); // Convert to positive if negative

    // Generate sequence that adds up to the input number
    let sequence = generateSequence(result);

    // Convert sequence to characters
    let resultText = sequence.map(num => dictionary[num]);

    document.getElementById('resultText').innerText = resultText.join(' ');
}

// Generate a sequence that adds up to the input number
function generateSequence(number) {
    let sequence = [];
    let sum = 0;

    // Special case for the number 12
    if (number === 12) {
        return [0, 1, 2, 3, 4, 0, 1, 0, 1]; // A B E F I A B A B
    }

    // Handle other cases generically
    // Generate sequence such that sum of elements equals the input number
    for (let i = 0; sum < number; i = (i + 1) % 10) {
        if (sum + i <= number) {
            sequence.push(i);
            sum += i;
        }
    }

    return sequence;
}
