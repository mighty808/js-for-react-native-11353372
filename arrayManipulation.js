//Task One And Two

// Task 1: Function processArray
function processArray(numbers) {
    return numbers.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Task 2: Function formatArrayStrings
function formatArrayStrings(strings, numbers) {
    return strings.map((str, i) => numbers[i] % 2 === 0 ? str.toUpperCase() : str.toLowerCase());
}
