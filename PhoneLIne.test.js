const PhoneLine = require('./PhoneLine.js');

describe('counter', () => {

    let counter = new PhoneLine;

    // beforeEach(() => {
    //     counter = new PhoneLine;
    // });

    test('VALID BOUNDARY VALUE: at the first user has no phone line selected', () => {

        expect(counter.count).toBe(0);

    })

    test('VALID BOUNDARY VALUE: first time to increment should return price for 1 phoneline', () => {
        newPhoneLine = new PhoneLine;
        let price = newPhoneLine.increment();
        expect(price).toBe(150);
    });

    test('VALID VALUE: increment phonelines from 3 to 4 should return total price', () => {
        newPhoneLine = new PhoneLine(3);
        let price = newPhoneLine.increment();
        // console.log(newPhoneLine.count);
        expect(newPhoneLine.count).toBe(4);
        expect(price).toBe(600);
    });

    test('VALID BOUNDARY VALUE: increment phonelines from 7 to 8 should return total price', () => {
        newPhoneLine = new PhoneLine(7);
        let price = newPhoneLine.increment();
        expect(newPhoneLine.count).toBe(8);
        expect(price).toBe(1200);
    });

    test('INVALID VALUE: incrementing more than 8 phonelines should not increment and throw an error', () => {
        newPhoneLine = new PhoneLine(8);
        expect(() => {
            newPhoneLine.increment();
          }).toThrow("You have exceeded the max phonelines")
        let price = newPhoneLine.total;
        expect(newPhoneLine.count).toBe(8);
        expect(price).toBe(1200);
    });



    test('VALID VALUE: decrement phonelines from 8 to 7 should return total price', () => {
        newPhoneLine = new PhoneLine(8);
        let price = newPhoneLine.decrement();
        expect(newPhoneLine.count).toBe(7);
        expect(price).toBe(1050);
    });

    test('VALID VALUE: decrement phonelines from 5 to 4 should return total price', () => {
        newPhoneLine = new PhoneLine(5);
        let price = newPhoneLine.decrement();
        expect(newPhoneLine.count).toBe(4);
        expect(price).toBe(600);
    });

    test('VALID VALUE: decrement phonelines from 1 to 0 should return total price', () => {
        newPhoneLine = new PhoneLine(1);
        let price = newPhoneLine.decrement();
        expect(newPhoneLine.count).toBe(0);
        expect(price).toBe(0);
    });


    test('INVALID VALUE: decrementing less then 0 phonelines should not decrement and throw an error', () => {
        newPhoneLine = new PhoneLine(0);
        expect(() => {
            newPhoneLine.decrement();
          }).toThrow("You already have selected the min phonelines")
        let price = newPhoneLine.total;
        expect(newPhoneLine.count).toBe(0);
        expect(price).toBe(0);

    });
});