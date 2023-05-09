import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from 'store/hooks'

//SINGLE PRODUCT COMPONENT
import UniqueProduct from 'pages/product/UniqueProduct'

//Go back button component
import GoBack from 'components/go-back/GoBack'

//Autogear component and Nav-Secondary component
import NavSecondary from 'components/nav-secondary/NavSecondary'
import AudioGear from 'components/audio-gear/AudioGear'

//Data
import { navSecondaryData } from 'components/nav-secondary/navSecondaryData'
import { audioGearData } from 'components/audio-gear/audioGearData'

//Get single product func
import { getSingleProduct } from 'utils/getProduct'

const Product = () => {
  const { id } = useParams()

  const { products } = useAppSelector((state) => state.products)

  const product = getSingleProduct(products, id)

  return (
    <main>
      <GoBack />
      <UniqueProduct {...product} />
      <section>
        <NavSecondary navSecondaryData={navSecondaryData} />
      </section>
      <AudioGear {...audioGearData} />
    </main>
  )
}

export default Product
