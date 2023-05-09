import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SingleProduct } from 'types/singleProduct'

import { toast } from 'react-toastify'

interface cartType {
  cartItems: SingleProduct[]
  totalAmount: number
  shippingFee: number
  vat: number
  grandTotal: number
  totalProducts: number
}

const initialState: cartType = {
  cartItems: [],
  shippingFee: 50,
  totalAmount: 0,
  vat: 0,
  grandTotal: 0,
  totalProducts: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<SingleProduct>) => {
      const cartItem = action.payload
      if (state.cartItems.some((item) => item.id === cartItem.id)) {
        toast.warning(`${cartItem.name} already exists in cart!`)
      } else {
        state.cartItems.push(cartItem)
        toast.success(`${cartItem.name} added to cart!`)
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const itemId = action.payload
      const cartItem = state.cartItems.find((item) => item.id === itemId)

      if (!cartItem) {
        toast.error(`Click on 'ADD TO CART'!`)
      } else {
        cartItem.productQuantity += 1
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const itemId = action.payload
      const cartItem = state.cartItems.find((item) => item.id === itemId)

      if (!cartItem) {
        toast.error(`Click on ADD TO CART!`)
      } else if (cartItem.productQuantity === 1) {
        cartItem.productQuantity = 1
      } else {
        cartItem.productQuantity -= 1
      }
    },
    customDecreaseQuantity: (state, action: PayloadAction<number>) => {
      const itemId = action.payload
      const cartItem = state.cartItems.find((item) => item.id === itemId)

      const newItems = state.cartItems.filter(
        (item) => item.id !== cartItem?.id
      )

      if (!cartItem) return

      if (cartItem?.productQuantity === 1) {
        state.cartItems = newItems
        toast.warning(`${cartItem.name} removed from cart!`)
      } else {
        cartItem.productQuantity -= 1
      }
    },
    removeAllItems: (state) => {
      state.cartItems = []
      toast.error('Your Cart Is Cleared!')
    },
    calculateTotals: (state) => {
      const { totalAmount, totalProducts } = state.cartItems.reduce(
        (acc, item) => {
          acc.totalAmount += item.price * item.productQuantity
          acc.totalProducts += item.productQuantity
          return acc
        },
        { totalAmount: 0, totalProducts: 0 }
      )

      const vat = totalAmount * (20 / 100)
      const grandTotal = totalAmount + state.shippingFee
      //Add to the state
      state.grandTotal = grandTotal
      state.vat = vat
      state.totalAmount = totalAmount
      state.totalProducts = totalProducts
    },
  },
})

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  customDecreaseQuantity,
  removeAllItems,
  calculateTotals,
} = cartSlice.actions

export default cartSlice.reducer
