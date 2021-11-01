// -------------------------------  LEVEL 1


/* Opdracht 1 */
// Schrijf een functie die een cijfer verwacht en teruggeeft of het cijfer groter is dan nul
// ---- Verwachte uitkomsten:
// -3 geeft false
// 0 geeft false
// 300 geeft true

    /* Stappen */
    // checken of getal groter of kleiner is dan

function isBiggerOrSmallerThanNull (number) {
    let isBiggerThanNull;
    if (number > 0) {
        isBiggerThanNull = true;
    } else {
        isBiggerThanNull = false;
    }
    return isBiggerThanNull;
}

const numberOne = isBiggerOrSmallerThanNull(-3);
console.log(numberOne);
const numberTwo = isBiggerOrSmallerThanNull(0);
console.log(numberTwo);
const numberThree = isBiggerOrSmallerThanNull(300);
console.log(numberThree);

/* Opdracht 2 */
// Schrijf een functie die twee getallen verwacht en teruggeeft of ze, opgetelt, gróter zijn dan 100.
// ---- Verwachte uitkomsten:
// 1 en 23 geeft false
// 8 en 92 geeft false
// 89 en 14 geeft true



function isBiggerOrSmallerThanHundred (number1, number2) {
    let sumOfNumbers = number1 + number2;
    let biggerThanHundred;
    if (sumOfNumbers > 100) {
        biggerThanHundred = true;
    } else {
        biggerThanHundred = false;
    }
    return biggerThanHundred;
}

const combinationOne = isBiggerOrSmallerThanHundred(1, 23);
console.log(combinationOne);
const combinationTwo = isBiggerOrSmallerThanHundred(8, 92);
console.log(combinationTwo);
const combinationThree = isBiggerOrSmallerThanHundred(89, 14);
console.log(combinationThree);

/* Opdracht 3 */
// Schrijf een functie die een zin verwacht en de eerste letter uit de zin omzet naar een hoofdletter.
// ---- Verwachte uitkomsten:
// "de kat krabt de krullen van de trap" geeft "De kat krabt de krullen van de trap"
// "programmeren is super leuk!" geeft "Programmeren is super leuk!"

function firstToUppercase (sentence) {
    let lastIndexOfSentence = sentence.length;
    let uppercaseSentence = (sentence[0].toUpperCase()) + (sentence.substring(1,lastIndexOfSentence));
    return uppercaseSentence;
}

const firstSentence = firstToUppercase("de kat krabt de krullen van de trap");
console.log(firstSentence);
const secondSentence = firstToUppercase("programmeren is super leuk!");
console.log(secondSentence);


/* Opdracht 4 */
// Schrijf een functie die een argument verwacht en het datatype teruggeeft (boolean, object, undefined, number, string,function)
// Tip: gebruik typeof (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
// { name: 1 } geeft object
// undefined geeft undefined
// "Hallo" geeft string
// [1, 2, 3] geeft object (ja echt!)

function giveDataType(type) {
    let dataType = typeof type;
    return dataType;
}

const outcomeDataTypeOne = giveDataType({ name: 1});
console.log(outcomeDataTypeOne);
const outcomeDataTypeTwo = giveDataType(undefined);
console.log(outcomeDataTypeTwo);
const outcomeDataTypeThree = giveDataType("Hallo");
console.log(outcomeDataTypeThree);
const outcomeDataTypeFour = giveDataType([1,2,3]);
console.log(outcomeDataTypeFour);

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht. Hoe lang die array is weet je niet van tevoren - het zouden zomaar 100 entries kunnen zijn.
// De functie geeft alle strings aan elkaar geplakt terug. Je mag hier géén array- of string methoden voor gebruiken zoals .concat()
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c", "d", "e"] geeft "abcde"

function combinedString(strings) {
    let totalCombination = "";
    for (let i = 0; i < strings.length; i++) {
        totalCombination = totalCombination + strings[i];
    }
    return totalCombination;
}

const fullStringOne = combinedString(["abra", "cadabra"]);
console.log(fullStringOne);
const fullStringTwo = combinedString(["a", "b", "c", "d", "e", "f", "g"]);
console.log(fullStringTwo);


