import {IsEnum, isNotEmpty, IsNotEmpty, IsOptional, IsUrl, Length, validate, validateOrReject} from 'class-validator'

import { AccessType, Category } from "../models/category.model";

export interface ICreateCategoryDto extends Omit<Category, 'id'>{}

export class CreateCategoryDto implements ICreateCategoryDto{

  @IsNotEmpty()
  @Length(4, 140)
  name!: string

  @IsUrl()
  @IsNotEmpty()
  image!: string

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined
}

(async() => {

  try {

    const dto = new CreateCategoryDto()
    dto.name = 'andres'
    dto.image = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    await validateOrReject(dto)

  } catch (error) {
    console.log(error)
  }

})()
