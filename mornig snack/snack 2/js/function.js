// LOGIC
function compareWordLenght (wordOne, wordTwo) {
    let result = "";
    if (wordOne.length === wordTwo.length) {
        result = `${wordOne}, ${wordTwo}`;
    } else if (wordOne.length > wordTwo.length) {
        result = wordOne;
    } else {
        result = wordTwo;
    }
    console.log(result);
    return result;
}