/* Opdracht 6 */
// Schrijf een functie die een zin verwacht en het langste woord uit die zin teruggeeft. Als er meerdere woorden het langst zijn, wordt het laatste langste woord terug gegeven.
// ---- Verwachte uitkomsten:
// "Frontend web development" geeft "development"
// "De eindopdracht telt voor 30 ECTS" geeft "eindopdracht"
// "Een API staat voor Application Programming Interface. Met deze technologie zul je vaak gaan werken." geeft "technologie"

/* Stappen */
// Deel de zin op in losse woorden - in nieuwe array --> ,split
// Check voor de hele array hoe lang elk woord is --> .length

function findLongestWord(sentence) {
    // maak een lege variabele om het langste woord in op te slaan
    let longestWord = "";
    // zet de zin op basis van spaties om naar een array met woorden.
    const seperateWords = sentence.split(" ");
    for (let i = 0; i < seperateWords.length; i++) {
        // als longestWord < dan seperateWords[i] --> maak dan van het nieuwe woord longestWord
        if (longestWord.length <= seperateWords[i].length) {
            longestWord = seperateWords[i];
        }
    }
    return longestWord;
}

const sentenceOne = findLongestWord("Frontend web development");
console.log(sentenceOne);
const sentenceTwo = findLongestWord("De eindopdracht telt voor 30 ECTS");
console.log(sentenceTwo);
const sentenceThree = findLongestWord("Een API staat voor Application Programming Interface. Met deze technologie zul je vaak gaan werken.");
console.log(sentenceThree);


// -------------------------------  LEVEL 2

/* Opdracht 6 */
// 6a. Schrijf een functie die een woord verwacht en dit omgedraait teruggeeft. Je kunt dit zowel handmatig
// als met ingebouwde methoden doen, de keus is aan jou.
// ---- Verwachte uitkomsten:
// "koekje" geeft "ejkeok"
// "vrienden" geeft "nedneirv"


// de handmatige uitwerking snap ik niet zo goed

function wordsBackwards(word) {
    const arrayOfCharacters = word.split("");
    const arrayBackwards = arrayOfCharacters.reverse();
    const wordBackwards = arrayBackwards.join("");
    // ik had bij join niet de "" gebruikt. Toen kwamen er comma's tussen.
    return wordBackwards;
}

const firstWord = wordsBackwards("koekje");
console.log(firstWord);
const secondWord = wordsBackwards("vrienden");
console.log(secondWord);


// 6b. Schrijf een functie die een woord verwacht checkt of dit woord een palindroom is. Een palindroom is een
// spiegelwoord: het is hetzelfde zowel vooruit als achterstevoren. Als dit zo is, geeft de functie true terug,
// zo niet, dan false.
// ---- Verwachte uitkomsten:
// "lepel" geeft true
// "madam" geeft true
// "vrienden" geeft false

function checkPalindroom(word) {
    let isPalindroom;
    const currentWord = word;
    const arrayOfCharactersTwo = word.split("");
    const arrayBackwardsTwo = arrayOfCharactersTwo.reverse();
    const wordBackwardsTwo = arrayBackwardsTwo.join("");
    // ik had bij join niet de "" gebruikt. Toen kwamen er comma's tussen.
    if (currentWord === wordBackwardsTwo) {
        isPalindroom = true;
    } else {
        isPalindroom = false;
    }
    return isPalindroom;
}

const firstWordPalindroom = checkPalindroom("lepel");
console.log(firstWordPalindroom);
const secondWordPalindroom = checkPalindroom("madam");
console.log(secondWordPalindroom);
const thirdWordPalindroom = checkPalindroom("vrienden");
console.log(thirdWordPalindroom);


/* Opdracht 7 */
// Schrijf een functie die een string en een letter verwacht. De functie telt hoe vaak die letter voorkomt in
// de string en geeft dit terug. Je mag hiervoor géén string- of array-methoden gebruiken.
// ---- Verwachte uitkomsten:
// "Hans en marietje lopen naar de supermarkt" en "e" geeft 6
// "Hans is zijn mondkapje vergeten" en "a" geeft 2

// for loop die checkt of er een e/a(=parameter 2) in de zin(=parameter 1) zit
// en telt elke keer 1 op bij aantal (=variabele) e's/a's

