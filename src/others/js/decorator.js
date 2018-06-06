/*
@testable
class Point {
  constructor(props) {
    this.bindName = this.bindName.bind(this);
  }

  bindName() {
    console.log('bind name: ', this);
  }

  noBindName() {
    console.log('no bind name', this);
  }

  arrowName = () => {
    console.log('arrow name', this);
  }
}

function testable(target) {
  console.log('testable');
  target.testable = true;
}

const p = new Point();
console.log(p);
p.bindName();
p.noBindName();
p.arrowName();
// 实例p上有 bindName arrowName
// Point.prototype原型链上有bindName noBindName
console.log(Point);
export default Point;
*/
