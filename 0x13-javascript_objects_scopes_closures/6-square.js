#!/usr/bin/node
const Sq = require('./5-square');
class Square extends Sq {
  constructor (size) {
    super(size);
    this.size = size;
  }

  charPrint (c) {
    if (!c) super.print();
    else {
      let v = '';
      for (let i = 0; i < this.width; i++) {
        for (let j = 0; j < this.width; j++) {
          v += c;
        }
        if (i !== this.width - 1) v += '\n';
      }
      console.log(v);
    }
  }
}
module.exports = Square;
