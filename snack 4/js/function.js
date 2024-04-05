/**
 * copii l'array di partenza tranne l'ultimo indice e lo stampi 
 * @param {Array} arrayToCut
 * @returns {Array}
 */
function deleteTheLast(arrayToCut) {
    shorterArray = [];
    for (let i = 0; i < arrayToCut.length - 1; i++) {
        curElem = arrayToCut[i];
        shorterArray += ` ${curElem}`;
    }
    console.log(shorterArray);
    return shorterArray;
}
