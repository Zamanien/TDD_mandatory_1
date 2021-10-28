//import User from './User.js';

const User = require('./User.js');

describe('user', () => {

    let user;

    beforeEach(() => {
        user = new User;
    });

    test('when a user is created, the user has an empty list of phones', () => {
        expect(user.phone_list).toEqual([]);
    });

    test('user adds phone to list', () => {
        user.addPhoneToList('Motorola G99');
        expect(user.listLength).toBe(0);
        expect(user.phone_list[0]).toBe('Motorola G99');
        user.addPhoneToList('iPhone 99');
        expect(user.listLength).toBe(1);
        expect(user.phone_list[1]).toBe('iPhone 99');
        user.addPhoneToList('Motorola G99');
        expect(user.listLength).toBe(2);
        //tests the opposite of toBe
        expect(user.phone_list[2]).not.toBe('iPhone 99');

    });

    test('User removes selected phone from list', () => {
        user.addPhoneToList('Motorola G99');
        user.addPhoneToList('iPhone 99');
        user.addPhoneToList('Samsung Galaxy 99');
        user.addPhoneToList('Sony Xperia 99');
        user.addPhoneToList('Sony Xperia 99');
        user.addPhoneToList('Huawei 99');
        user.addPhoneToList('Huawei 99');
        expect(user.phone_list[2]).toBe('Samsung Galaxy 99');
        expect(user.listLength).toBe(6);
        user.removePhoneFromList(2);
        expect(user.listLength).toBe(5);
        expect(user.phone_list[2]).not.toBe('Samsung Galaxy 99');

    });
});
