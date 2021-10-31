class PhoneLine {


  constructor(count = 0) {
    this.count = count
    this.price_per_phoneline = 150
    this.total = this.getPrice();

  }

  increment() {
    if (this.count >= 8) {
      throw Error("You have exceeded the max phonelines")
    }
    this.count++

    return this.getPrice();
  }

  decrement() {
    if (this.count <= 0) {
      throw Error("You already have selected the min phonelines")
    }
    this.count--

    return this.getPrice();
  }

  getPrice() {
    this.total = (this.price_per_phoneline * this.count);

    return this.total;
  }

  getCount(){
    return this.count
  }
}



module.exports = PhoneLine