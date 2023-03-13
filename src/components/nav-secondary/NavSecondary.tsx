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
  return <div>{navSecondaryData[0].category}</div>
}

export default NavSecondary