/* Poging 1 - werkte niet omdat ik voor de gehele lengte van de string vraag of de zin een een e/a bevat
*  dus elke keer opnieuw */
// function countCharacters(string, character) {
//     let countSpecificCharacter = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string.includes(character)) {
//             countSpecificCharacter = countSpecificCharacter + 1;
//         } else {
//             countSpecificCharacter =countSpecificCharacter + 0;
//         }
//     }
//     return countSpecificCharacter;
// }
//
// const sentenceE = countCharacters("Hans en marietje lopen naar de supermarkt", "e");
// console.log(sentenceE);


function countCharacters(string, character) {
    let countSpecificCharacter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            countSpecificCharacter = countSpecificCharacter + 1;
        }
    }
    return countSpecificCharacter;
}

const sentenceE = countCharacters("Hans en marietje lopen naar de supermarkt", "e");
console.log(sentenceE);
const sentenceA = countCharacters("Hans is zijn mondkapje vergeten", "a");
console.log(sentenceA);


/* Opdracht 8 */
// Schrijf een functie die bij iedere aanroep een random string id genereert van 8 tekens. Er mag gebruik gemaakt worden van de volgende karakters:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// ---- Verwachte (mogelijke) uitkomsten:
// iizdX7Ax
// gajxBhGs

/* HIER KWAM IK NIET ZELF UIT, MAAR OOK DE OPLOSSING VOND IK NIET OK, TOCH KOMT HET OP HETZELFDE NEER*/

function generateID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // bovenstaande string met optionele karakters is 62 letters lang (dus kunnen we characters op indexnummer 0 tot 61 kiezen: length - 1)
    const lastIndexNumber = characters.length - 1;

    // maak een lege container variabele
    let uniqueId = '';
    // laat de for-loop 8 keer loopen, we hebben immer 8 karakters nodig
    for (let i = 0; uniqueId.length < 8; i++) {
        const randomNumber = Math.random() * 100;
        if (randomNumber <= lastIndexNumber) {
            const indexOfPickedCharacter = Math.round(randomNumber);
            uniqueId = uniqueId + characters[indexOfPickedCharacter];
        }
    }
    return uniqueId;
}

const idA = generateID();
const idB = generateID();
console.log(idA, idB);

// ------------------------------- LEVEL 3 (optionele bonusopdrachten)

/* Opdracht 9 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Let op: Als er een getal als tweede argument wordt meegegeven (de parameter n), worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 8]) geeft 8
// lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]

/* Poging 1 - werkt alleen als je een count meegeeft */
// function lastEntry(array, count) {
//     let lastNumber = array.length - 1;
//     let countNumbersToDelete = array.length - count;
//     let newArray = array;
//     for (let i = 0; i < array.length; i++) {
//         if (newArray.length > count) {
//             newArray.shift();
//         }
//     }
//     return newArray;
// }

/* Poging 2 - met uitwerkingen erbij */
function lastEntry(array, count) {
    console.log(array.length);
    const lastEntryIndex = array.length;
    if (count === undefined) {
        return array[lastEntryIndex - 1];
    }
    return array.splice(array.length - count);
}


const arrayOne = lastEntry([3, 6, 9, 17, 4, 6, 25, 8]);
const arrayTwo = lastEntry([46, 65, 34, 204, 190, 89],3);
console.log(arrayOne);
console.log(arrayTwo);

/* Opdracht 10 */
// Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je "Fizz" in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je "Buzz" in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je "FizzBuzz".

/* Poging 1 - krijg maar 1 output*/
// function fizzBuzz() {
//     let isFizzBuzz;
//     for (let i = 0; i < 100; i++) {
//         let deelbaarDoorDrie = [i] % 3;
//         let deelbaarDoorVijf = [i] % 5;
//         if ((deelbaarDoorDrie === 0) && (deelbaarDoorVijf !== 0)) {
//             isFizzBuzz = "Fizz";
//         } else if ((deelbaarDoorVijf === 0) && (deelbaarDoorDrie !== 0)) {
//             isFizzBuzz = "Buzz";
//         } else if ((deelbaarDoorDrie === 0) && (deelbaarDoorVijf === 0)) {
//             isFizzBuzz = "FizzBuzz"
//         } else {
//             isFizzBuzz = [i];
//         }
//     }
//     return isFizzBuzz;
// }
//
// const numbersAndFizzBuzz = fizzBuzz();
// console.log(numbersAndFizzBuzz);

