const InternetConnection = require('./InternetConnection');
const Purchase = require('./main.js');
const PhoneLine = require('./PhoneLine');

test('Buy only internet connection should return list', () => {

    let purchase = new Purchase;
    // toggle with true the internet connection
    let price = purchase.toggleInternetConnection(true);
    expect(price).toBe(200);

    let orderList = purchase.buy();
    expect(orderList).toStrictEqual([
        {
            item: InternetConnection,
            price: 200
        }
    ])
});

test('Buy internet connection and 4 phone lines, should return list', () => {

    let purchase = new Purchase;
    // toggle with true the internet connection
    let price = purchase.toggleInternetConnection(true);
    expect(price).toBe(200);

    // add 4 phonelines
    price = purchase.incrementPhoneLines();
    price = purchase.incrementPhoneLines();
    price = purchase.incrementPhoneLines();
    price = purchase.incrementPhoneLines();
    expect(price).toBe(800);



    let orderList = purchase.buy();
    expect(orderList).toStrictEqual([
        {
            item: InternetConnection,
            price: 200
        },
        {
            item: PhoneLine,
            quantity: 4,
            price: 800
        }
    ])
});