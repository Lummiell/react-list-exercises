interface PolynomialData {
  coefficient: number;
  exponent: number;
}
class Polynomial {
  coefficient: number;
  exponent: number;
  next: Polynomial | null;
  constructor(
    coefficient: number,
    exponent: number,
    next: Polynomial | null = null
  ) {
    this.coefficient = coefficient;
    this.exponent = exponent;
    this.next = next;
  }
  Add = (coefficient: number) => {
    this.coefficient += coefficient;
  };
}
class PolynomialLinkedList {
  head: Polynomial | null;
  constructor() {
    this.head = null;
  }
  Add = (coefficient: number, exponent: number) => {
    if (!this.head) {
      this.head = new Polynomial(coefficient, exponent);
      return;
    }
    let tail: Polynomial | null = this.head;
    do {
      if (tail.exponent > exponent) {
        let newPoly = new Polynomial(coefficient, exponent, this.head);
        this.head = newPoly;
        break;
      }
      if (tail.exponent === exponent) {
        tail.Add(coefficient);
        break;
      } else {
        if (tail.next) {
          if (tail.next.exponent > exponent) {
            tail.next = new Polynomial(coefficient, exponent, tail.next);
            break;
          }
          tail = tail.next;
        } else {
          tail.next = new Polynomial(coefficient, exponent);
          break;
        }
      }
    } while (tail);
    return;
  };
  toArray = () => {
    const arr: PolynomialData[] = [];
    let polyNode = this.head;
    while (polyNode) {
      arr.push(polyNode);
      polyNode = polyNode.next;
    }
    return arr;
  };
}
export default PolynomialLinkedList;
