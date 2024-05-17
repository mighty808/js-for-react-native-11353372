//Task One And Two

// Task 1: Function processArray
function processArray(numbers) {
    return numbers.map(num => num % 2 === 0 ? num * num : num * 3);
}
// for instance
const result = processArray([1, 3, 4, 6]);
console.log(result);
// This gives us a result of [3, 9, 16, 36].






// Task 2: Function formatArrayStrings
function formatArrayStrings(strings, numbers) {
    return strings.map((str, i) => 
        numbers[i] % 2 === 0 ? str.toUpperCase() : str.toLowerCase());
}

// for instance
const strings = ['Effah', 'Paakwesi', 'Dodge', 'Challenger'];
const numbers = processArray([1, 2, 3, 4]);
const formattedStrings = formatArrayStrings(strings, numbers); 
console.log(formattedStrings);
// the formatted strings gives us [ 'effah', 'PAAKWESI', 'dodge', 'CHALLENGER' ]