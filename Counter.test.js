const Counter = require('./Counter.js');

describe('counter', () => {

    let counter = new Counter;

    /* beforeEach(() => {
         counter = new counter;
     }); */

    test('at the first user has no phone line selected', () => {

        expect(counter.count).toBe(0);
       
    })


    test("Count should increase from 0 to 8 and sum up the total price", () => {
        expect(counter.count).toBe(0) ;
        counter.increment();
        counter.multiply();
        expect(counter.count).toBe(1)
        counter.increment();
        counter.multiply();
        expect(counter.count).toBe(2)
        counter.increment();
        counter.multiply();
        expect(counter.count).toBe(3)
        counter.increment();
        counter.multiply();  
        expect(counter.count).toBe(4)
        counter.increment();
        counter.multiply();
        expect(counter.count).toBe(5)
        counter.increment();
        counter.multiply();
        expect(counter.count).toBe(6)
        counter.increment();
        counter.multiply();
        expect(counter.count).toBe(7)
        counter.increment();
        counter.multiply();
        expect(counter.count).toBe(8)
        counter.multiply();
    })


    test("Count should decrease from 8 to 0 and reduce the sum of total price", () => {
        expect(counter.count).toBe(8) ;
        counter.decrement();
        counter.multiply();
        expect(counter.count).toBe(7)
        counter.decrement();
        counter.multiply();
        expect(counter.count).toBe(6)
        counter.decrement();
        counter.multiply();
        expect(counter.count).toBe(5)
        counter.decrement();
        counter.multiply();  
        expect(counter.count).toBe(4)
        counter.decrement();
        counter.multiply();
        expect(counter.count).toBe(3)
        counter.decrement();
        counter.multiply();
        expect(counter.count).toBe(2)
        counter.decrement();
        counter.multiply();
        expect(counter.count).toBe(1)
        counter.decrement();
        counter.multiply();
        expect(counter.count).toBe(0)
        counter.multiply();
    })
}) 