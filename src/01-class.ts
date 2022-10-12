const date = new Date()
date.getHours()
date.getTime()

const date2 = new Date(1993, 1, 12)
date2.getHours()
date2.getTime()

console.log(date)
console.log(date2)

class MyDate {
  year: number
  month: number
  day: number

  constructor(year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }
}

const mydate = new MyDate(2021, 2, 13)
console.log(mydate)
