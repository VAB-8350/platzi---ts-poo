import axios from 'axios'

import { Product } from './models/product.model'

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
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products') // mejor opcion
    return data //as Product[]  no muy recomendado
  }

  const products = await getProducts()
  console.log(products.map(item => `${item.title}: $${item.price}`))

})()
