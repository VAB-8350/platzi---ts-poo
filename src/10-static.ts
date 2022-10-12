// console.log(Math.PI)
// console.log(Math.max(1,5,2,6,7,3,5))

class MyMath {
  static readonly PI = 3.1415

  static max(...numbers: number[]): number {
    return numbers.reduce((max, item) => item >= max ? item : max, numbers[0])
  }
}

console.log(MyMath.PI)
console.log(MyMath.max(1,5,2,3,65,1))
const numbers = [6,3,7,3,2]
console.log(MyMath.max(...numbers))
console.log(MyMath.max(-3,-1,-5))
