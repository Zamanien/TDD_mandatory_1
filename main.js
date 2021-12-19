const InternetConnection = require("./model/InternetConnection");
const PhoneLine = require("./model/PhoneLine");
const Cellphone = require('./model/Cellphone');

class Purchase {
    constructor() {

        this.internet_connection = new InternetConnection();
        this.phone_lines = new PhoneLine();
        this.price = 0;
        this.cell_phones = new Cellphone();
    }

    toggleInternetConnection(boolean) {

        this.internet_connection.toggle(boolean);
        return this.getTotalPrice();
    }

    incrementPhoneLines() {

        this.phone_lines.increment();
        return this.getTotalPrice();
    }

    decrementPhoneLines(){
        
        this.phone_lines.decrement();
        return this.getTotalPrice();
    }

    addPhone(name) {

        this.cell_phones.addPhone(name);
        return this.getTotalPrice();
    }

    removePhoneFromList(name) {

        this.cell_phones.removePhoneFromList(name);
        return this.getTotalPrice();
    }

    buy() {

        let purchaseList = [];
        // internet Connection Purchase item
        if (this.internet_connection.connection == true) {
            purchaseList.push({
                item: "InternetConnection",
                price: this.internet_connection.price
            });
        }
        // Phone Lines purchase items
        if (this.phone_lines.getCount() > 0) {
            purchaseList.push({
                item: "PhoneLine",
                quantity: this.phone_lines.getCount(),
                price: this.phone_lines.getPrice()
            });
        }
        for (let i = 0, len = this.cell_phones.listLength; i < len + 1; i++) {
            purchaseList.push({
                item: "Cellphone",
                name: this.cell_phones.selected_phones[i],
                price: this.cell_phones.phone_prices[i]
            });
        }

        if (purchaseList.length == 0) {
            throw Error('Nothing is selected. Please select something !');
        }
        return purchaseList;
    }

    getTotalPrice() {

        let sum = 0;
        // get price about internet connection
        sum = this.internet_connection.getPrice();
        // get price about phone lines
        sum += this.phone_lines.getPrice();
        // get price about cell phones
        sum += this.cell_phones.getPrice();
        //set global price field
        this.price = sum;

        return this.price;

    }

}


module.exports = Purchase;
