/**
 * cerca all'interno di un array un elemento
 * @param {array} arrayToIndex
 * @param {string} inputElem
 * @returns {number} restituisce la posizione all'interno dell'array dell'elemento
 */
function findElem(arrayToIndex, inputElem) {
    let result;
    for (let i = 0; i < arrayToIndex.length; i++) {
        if (arrayToIndex[i] === inputElem) {
            result =`la posizione nell'array è: ${i}`;
            break;
        } else {
            result = -1;
        }
    }
    console.log(result);
    return result;
}
