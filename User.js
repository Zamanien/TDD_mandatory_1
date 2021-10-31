const Phone = require('./Phone.js');

const phone = new Phone;

class User {
    constructor() {
        this.listLength = -1; //used to index in list
        this.phone_list = [];
        this.phone = [phone.phone_prices];
        this.phone_names = [];
        this.sum = 0
    }
    updatePriceSum() {
        let currentSum = 0
        for (let i = 0, len = this.listLength; i < len + 1; i++) {
            currentSum += this.phone_list[i];
        }
        return currentSum
    }

    removePhoneFromList(name) {
        let index = this.phone_names.indexOf(name)
        this.phone_list.splice(index, 1);
        this.phone_names.splice(index, 1);
        this.listLength -= 1;
        this.sum = this.updatePriceSum()
    }

    addPhone(name) {
        this.listLength += 1;
        this.phone_list[this.listLength] = phone.phone_prices[name];
        this.phone_names[this.listLength] = name;
        this.sum = this.updatePriceSum()

    } 
    checkPriceSum(){
        return this.sum;
    }
}
module.exports = User