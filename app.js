let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromEuroToYen = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    // Retornamos el valor en dólares
    return valueInYen;
}
const fromEuroToPound = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    // Retornamos el valor en dólares
    return valueInPound;
}

// fromDollarToEuro equivale a 1 Dollar = 1 Euro / oneEuroIs.USD

// fromYenToEuro equivale a 1 yen = 1 Euro / oneEuroIs.JPY

// fromEuroToPound equivale a 1 Pound = 1 Euros / oneEuroIs.GBP 

function fromDollarToYen (valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD // línea 35
    let valueInYen = fromEuroToYen(valueInEuro)
    return valueInYen
}

console.log(fromDollarToYen(20))

function fromYenToPound (valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY // línea 37
    let valueInPound = fromEuroToPound(valueInEuro)
    return valueInPound
}

console.log(fromYenToPound(20))

module.exports = {fromEuroToDollar, fromEuroToYen, fromEuroToPound, fromDollarToYen, fromYenToPound}