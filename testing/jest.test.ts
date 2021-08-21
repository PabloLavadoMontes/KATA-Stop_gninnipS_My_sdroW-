/* Función que tome una cadena de palabras y en caso de que una palabra contenga más de 5 caracteres, devuelve esa palaba invertida

Reglas:
Las cadenas pasadas constarán solo de letras y espacios.
Los espacios se incluirán solo cuando haya más de una palabra.

Ejemplos:
spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
spinWords("This is a test") => "This is a test" 
spinWords("This is another test") => "This is rehtona test" */
// funcion principal para recorrer la frase Comprobar en esta funcion si el array.length es> 2 entonces eliminar espacios
// funcion que transforma la frase en un array de strings
// funcion para medir el tamaño de cada palabra
// funcion que convierte un string dentro de un array en un string
// funcion para invertir una palabra

import {spinWords, stringAArray, stringInvertido} from "../src/index";
// spinWords:
test("Hace un llamado a las demás funciones mientras recorre una frase", ()=> {
    expect(spinWords("Hey fellow warriors")).toBe("Hey wollef sroirraw");
});
test("Hace un llamado a las demás funciones mientras recorre una frase", ()=> {
    expect(spinWords("This is a test")).toBe("This is a test");
});
test("Hace un llamado a las demás funciones mientras recorre una frase", ()=> {
    expect(spinWords("This is another test")).toBe("This is rehtona test");
});
test("Hace un llamado a las demás funciones mientras recorre una frase", ()=> {
    expect(spinWords("Just kidding there is still one more")).toBe("Just gniddik ereht is llits one more");
});
test("Hace un llamado a las demás funciones mientras recorre una frase", ()=> {
    expect(spinWords("Seriously this is the last one")).toBe("ylsuoireS this is the last one");
});

// stringAArray:
test("Transforma un string en un array de strings", ()=> {
    expect(stringAArray("Hey fellow warriors")).toStrictEqual(["Hey", "fellow", "warriors"]);
});
test("Transforma un string en un array de strings", ()=> {
    expect(stringAArray("This is another test")).toStrictEqual(["This", "is", "another", "test"]);
});
test("Transforma un string en un array de strings", ()=> {
    expect(stringAArray("Whaaaat")).toStrictEqual(["Whaaaat"]);
});
test("Transforma un string en un array de strings", ()=> {
    expect(stringAArray("Stop, what a fuck are you talking about")).toStrictEqual(["Stop,", "what", "a", "fuck", "are", "you", "talking", "about"]);
});
test("Transforma un string en un array de strings", ()=> {
    expect(stringAArray("Hey hey hay hey")).toStrictEqual(["Hey", "hey", "hay", "hey"]);
});

// arrayElementLength:
/* test("Devuelve el tamaño de un elemento de un array", ()=> {
    expect(arrayElementLength("Hey")).toBe(3);
});
test("Devuelve el tamaño de un elemento de un array", ()=> {
    expect(arrayElementLength("fellow")).toBe(6);
});
test("Devuelve el tamaño de un elemento de un array", ()=> {
    expect(arrayElementLength("Motherfucker")).toBe(12);
});
test("Devuelve el tamaño de un elemento de un array", ()=> {
    expect(arrayElementLength("Whaaaat")).toBe(7);
});
test("Devuelve el tamaño de un elemento de un array", ()=> {
    expect(arrayElementLength("Pera")).toBe(4);
}); */

// arrayAString

/* test("Convierte un string dentro de un array a un string", ()=> {
    expect(arrayAString(["Soy", "el", "pepe"])).toBe("Soy");
});
test("Convierte un string dentro de un array a un string", ()=> {
    expect(arrayAString(["Hey", "hey", "hay", "hey"])).toBe("Hey");
});
test("Convierte un string dentro de un array a un string", ()=> {
    expect(arrayAString(["Stop,", "what", "a", "fuck", "are", "you", "talking", "about"])).toBe("Stop");
});
test("Convierte un string dentro de un array a un string", ()=> {
    expect(arrayAString(["pepe"])).toBe("pepe");
});
test("Convierte un string dentro de un array a un string", ()=> {
    expect(arrayAString(["Hey", "fellow", "warriors"])).toBe("Hey");
}); */


// stringInvertido:
test("Invierte el orden de los caracteres de un string", ()=> {
    expect(stringInvertido("Hey")).toBe("yeH");
});
test("Invierte el orden de los caracteres de un string", ()=> {
    expect(stringInvertido("pepe")).toBe("epep");
});
test("Invierte el orden de los caracteres de un string", ()=> {
    expect(stringInvertido("Stop")).toBe("potS");
});
test("Invierte el orden de los caracteres de un string", ()=> {
    expect(stringInvertido("talking")).toBe("gniklat");
});
test("Invierte el orden de los caracteres de un string", ()=> {
    expect(stringInvertido("Soy")).toBe("yoS");
});