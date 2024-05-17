// Task 3: Function createUserProfiles
function createUserProfiles(names, modifiedNames) {
    return names.map((name, i) => ({
        originalName: name,
        modifiedName: modifiedNames[i],
        id: i + 1
    }));
}
