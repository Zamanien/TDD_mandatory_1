const InternetConnection = require("./InternetConnection");
const PhoneLine = require("./PhoneLine");

class Purchase {
    constructor() {
        this.internet_connection = new InternetConnection();
        this.phone_lines = new PhoneLine();
        this.price = 0;
        // this.cell_phones
    }


    toggleInternetConnection(boolean) {

        let int_con_price = this.internet_connection.toggle(boolean);

        this.price += int_con_price;
        return this.price

    }

    incrementPhoneLines() {
        let phone_line_price = this.phone_lines.increment();
        this.price += phone_line_price;

        return this.price;
    }

    buy() {

        let purchaseList = [];
        if (this.internet_connection.connection == true) {
            purchaseList.push({
                item: InternetConnection,
                price: this.internet_connection.price
            });
        }
        return purchaseList;
    }


}


module.exports = Purchase;
