import { configureStore } from '@reduxjs/toolkit'

import cartReducer from 'store/features/cart/cartSlice'
import productReducer from 'store/features/products/productSlice'
import modalReducer from 'store/features/modal/modalSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    modal: modalReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
