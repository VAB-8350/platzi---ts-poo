import { Category } from "../models/category.model"
import { Product } from "../models/product.model"
import axios from "axios"
import { UpdateProductDto } from "../dtos/product.dto"

export class BaseHttpService<TypeClass> {

  constructor(
    private url: string
  ){}


  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get(this.url)
    return data
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes)
    return data
  }
}

// const service = new BaseHttpService<string>()
// const algo = service.getAll()

// const service1 = new BaseHttpService<Category>()
// const algo2 = service1.getAll()



( async () => {

  const productService = new BaseHttpService<Product>('https://api.escuelajs.co/api/v1/products')
  const res = await productService.getAll()
  console.log(res.length)

  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'OTRO',
    price: 423
  })


  const categoryService = new BaseHttpService<Category>('https://api.escuelajs.co/api/v1/categories')
  const res2 = await categoryService.getAll()
  console.log(res2.length)

})()
