    // We hebben een array met e-mailaddressen van medewerkers in ons systeem.

const emailadressesEmployees = ['n.eeken@novi.nl', 'n.stuivenberg@novi.nl', 'm.vandergeest@novi-education.nl', 'a.wiersma@novi.nl'];
// const emailadressesStudents = ['n.kapers@novi-education.nl'];

    /* Opdracht 1 */
    // 1a. Onze nieuwe medewerker Melissa moet worden toegevoegd aan de lijst met emailadressen. Haar email is: m.westerbroek@novi.nl.

// emailadressesEmployees.push("m.westerbroek@novi.nl");
// console.log(emailadressesEmployees);

    // 1b. Er zullen ongetwijfeld vaker emailadressen toegevoegd moeten worden. Binnen het bedrijf zijn er echter lijsten voor medewerkers,
    // maar ook voor studenten. Schrijf een herbruikbare functie die een email-lijst en nieuw-emailadres verwacht en deze vervolgens toevoegt aan die lijst.

/* Poging 1 - werkt niet */
// function addEmailadress(list,email) {
//     if (list === "employee") {
//         emailadressesEmployees.push(email);
//     }
//     if (list === "student") {
//         emailadressesStudents.push(email);
//     }
//    return emailadressesEmployees;
//    return emailadressesStudents;
// }
//
// const addFirstEmail = addEmailadress("student", "m.tebrake@novi-education.nl");
// console.log(addFirstEmail);
// const addSecondEmail = addEmailadress("employee", "m.beerten@novi.nl");
// console.log(addSecondEmail);


/* Poging 2 - mbv uitwerkignen - WERKT NIET! */

function addEmail(list, email) {
    list.push(email);
    return list;
}

const addFirstEmail = addEmail(emailadressesEmployees, "m.tebrake@novi-education.nl");
console.log(addFirstEmail);
const addSecondEmail = addEmail(emailadressesEmployees, "m.beerten@novi.nl");
console.log(addSecondEmail);

    /* Opdracht 2 */
    // 2a. Jouw collega wil weten of het emailadres van Nick Stuivenberg in de lijst staat. Zoek dit voor hem uit! Zijn emailadres is n.stuivenberg@novi.nl

if (emailadressesEmployees.includes("n.stuivenberg@novi.nl")) {
    console.log("Ja wij kennen dat e-mailadres");
} else {
    console.log("Nee die kennen wij niet");
}

/* Opdracht 2 - Uitwerking */
// const isNickInTheList = emailadressesEmployees.includes('n.stuivenberg@novi.nl');
// console.log(isNickInTheList);

    // 2b. Schrijf een herbruikbare functie die een email-lijst en achternaam verwacht. Wanneer er een emailadres met die achternaam voorkomt, wordt het emailadres teruggegeven.
    // Als er niets wordt gevonden, returnt de functie null.

/* Poging 1 - werkt niet, waarom krijg ik hier alleen eeken en niet Wiersma */
function giveLastName(list, lastname) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].includes(lastname)) {
            return lastname;
        } else {
            return null;
        }
    }
}
//
// Had ook misschien te maken met de verkeerde aanroep van de functie.
const tryKapers = giveLastName(emailadressesEmployees, "kapers");
console.log(tryKapers);
const tryEeken = giveLastName(emailadressesEmployees, "eeken");
console.log(tryEeken);
const tryWiersma = giveLastName(emailadressesEmployees, "wiersma");
console.log(tryWiersma);

// Zo had ik eerst de parameters.
// const tryKapers = giveLastName("employees", "kapers");
// console.log(tryKapers);
// const tryEeken = giveLastName("employees", "eeken");
// console.log(tryEeken);
// const tryWiersma = giveLastName("employees", "wiersma");
// console.log(tryWiersma);

/* Poging 2 - mbv uitwerkingen */
// let result = null;
//
// function doesInclude(list, lastname) {
//     for (let i = 0; i < list.length; i++) {
//         const currentEmail = list[i];
//         if (currentEmail.includes(lastname)) {
//             result = currentEmail;
//         }
//     }
//     return result;
// }
//
// const checkFirstEmail = doesInclude(emailadressesEmployees, "eeken");
// console.log(checkFirstEmail);
// const checkSecondEmail = doesInclude(emailadressesEmployees, "stuivenberg");
// console.log(checkSecondEmail);
// const checkThirdEmail = doesInclude(emailadressesEmployees, "kapers");
// console.log(checkThirdEmail);

    /* Opdracht 3 */
    // 3a. Collega's staan in de emaillijst op volgorde waarin ze bij Novi zjin komen werken. Nu blijkt echter dat een andere nieuwe collega, Tess,
    // bij Novi is komen werken vóór Melissa. Haar e-mailadres (t.mellink@novi.nl) moet dus worden toegevoegd op de één na laatste plek.
    // Let op: je weet niet hoe lang de lijst is!

// variabele aanmaken voor laatste index van lijst
// let lastIndexofList = emailadressesEmployees.length - 1;
// console.log(emailadressesEmployees);
// console.log(lastIndexofList);
// emailadressesEmployees.splice(lastIndexofList, 0, "t.mellink@novi.nl");
// console.log(emailadressesEmployees);


    // 3b. Bij de vorige vraag wisten we gelukkig waar Melissa stond in de lijst. Maar soms weten we dat niet! Schrijf een functie die emailadres Y bijvoegt in de lijst vóór emailadres Z.

// opdracht niet goed gelezen maar werkt ook, met andere parameters.
// function addEmailAdress(list, emailadress, where) {
//     emailadressesEmployees.splice(where, 0, emailadress);
//     return emailadressesEmployees;
// }
//
// const addEmailOne = addEmailAdress(emailadressesEmployees,"nienke@kapers.eu", 2);
// console.log(addEmailOne);

function insertEmailAdress(list, emailY, emailZ) {
    const indexOfEmailZ = list.indexOf(emailZ);
    emailadressesEmployees.splice(indexOfEmailZ, 0, emailY);
    return emailadressesEmployees;
}

const addEmailTwo = insertEmailAdress(emailadressesEmployees,"nienke@kapers.eu", "n.eeken@novi.nl");
console.log(addEmailTwo);



    /* Opdracht 4 */
    // Er staat een foutje in de lijst. Het email adres van Mitchel moet worden aangepast naar m.vandergeest@novi.nl, maar je weet niet
    // op welke plek in de lijst dit emailadres staat. Dit gebeurt helaas wel vaker. Schrijf een functie die drie parameters verwacht:
    // een array met emailadressen, het oude emailadres dat vervangen moet worden, en het nieuwe emailadres.
    // TIP: schrijf 'm eerst zoals je hem zou toepassen op bovenstaande array en schrijf die code dan om naar een functie

function replaceEmailAdress(list, emailY, emailZ) {
    const indexOfEmailY = list.indexOf(emailY);
    emailadressesEmployees.splice(indexOfEmailY, 1, emailZ);
    return emailadressesEmployees;
}

const addEmailThree = replaceEmailAdress(emailadressesEmployees,"m.vandergeest@novi-education.nl", "m.vandergeest@novi.nl");
console.log(addEmailThree);