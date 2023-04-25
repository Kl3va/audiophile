import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalProp {
  isSidebarOpen: boolean
}

const initialState: ModalProp = {
  isSidebarOpen: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isSidebarOpen = true
    },
    closeModal: (state) => {
      state.isSidebarOpen = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