/* Poging 2 - logt alles achter elkaar en logt alsnog de het indexnummer van de fizz/buzz*/
// function fizzBuzz() {
//     let isFizzBuzz = "";
//     for (let i = 1; i <= 100; i++) {
//         let deelbaarDoorDrie = [i] % 3;
//         let deelbaarDoorVijf = [i] % 5;
//         if (deelbaarDoorDrie === 0) {
//             isFizzBuzz += "Fizz";
//         }
//         if (deelbaarDoorVijf === 0) {
//             isFizzBuzz += "Buzz";
//         }
//         else {
//             isFizzBuzz += [i];
//         }
//     }
//     return isFizzBuzz;
// }
//
// const numbersAndFizzBuzz = fizzBuzz();
// console.log(numbersAndFizzBuzz);

/* Poging 3 - geeft 1 en 2 en dan hele lange regels FizzBuzz etc..*/
// function fizzBuzz() {
//     let isFizzBuzz = "";
//     for (let i = 1; i <= 100; i++) {
//         let deelbaarDoorDrie = [i] % 3;
//         let deelbaarDoorVijf = [i] % 5;
//         if (deelbaarDoorDrie === 0) {
//             isFizzBuzz += "Fizz";
//         }
//         if (deelbaarDoorVijf === 0) {
//             isFizzBuzz += "Buzz";
//         }
//         console.log(isFizzBuzz || i);
//     }
//     return isFizzBuzz;
// }
//
// const numbersAndFizzBuzz = fizzBuzz();
// console.log(numbersAndFizzBuzz);

/* Poging 4 */
// function fizzBuzzOne() {
//     let isFizzBuzz = "";
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0) {
//             isFizzBuzz += "Fizz";
//         }
//         if (i % 5 === 0) {
//             isFizzBuzz += "Buzz";
//         }
//         console.log(isFizzBuzz || i);
//     }
// }
//
// console.log(fizzBuzzOne());



// ---- Verwachte uitkomst:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.



/* Opdracht 11 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft, ongeacht hoeveel items er in de array staan.
// ---- Verwachte uitkomsten:
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"

/* Poging 1*/
function greetAll(strings) {
    let stringGreetings = "Hoi ";
    let lastTwoIndexOfArray = (strings.length) - 2;
    for (let i = 0; i < strings.length; i++) {
        if (i < lastTwoIndexOfArray) {
            stringGreetings = stringGreetings + strings[i] + ", ";
        // had hieronder eerst strings.length -1 staan, maar dat klopte niet
        } if (i === strings.length - 2) {
            stringGreetings = stringGreetings + strings[i] + " ";
        // had hieronder eerst strings.length staan, maar dat gaf 1 te weinig.
        } if (i === strings.length - 1) {
            stringGreetings = stringGreetings + "en " + strings[i] + "!"
        }
    }
    return stringGreetings;
}

// bij toevoegen van de[] deed hij al wel echt meer. Klopte nog steeds niet helemaal.
// zie hierboven
const firstGreetings = greetAll(["Nick", "Nova", "Mitchel", "Arjen"]);
console.log(firstGreetings);
const secondGreetings = greetAll(["Piet", "Henk"]);
console.log(secondGreetings);
const thirdGreetings = greetAll(["A", "B", "C", "D", "E", "F"]);
console.log(thirdGreetings);

/* Poging 2 - met uitwerkingen ernaast, ik was er bijna */
// function greetAll(strings) {
//     let stringGreetings = "Hoi ";
//     // let lastTwoIndexOfArray = (strings.length) - 2;
//     for (let i = 0; i < strings.length; i++) {
//         if (i === strings.length - 1) {
//             return stringGreetings = stringGreetings + "en " + strings[i] + "!";
//         }
//         if (strings.length === 2 || i === strings.length - 1) {
//             stringGreetings = stringGreetings + strings[i];
//         } else {
//             stringGreetings = stringGreetings + strings[i] + ", ";
//         }
//     }
//     return stringGreetings;
// }

// // vergeten om [] om de array te zetten, daardoor pakte hij alleen de eerste entry
// // en dan elke letter apart.
// const firstGreetings = greetAll(["Nick", "Nova", "Mitchel", "Arjen"]);
// console.log(firstGreetings);
// const secondGreetings = greetAll(["Piet", "Henk"]);
// console.log(secondGreetings);
// const thirdGreetings = greetAll(["A", "B", "C", "D", "E", "F"]);
// console.log(thirdGreetings);