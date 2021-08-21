export {spinWords, stringAArray, stringInvertido}

/**
 * Hace un llamado a las demás funciones mientras recorre una frase;
 * @param {string} word 
 * @returns {string}
 */
function spinWords (word: string): string {
    let arrayOfStrings: string[] = stringAArray(word);
    let finalArray: string[] = [];
    let stringOut: string = "";
    for (let i: number = 0; i < arrayOfStrings.length; i++)  {
        if (arrayOfStrings[i].length < 5) {
            finalArray.push(arrayOfStrings[i]);
        }
        if (arrayOfStrings[i].length > 4) {
            finalArray.push(stringInvertido(arrayOfStrings[i]));
        }
    }
    return stringOut = finalArray.join(" ");;
}

/**
 * Transforma un string en un array de strings;
 * @param {string} palabras 
 * @returns {string[]} array
 */
function stringAArray (palabras: string): string[] {
    let array: string[] = palabras.split(" ");
    return array;
}

/**
 * Invierte el orden de los caracteres de un string;
 * @param {string} word
 * @returns {string} 
 */
function stringInvertido (word: string): string {
    return word.split("").reverse().join("");
}
