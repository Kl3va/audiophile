import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SingleProduct } from 'types/singleProduct'

import data from 'assets/starter-code/data.json'

interface cartType {
  cartItems: SingleProduct[]
  totalAmount: number
  totalPrice: number
}

const initialState: cartType = {
  cartItems: data,
  totalAmount: 0,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {},
  },
})

export default cartSlice.reducer
