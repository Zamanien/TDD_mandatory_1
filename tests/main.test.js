const Purchase = require('../main');

test('Buy only internet connection should return list', () => {

    let purchase = new Purchase;
    // toggle with true the internet connection
    let price = purchase.toggleInternetConnection(true);
    expect(price).toBe(200);

    let orderList = purchase.buy();
    expect(orderList).toStrictEqual([
        {
            item: "InternetConnection",
            price: 201
        }
    ]);
});

test('Buy internet connection, 4 phone lines, should return list', () => {

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
            item: "InternetConnection",
            price: 200
        },
        {
            item: "PhoneLine",
            quantity: 4,
            price: 600
        }
    ]);
});

test('Buy internet connection, 4 phone lines and cellphones, should return list', () => {

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

    //Adding 4 cellphones
    expect(purchase.addPhone('Motorola G99')).toBe(1600);
    expect(purchase.addPhone('Motorola G99')).toBe(2400);
    expect(purchase.addPhone('Huawei 99')).toBe(3300);
    expect(purchase.addPhone('iPhone 99')).toBe(9300);



    let orderList = purchase.buy();
    expect(orderList).toStrictEqual([
        {
            item: "InternetConnection",
            price: 200
        },
        {
            item: "PhoneLine",
            quantity: 4,
            price: 600
        },
        {
            item: "Cellphone",
            name: "Motorola G99",
            price: 800
        },
        {
            item: "Cellphone",
            name: "Motorola G99",
            price: 800
        },
        {
            item: "Cellphone",
            name: "Huawei 99",
            price: 900
        },
        {
            item: "Cellphone",
            name: "iPhone 99",
            price: 6000
        }
    ]);
});

test('Select internet connection, 4 phone lines and cellphones -> Then remove phones', () => {

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
    // remove 1 phoneline
    price = purchase.decrementPhoneLines()
    expect(price).toBe(650);

    //Adding 4 cellphones
    expect(purchase.addPhone('Motorola G99')).toBe(1450);
    expect(purchase.addPhone('Motorola G99')).toBe(2250);
    expect(purchase.addPhone('Huawei 99')).toBe(3150);
    expect(purchase.addPhone('iPhone 99')).toBe(9150);

    //deleting 2 cellphones
    expect(purchase.removePhoneFromList('Motorola G99')).toBe(8350);
    expect(purchase.removePhoneFromList('Huawei 99')).toBe(7450);

});

test('Get the pop-up alert if nothing is selected', () => {
    let purchase = new Purchase;

    expect(() => {
        purchase.buy();
    }).toThrow('Nothing is selected. Please select something. Best regards, Archana :)');
});