/**
 * 
 * @param {string} inputNumb
 * @param {array} arrayToModify
 * @returns {array}
 */
function inserisciInTesta(inputElem, arrayToModify) {
    const modArray = [];
    let indexElem;
    for (let i = 0; i < arrayToModify.length; i++) {
        if (inputElem === arrayToModify[i]) {
            indexElem = arrayToModify[i];
            modArray.push(indexElem);
        }
        
    }
    console.log(arrayToModify);
    console.log(modArray);
    return modArray;
}