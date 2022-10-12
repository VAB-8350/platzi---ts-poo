import { ProductMemoryServices } from './services/product-memory.services'

const productService = new ProductMemoryServices()

productService.create({
  title: 'producto 1',
  price: 20,
  categoryId: 4,
  description: 'bla bla bla',
  images: []
})

const products = productService.getAll()

const  productId = products[0].id

productService.update(productId, {
  title: 'otro nombre',
  price: 26
})

console.log(productService.findOne(productId))
