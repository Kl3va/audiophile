import React from 'react'

interface RemoveAllBtnProps {
  className: CSSModuleClasses[string]
}

const RemoveAllBtn = ({ className }: RemoveAllBtnProps) => {
  return <button className={className}>Remove all</button>
}

export default RemoveAllBtn
