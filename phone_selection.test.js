//import User from './User.js';

const User = require('./User.js');

describe('user', () => {
    
    let user;

    beforeEach(() => {
        user = new User;
    });
    
    test('when a user is created, the user has an empty list of phones', () => {
        expect(user.phone_list).toEqual({});        
    });

    test('user adds phone to list', () => {
        user.addPhoneToList('Motorola G99');
        expect(user.top).toBe(0);
        expect(user.phone_list[0]).toBe('Motorola G99');
        user.addPhoneToList('iPhone 99');
        expect(user.top).toBe(1);
        expect(user.phone_list[1]).toBe('iPhone 99');
        user.addPhoneToList('Motorola G99');
        expect(user.top).toBe(2);
        //tests the opposite of toBe
        expect(user.phone_list[2]).not.toBe('iPhone 99');

    });
});
