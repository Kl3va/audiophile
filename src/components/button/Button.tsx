import React from 'react'
import { Link } from 'react-router-dom'

interface buttonProps {
  className: CSSModuleClasses[string]
  link: string
  btnText: string
}

const Button = ({ className, link, btnText }: buttonProps) => {
  return (
    <div className={className}>
      <Link to={link}>{btnText}</Link>
    </div>
  )
}

export default Button
