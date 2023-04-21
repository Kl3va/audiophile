import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/hooks'

//SINGLE PRODUCT COMPONENT
import UniqueProduct from 'pages/product/UniqueProduct'

//Autogear component and Nav-Secondary component
import NavSecondary from 'components/nav-secondary/NavSecondary'
import AudioGear from 'components/audio-gear/AudioGear'

//Data
import { navSecondaryData } from 'components/nav-secondary/navSecondaryData'
import { audioGearData } from 'components/audio-gear/audioGearData'

//Get single product func
import { getSingleProduct } from 'utils/getProduct'
//import { SingleProduct } from 'types/singleProduct'

//STYLES
import styles from 'pages/product/unique-product.module.scss'

const Product = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { products } = useAppSelector((state) => state.products)

  const product = getSingleProduct(products, id)

  return (
    <main>
      <section className={styles.section_back}>
        <div>
          <button className={styles.go_back} onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </section>
      <UniqueProduct {...product} />
      <section>
        <NavSecondary navSecondaryData={navSecondaryData} />
      </section>
      <AudioGear {...audioGearData} />
    </main>
  )
}

export default Product
