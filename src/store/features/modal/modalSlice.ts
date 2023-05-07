import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalProp {
  isSidebarOpen: boolean
  isCartOpen: boolean
  isCheckoutModalOpen: boolean
}

const initialState: ModalProp = {
  isSidebarOpen: false,
  isCartOpen: false,
  isCheckoutModalOpen: false,
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
    controlCheckoutPopUp: (state, action: PayloadAction<boolean>) => {
      state.isCheckoutModalOpen = action.payload
    },
  },
})

export const { controlModal, controlCartPopUp, controlCheckoutPopUp } =
  modalSlice.actions

export default modalSlice.reducer
