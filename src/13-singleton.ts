export class MyService {

  static instance: MyService | null = null

  private constructor(private name: string) {

  }

  getName() {
    return this.name
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('deberia entrar 1 vez')
      MyService.instance = new MyService(name)
    }
    return MyService.instance
  }
}

const instance = MyService.create('service 1')
console.log(instance)
const instance2 = MyService.create('service 2')
console.log(instance2)
const instance3 = MyService.create('service 2')
console.log(instance2)

console.log(instance === instance2)
