export class MyDate {

  constructor(
    private year: number = 1993,
    private month: number = 7,
    private _day: number = 9
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day)
    const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`
  }

  private addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        this._day += amount
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

  get day (): number {
    return this._day
  }

  get isLeapYear(): boolean {
    if(this.year % 400 === 0) return true
    if(this.year % 100 === 0) return false
    return this.year % 4 === 0
  }
}

const mydate = new MyDate(1993, 7, 10)
console.log(mydate.printFormat())

console.log(mydate.day)
console.log(mydate.isLeapYear)

const mydate2 = new MyDate(2000, 7, 10)
console.log(mydate2.isLeapYear)
