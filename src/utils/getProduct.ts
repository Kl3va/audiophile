import { SingleProduct } from 'types/singleProduct'

export const getSingleProduct = (arr: SingleProduct[], product: string) => {
  const items = arr.find((item) => {
    return item.slug === product
  })
  return items
}
