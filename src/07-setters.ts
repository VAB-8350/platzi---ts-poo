export class MyDate {

  constructor(
    private year: number = 1993,
    private _month: number = 7,
    private _day: number = 9
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day)
    const month = this.addPadding(this._month)
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
        this._month += amount
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

  get month(): number {
    return this._month
  }

  set month(newMonth: number) {

    if (newMonth <= 12 && newMonth > 0) {
      this._month = newMonth

    } else {
      throw new Error('month out of range')
    }
  }

  get isLeapYear(): boolean {
    if(this.year % 400 === 0) return true
    if(this.year % 100 === 0) return false
    return this.year % 4 === 0
  }
}

const mydate = new MyDate()
console.log(mydate.printFormat())

mydate.month = 4;
console.log(mydate.printFormat())

mydate.month = 34; // lo va a romper porque set no acepta mas que 12
console.log(mydate.month)




