// LOGIC
function compareWordLenght (wordOne, wordTwo) {
    let result = "";
    if (wordOne.lenght === wordTwo.lenght) {
        result = wordOne, wordTwo;
    } else if (wordOne.lenght > wordTwo.lenght) {
        result = wordOne;
    } else {
        result = wordTwo;
    }
    return result
}
