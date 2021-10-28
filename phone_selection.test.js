const select_phone = require('./phone_selection')

describe('Phone_select', () => {
    test('Know when we have selected an item', () => {
        expect(select_phone.isSelected(true)).toBeTruthy();
    });
});