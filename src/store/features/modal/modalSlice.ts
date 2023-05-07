import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalProp {
  isSidebarOpen: boolean
  isCartOpen: boolean
}

const initialState: ModalProp = {
  isSidebarOpen: false,
  isCartOpen: true,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    controlModal: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload
    },
    controlCartPopUp: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload
    },
  },
})

export const { controlModal, controlCartPopUp } = modalSlice.actions

export default modalSlice.reducer
