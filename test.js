// const {multiply, division, fromEuroToDollar, fromEuroToYen, fromEuroToPound, fromDollartoYen, fromYenToPound} = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test('One euro should be 1.07 dollars', () => {
    const {fromDollarToYen} = require('./app.js')
    const yen = fromDollarToYen(20)
    const expected = (20 / 1.07) * 156.5
    expect(fromDollarToYen(20)).toBeCloseTo(2925.23)
})

test('One euro should be 156,5 yen', () => {
    const {fromYenToPound} = require('./app.js')
    const pound = fromYenToPound(20)
    const expected = (20 / 156.5) * 0.87
    expect(fromYenToPound(20)).toBeCloseTo(0.11)
})