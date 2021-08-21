"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringInvertido = exports.stringAArray = exports.spinWords = void 0;
/* Ejemplos:
spinWords("Hey fellow warriors") => "Hey wollef sroirraw"
spinWords("This is a test") => "This is a test"
spinWords("This is another test") => "This is rehtona test"  */
// funcion principal para recorrer la frase Comprobar en esta funcion si el array.length es> 2 entonces eliminar espacios
// funcion que transforma la frase en un array de strings
// funcion para medir el tamaño de cada palabra
// funcion que convierte un string dentro de un array en un string
// funcion para invertir una palabra
// spinWords("Esto es estopa la")
/**
 * Hace un llamado a las demás funciones mientras recorre una frase;
 * @param {string} word
 * @returns {string}
 */
function spinWords(word) {
    let arrayOfStrings = stringAArray(word);
    let finalArray = [];
    let stringOut = "";
    for (let i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length < 5) {
            finalArray.push(arrayOfStrings[i]);
        }
        if (arrayOfStrings[i].length > 4) {
            finalArray.push(stringInvertido(arrayOfStrings[i]));
        }
    }
    return stringOut = finalArray.join(" ");
    ;
}
exports.spinWords = spinWords;
/**
 * Transforma un string en un array de strings;
 * @param {string} palabras
 * @returns {string[]} array
 */
function stringAArray(palabras) {
    let array = palabras.split(" ");
    return array;
}
exports.stringAArray = stringAArray;
/**
 * Invierte el orden de los caracteres de un string;
 * @param {string} word
 * @returns {string}
 */
function stringInvertido(word) {
    return word.split("").reverse().join("");
}
exports.stringInvertido = stringInvertido;
//# sourceMappingURL=index.js.map