import { createSlice } from '@reduxjs/toolkit'
import { SingleProduct } from 'types/singleProduct'

interface cartType {
  cartItems: SingleProduct[]
  totalAmount: number
  totalPrice: number
}

const initialState: cartType = {
  cartItems: [],
  totalAmount: 0,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
})

export default cartSlice.reducer
