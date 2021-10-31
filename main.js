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

        return this.getTotalPrice();

    }

    incrementPhoneLines() {
        let phone_line_price = this.phone_lines.increment();

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
            })
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

        //set global price field
        this.price = sum;

        return this.price;

    }


}


module.exports = Purchase;
