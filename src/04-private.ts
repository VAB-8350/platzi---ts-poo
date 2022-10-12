export class MyDate {
  private year: number
  private month: number
  private day: number

  constructor(year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }

  printFormat(): string {
    const day = this.addPadding(this.day)
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

  getDay (): number {
    return this.day
  }
}

const mydate = new MyDate(1993, 7, 10)
console.log(mydate.printFormat())
console.log(mydate.getDay())
