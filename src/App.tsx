//React-Router for Navigating across pages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { useEffect } from 'react'

//PAGES AND COMPONENTS
import Home from 'pages/home/Home'
import Headphones from 'pages/headphones/Headphones'
import Speakers from 'pages/speakers/Speakers'
import Earphones from 'pages/earphones/Earphones'
import Checkout from 'pages/checkout/Checkout'
import Product from 'pages/product/Product'

import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'
import Background from 'components/background/Background'
import Cart from 'components/cart/Cart'
import CheckoutModal from 'components/checkout-modal/CheckoutModal'
import CustomBg from 'components/background/CustomBg'

//Reducer Actions
import { calculateTotals } from 'store/features/cart/cartSlice'

//Hooks
import ScrollToTop from 'hooks/scrollToTop'

//DATA
import { headerData } from 'components/header/headerData'
import { homeData } from 'pages/home/homeData'
import { footerData } from 'components/footer/footerData'

//POP-UP CONTAINER
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//DATA
import { headphonesData } from 'pages/headphones/headphonesData'
import { speakersData } from 'pages/speakers/speakersData'
import { earphonesData } from 'pages/earphones/earphonesData'

//Testing
import Testing from 'components/Testing'

function App() {
  const { isCartOpen, isCheckoutModalOpen } = useAppSelector(
    (state) => state.modal
  )

  const { cartItems } = useAppSelector((state) => state.cart)

  const dispatch = useAppDispatch()

  //Calculate the total Amount, total products in the cart, vat...
  useEffect(() => {
    dispatch(calculateTotals())
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems, dispatch])

  return (
    <Router>
      <ScrollToTop />
      <ToastContainer position='top-center' autoClose={3000} />
      <Header {...headerData} />
      <Testing />
      <Background />
      <CustomBg />
      {isCartOpen && <Cart />}
      {isCheckoutModalOpen && <CheckoutModal />}
      <Routes>
        <Route path='/' element={<Home {...homeData} />}></Route>
        <Route
          path='/headphones'
          element={<Headphones headphonesData={headphonesData} />}
        ></Route>
        <Route
          path='/speakers'
          element={<Speakers speakersData={speakersData} />}
        ></Route>
        <Route
          path='/earphones'
          element={<Earphones earphonesData={earphonesData} />}
        ></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/product/:id' element={<Product />}></Route>
      </Routes>
      <Footer {...footerData} />
    </Router>
  )
}

export default App
