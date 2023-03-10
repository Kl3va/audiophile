import { createSlice } from '@reduxjs/toolkit'

type cartArrayType = {
  name: string
  image: string
  amount: number
  id: number
  price: number
}

type cartType = {
  cartItems: cartArrayType[]
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
