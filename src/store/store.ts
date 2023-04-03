import { configureStore } from '@reduxjs/toolkit'

import cartReducer from 'store/features/cart/cartSlice'
import productReducer from 'store/features/products/productSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
