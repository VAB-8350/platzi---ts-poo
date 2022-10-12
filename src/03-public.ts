export class MyDate {
  public year: number
  public month: number
  public day: number

  constructor(year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        this.day += amount
        break;

      case 'months':
        this.month += amount
        break;

      case 'years':
        this.year += amount
        break;

      default:
        break;
    }
  }
}

const mydate = new MyDate(1993, 7, 9)
console.log(mydate.day)
mydate.day = 12
console.log(mydate.day)
