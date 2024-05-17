// Task 3: Function createUserProfiles
function createUserProfiles(names, modifiedNames) {
    return names.map((name, i) => ({
        originalName: name,
        modifiedName: modifiedNames[i],
        id: i + 1
    }));
}


// Example usage:
const originalNames = ["Effah", "Nana", "Blacko", "Izzy", "John"];
const modifiedNames = ["EFFAH", "NANA", "BLACKO", "IZZY", "JOHN"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
/* Output:
[
  { originalName: 'Effah', modifiedName: 'EFFAH', id: 1 },
  { originalName: 'Nana', modifiedName: 'NANA', id: 2 },
  { originalName: 'Blacko', modifiedName: 'BLACKO', id: 3 },
  { originalName: 'Izzy', modifiedName: 'IZZY', id: 4 },
  { originalName: 'John', modifiedName: 'JOHN', id: 5 }
]
*/