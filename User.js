const Phone = require('./Phone.js');

const phone = new Phone;

class User {
    constructor() {
        this.listLength = -1; //used to index in list
        this.phone_list = [];
        this.phone = [phone.phone_prices];
        this.sum = 0
    }
    updatePriceSum() {
        let currentSum = 0
        for (let i = 0, len = this.listLength; i < len + 1; i++) {
            currentSum += this.phone_list[i].price;
        }
        return currentSum
    }

    removePhoneFromList(index) {
        this.phone_list.splice(index, 1);
        this.listLength -= 1;
        this.sum = this.updatePriceSum()
    }

    addPhone(index) {
        this.listLength += 1;
        this.phone_list[this.listLength] = phone.phone_prices.data[index];
        this.sum = this.updatePriceSum()

    } 
    checkPriceSum(){
        return this.sum;
    }
}
module.exports = User