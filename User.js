class User {
    constructor() {
        this.listLength = -1; //used to index in list
        this.phone_list = [];
    }

    addPhoneToList(value) {
        this.listLength += 1; //incrementing for next item to be added to list
        this.phone_list[this.listLength] = value;
    }

    removePhoneFromList(index) {
        this.phone_list.splice(index, 1);
        this.listLength -= 1;
    }

}

module.exports = User