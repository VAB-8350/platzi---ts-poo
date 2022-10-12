import axios from 'axios'

( async () => {
  function delay (time: number) {
    const promise = new Promise<string> ((resolve) => {
      setTimeout(() => {
        resolve('string')
      }, time)
    })
    return promise
  }

  async function getProducts() {
    const promise = await axios.get('https://api.escuelajs.co/api/v1/products')
    return promise.data
  }

  // console.log('hola')
  // const rta = await delay(3000)
  // console.log(rta)

  console.log(await getProducts())
})()
