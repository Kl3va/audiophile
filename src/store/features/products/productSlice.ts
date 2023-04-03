import { createSlice } from '@reduxjs/toolkit'
import { SingleProduct } from 'types/singleProduct'
//DATA
import data from 'assets/starter-code/data.json'

interface ProductSliceProp {
  products: SingleProduct[]
}

const initialState: ProductSliceProp = {
  products: data,
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

export default productSlice.reducer
