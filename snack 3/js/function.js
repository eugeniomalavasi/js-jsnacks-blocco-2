/**
 * ciclare dentro ad un array e stampare gli elmenti in esso
 * @param {array} arrayToPrint
 * @returns {string}
 */
function printArray(arrayToPrint) {
    let elemPrint = "";
    for (let i = 0; i < arrayToPrint.length; i++) {
        const curElem = arrayToPrint[i];
        elemPrint += `${curElem}, `
    }
    console.log(elemPrint);
    return elemPrint;
}
