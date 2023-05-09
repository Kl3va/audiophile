import React from 'react'
import { useDispatch } from 'react-redux'
import { removeAllItems } from 'store/features/cart/cartSlice'

interface RemoveAllBtnProps {
  className: CSSModuleClasses[string]
}

const RemoveAllBtn = ({ className }: RemoveAllBtnProps) => {
  const dispatch = useDispatch()
  const handleRemoveItems = () => {
    dispatch(removeAllItems())
  }
  return (
    <button onClick={handleRemoveItems} className={className}>
      Remove all
    </button>
  )
}

export default RemoveAllBtn
