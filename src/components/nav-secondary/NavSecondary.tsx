import React from 'react'

export interface Props {
  navSecondaryData: navProps[]
}

export interface navProps {
  productImg: string
  category: string
  text: string
  iconRight: string
  link: string
}

const NavSecondary = ({ navSecondaryData }: Props) => {
  return (
    <div>
      {navSecondaryData.map((product, index) => {
        const { productImg, category, text, iconRight, link } = product
        return (
          <div>
            <div>
              <img src={productImg} alt='product' />
            </div>
            <h2>{category}</h2>
            <div>
              <a href={link}>
                {text}
                <span>
                  <img src={iconRight} alt='icon-arrow-right' />
                </span>
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default NavSecondary
