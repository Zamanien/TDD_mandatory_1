const Phone = require('./Phone.js');

const phone = new Phone;

class User {
    constructor() {
        this.listLength = -1; //used to index in list
        this.phone_prices = [];
        this.cell_phones = [];
        this.sum = 0
    }
    updatePriceSum() {
        let currentSum = 0
        for (let i = 0, len = this.listLength; i < len + 1; i++) {
            currentSum += this.phone_prices[i];
        }
        return currentSum
    }

    removePhoneFromList(name) {
        let index = this.cell_phones.indexOf(name)
        this.phone_prices.splice(index, 1);
        this.cell_phones.splice(index, 1);
        this.listLength -= 1;
        this.sum = this.updatePriceSum()
    }

    addPhone(name) {
        this.listLength += 1;
        this.phone_prices[this.listLength] = phone.phone_category[name];
        this.cell_phones[this.listLength] = name;
        this.sum = this.updatePriceSum()

    } 
    checkPriceSum(){
        return this.sum;
    }
}
module.exports = User