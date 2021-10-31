//import User from './User.js';

const User = require('./User.js');
const Phone = require('./Phone.js');

describe('user', () => {

    let user;

    beforeEach(() => {
        user = new User;
    });

    test('when a user is created, the user has an empty list of phones', () => {
        expect(user.phone_list).toEqual([]);
    });

    test('user adds phone to list', () => {
        user.addPhone('Motorola G99');
        user.addPhone('iPhone 99');
        expect(user.checkPriceSum()).toBe(6800);


    });

    test('User removes selected phone from list', () => {
        user.addPhone('Motorola G99');
        user.addPhone('iPhone 99');

        user.removePhoneFromList('Motorola G99');
        expect(user.checkPriceSum()).toBe(6000);

    });

});
