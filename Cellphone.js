class Cellphone {
    constructor() {
        this.listLength = -1; //used to index in list
        this.phone_prices = [];
        this.selected_phones = [];
        this.sum = 0

        this.phone_category = {
            'Motorola G99': 800,
            'iPhone 99': 6000,
            'Samsung Galaxy 99': 1000,
            'Sony Xperia 99': 900,
            'Huawei 99': 900
        };
    }
    updatePriceSum() {
        let currentSum = 0
        for (let i = 0, len = this.listLength; i < len + 1; i++) {
            currentSum += this.phone_prices[i];
        }
        return currentSum
    }

    removePhoneFromList(name) {
        let index = this.selected_phones.indexOf(name)
        this.phone_prices.splice(index, 1);
        this.selected_phones.splice(index, 1);
        this.listLength -= 1;
        this.sum = this.updatePriceSum()
    }

    addPhone(name) {
        this.listLength += 1;
        this.phone_prices[this.listLength] = this.phone_category[name];
        this.selected_phones[this.listLength] = name;
        this.sum = this.updatePriceSum()

    } 
    getPrice(){
        return this.sum;
    }
}
module.exports = Cellphone