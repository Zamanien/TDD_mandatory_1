class User{
    constructor() {
        this.top = -1; //used to index in list
        this.phone_list = {};
    }

    addPhoneToList(value){
        this.top += 1; //incrementing for next item to be added to list
        this.phone_list[this.top] = value;
    }
}

module.exports = User