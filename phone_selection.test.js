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
        user.addPhone(0);
        expect(user.listLength).toBe(0);
        expect(user.phone_list[0].price).toBe(800);
        expect(user.phone_list[0].phone).toBe('Motorola G99');
        user.addPhone(0);
        expect(user.listLength).toBe(1);
        expect(user.phone_list[1].price).toBe(800);
        expect(user.phone_list[1].phone).toBe('Motorola G99');

        user.addPhone(2);
        expect(user.listLength).toBe(2);
        expect(user.phone_list[2].price).toBe(1000);
        expect(user.phone_list[2].phone).toBe('Samsung Galaxy 99');
        expect(user.checkPriceSum()).toBe(2600);

        user.removePhoneFromList(2);
        expect(user.listLength).toBe(1);
        expect(user.checkPriceSum()).toBe(1600);

    });

    test('User removes selected phone from list', () => {
        user.addPhone(0);
        expect(user.listLength).toBe(0);
        expect(user.phone_list[0].price).toBe(800);
        expect(user.phone_list[0].phone).toBe('Motorola G99');
        user.addPhone(0);
        expect(user.listLength).toBe(1);
        expect(user.phone_list[1].price).toBe(800);
        expect(user.phone_list[1].phone).toBe('Motorola G99');
        user.addPhone(2);
        expect(user.listLength).toBe(2);
        expect(user.phone_list[2].price).toBe(1000);
        expect(user.phone_list[2].phone).toBe('Samsung Galaxy 99');
        user.addPhone(2);
        expect(user.listLength).toBe(3);
        expect(user.phone_list[3].price).toBe(1000);
        expect(user.phone_list[3].phone).toBe('Samsung Galaxy 99');
        user.addPhone(1);
        expect(user.listLength).toBe(4);
        expect(user.phone_list[4].price).toBe(6000);
        expect(user.phone_list[4].phone).toBe('iPhone 99');
        user.addPhone(1);
        expect(user.listLength).toBe(5);
        expect(user.phone_list[5].price).toBe(6000);
        expect(user.phone_list[5].phone).toBe('iPhone 99');
        expect(user.checkPriceSum()).toBe(15600);


        //When removing item from index 3, previous index 4 takes its place
        user.removePhoneFromList(3);
        expect(user.listLength).toBe(4);
        expect(user.phone_list[3].price).toBe(6000);
        expect(user.phone_list[3].phone).toBe('iPhone 99');

        //Expecting the sum to be 14600 after removing Samsung Galaxy 99 | 1000 dkk
        expect(user.checkPriceSum()).toBe(14600);

    });

});
