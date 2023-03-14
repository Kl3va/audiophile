import React from 'react'

interface buttonProps {
  className: CSSModuleClasses[string]
  link: string
  btnText: string
}

const Button = ({ className, link, btnText }: buttonProps) => {
  return (
    <div className={className}>
      <a href={link}>{btnText}</a>
    </div>
  )
}

export default Button
