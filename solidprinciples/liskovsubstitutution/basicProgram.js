// substitutability is aa  principle in oop stating that in a computer program if S is a subtype of type T,then object of type T may  be replaced with object type of S

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.breadth = breadth;
  }
  setWidth(width) {
    this.width = width;
  }
  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setheight(height) {
    this.height = height;
    this.width = height;
  }
}

function increaseRectangleWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}

const ractangle1 = new Rectangle(10, 2);
const rectangle2 = new Square(5, 5);

increaseRectangleWidth(rectangle1);
increaseRectangleWidth(rectangle2);


console.log(ractangle1.area());
console.log(rectangle2.area());


// liskov principle is voilated by this code/program