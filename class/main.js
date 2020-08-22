'use strict';

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(20,100);

console.log(square.calcArea());
console.log(long.calcArea());