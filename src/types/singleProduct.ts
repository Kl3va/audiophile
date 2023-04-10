export interface SingleProduct {
  id: number
  slug: string
  name: string
  productQuantity: number
  image: ProductImages
  category: string
  categoryImage: ProductImages
  new: boolean
  price: number
  description: string
  features: string
  includes: ProductItems[]
  gallery: ProductGallery
  others: Others[]
}

interface ProductImages {
  mobile: string
  tablet: string
  desktop: string
}

interface ProductItems {
  quantity: number
  item: string
}

interface ProductGallery {
  first: ProductImages
  second: ProductImages
  third: ProductImages
}

interface Others {
  slug: string
  name: string
  image: ProductImages
}
