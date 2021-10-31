
class InternetConnection {

    constructor() {

        this.connection = false;
        this.price = 200;

    }

    toggle(boolean) {

        this.connection = boolean;
        return this.getPrice();

    }

    getPrice() {
        if (this.connection == true)
            return this.price;
        else
            return 0;
    }
}


module.exports = InternetConnection