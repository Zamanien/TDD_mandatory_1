const Cellphone = require('./Cellphone.js');

describe('user', () => {

    let cellphone;

    beforeEach(() => {
        cellphone = new Cellphone;
    });

    test('when a user is created, the user has an empty list of phones', () => {
        expect(cellphone.selected_phones).toEqual([]);
        expect(cellphone.getPrice()).toBe(0);
    });

    test('user adds phone to list', () => {
        cellphone.addPhone('Motorola G99');
        cellphone.addPhone('iPhone 99');
        expect(cellphone.getPrice()).toBe(6800);


    });

    test('User removes selected phone from list', () => {
        cellphone.addPhone('Motorola G99');
        cellphone.addPhone('iPhone 99');

        cellphone.removePhoneFromList('Motorola G99');
        expect(cellphone.getPrice()).toBe(6000);

    });

});
