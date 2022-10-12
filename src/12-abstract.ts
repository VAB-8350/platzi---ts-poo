import { Animal, Dog } from './09-protected'

// no puedo instanciar animal porque solo puede ser heredado gracias a abstract que esta en el archivo 09
// const animal = new Animal('pepe')
// animal.greeting()

const perro = new Dog('pedro', 'andres')
perro.greeting()

