/**
 * rimuovere il primo indice dall'array base e stampare il nuovo array
 * @param {array} arrayToBehead
 * @returns {array}
 */
function chopTheHead(arrayToBehead) {
    let result = [];
    for (let i = 1; i < arrayToBehead.length; i++) {
        const curElem = arrayToBehead[i];
        result += ` ${curElem}`;
    }
    console.log(result);
    return result;
}
