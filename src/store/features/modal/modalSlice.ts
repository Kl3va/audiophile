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
    controlModal: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload
    },
  },
})

export const { controlModal } = modalSlice.actions

export default modalSlice.reducer
