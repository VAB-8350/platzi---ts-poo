import { ProductHttpService } from "./services/product-http.service";



( async () => {

  try {

    const productService = ProductHttpService.init()

    console.log('--'.repeat(10))

    const products = await productService?.getAll();

    const productId = products && products[0].id

    if (productId) {
      await productService?.update(productId, {
        price: 8350,
        title: 'andres'
      })

      const product = await productService?.findOne(productId)
      console.log(product)
    }

  } catch (error) {
    console.error(error)
  }


})()

