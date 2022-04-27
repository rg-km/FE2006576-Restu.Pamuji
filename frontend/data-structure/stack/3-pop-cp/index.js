// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi pop.

module.exports = class Stack {
    constructor() {
      // TODO: answer here
      this.data = [];
      this.size = 10;
      this.top = -1;
    }
  
    push(elemen) {
      // TODO: answer here
      if (this.top == this.size - 1) {
        throw "stack overflow";
      }
      this.data[(this.top += 1)] = elemen;
    }
  
    pop() {
      // TODO: answer here
      if (this.top == -1) {
        throw "stack underflow";
      }
      let poppedValue = this.data.pop();
      this.top -= 1;
      return poppedValue;
    }
  };  