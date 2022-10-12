import { Dog } from './09-protected'

function getValue(value: unknown) {
  return value
}

// no se puede hacer si no contemplo todos los posibles tipos de parametros
// getValue(12).toFixed()
// getValue('12').toFixed()
// getValue([]).foreach()

// se le pasa como parametro el tipo de la variable
function getval<myType, mydate2>(value: myType) {
  const array: mydate2[] = []
  return value
}

getval<number , string>(12).toFixed
getval('12').length
getval([]).length

const matu = new Dog('matu', 'yo')
console.log(getval<Dog , string>(matu))

