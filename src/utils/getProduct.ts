import { SingleProduct } from 'types/singleProduct'

export const getSingleProduct = (
  arr: SingleProduct[],
  id: string | undefined
): SingleProduct => {
  const items = arr.find((item) => {
    return item.slug === id
  })

  if (!items) throw new Error(`Product ${id} doesn't exist`)

  return items
}

// export const geSingleProduct = (arr: SingleProduct[], product: string) => {
//   return arr.find((item: SingleProduct) => item.slug === product)
// }
