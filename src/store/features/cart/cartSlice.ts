import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SingleProduct } from 'types/singleProduct'

// import data from 'assets/starter-code/data.json'
// import modalSlice from '../modal/modalSlice'

import { toast } from 'react-toastify'

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
  reducers: {
    addToCart: (state, action: PayloadAction<SingleProduct>) => {
      const cartItem = action.payload
      if (state.cartItems.some((item) => item.id === cartItem.id)) {
        toast.warning(`${action.payload.name} already exists in cart!`)
      } else {
        state.cartItems.push(cartItem)
        toast.success(`${action.payload.name} added to cart!`)
      }
    },
  },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
