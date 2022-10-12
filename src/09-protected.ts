export abstract class Animal {
  constructor(protected name: string){}

  move() {
    console.log('Moving along!')
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }

  protected doSomething() {
    console.log('doo')
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
      console.log(`Woof! ${this.name}`)
    }
    this.doSomething()
  }

  move() {
    console.log('moving as a dog')
  }
}

const matu = new Dog('matute', 'andres')
console.log(matu.greeting())
matu.woof(2)
console.log(matu.owner)
matu.move()
