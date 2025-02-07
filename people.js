// Importa la tua funzione da names.js
// Importa la tua funzione da hobbies.js
// Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

const fullName = require("./names.js")
const hobbies = require("./hobbies.js")

function people () {
    return {
        fullName: fullName("Mario", "Rossi"),
        hobbies: hobbies("coding", "tv", "games"),
    }
}

console.log(people())