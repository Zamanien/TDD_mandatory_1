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


    test("Count should decrease from 8 to 0 and reduce the sum of total price", () => {
        phoneLine = new PhoneLine(8)
        expect(phoneLine.count).toBe(8);
        phoneLine.decrement();
        phoneLine.multiply();
        expect(phoneLine.count).toBe(7)
        phoneLine.decrement();
        phoneLine.multiply();
        expect(phoneLine.count).toBe(6)
        phoneLine.decrement();
        phoneLine.multiply();
        expect(phoneLine.count).toBe(5)
        phoneLine.decrement();
        phoneLine.multiply();
        expect(phoneLine.count).toBe(4)
        phoneLine.decrement();
        phoneLine.multiply();
        expect(phoneLine.count).toBe(3)
        phoneLine.decrement();
        phoneLine.multiply();
        expect(phoneLine.count).toBe(2)
        phoneLine.decrement();
        phoneLine.multiply();
        expect(phoneLine.count).toBe(1)
        phoneLine.decrement();
        phoneLine.multiply();
        expect(phoneLine.count).toBe(0)
        phoneLine.multiply();
    })
})