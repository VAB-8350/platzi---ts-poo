export class Animal {
  constructor(public name: string){}

  move() {
    console.log('Moving along!')
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }
}

export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string
    ) {
      super(name)
    }

  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('Woof!')
    }
  }
}

const fifi = new Animal('fifi')
console.log(fifi.greeting())

const matu = new Dog('matute', 'andres')
console.log(matu.greeting())
matu.woof(3)
console.log(matu.owner)
