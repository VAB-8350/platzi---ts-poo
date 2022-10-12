export class MyDate {

  constructor(
    private year: number = 1993,
    private month: number = 7,
    private day: number = 9
  ) {}

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

const mydate2 = new MyDate()
console.log('vacio:', mydate2.printFormat())

const mydate3 = new MyDate(2022)
console.log('con anio:', mydate3.printFormat())
