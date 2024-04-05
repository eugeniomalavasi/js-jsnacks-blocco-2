// INPUT
const userNumb = parseInt(prompt("inserisci un numero"));
console.log(userNumb);
/**
 * genera un numero di array uguale a input utente contenenti 10 numeri fra i e 100
 * @param {number} genArray input utente
 * @returns {array}
 */
function arrayGen(genArray) {
    for (let i = 0; i < genArray; i++) {
        const emptyArray = [];
        console.log("--------------------");
        for (let j = 0; j < 10; j++) {
            emptyArray.push = Math.floor(Math.random() * 100) + 1;
            console.log(emptyArray);
        }
    }
    return emptyArray
}

arrayGen(userNumb)