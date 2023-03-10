//React-Router for Navigating across pages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//PAGES AND COMPONENTS
import Home from 'pages/home/Home'
import Headphones from 'pages/headphones/Headphones'
import Speakers from 'pages/speakers/Speakers'
import Earphones from 'pages/earphones/Earphones'
import Checkout from 'pages/checkout/Checkout'
import Product from 'pages/product/Product'

import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'

//DATA
import { headerData } from 'components/header/headerData'
import { homeData } from 'pages/home/homeData'
import { footerData } from 'components/footer/footerData'

//POP-UP CONTAINER
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
      <ToastContainer position='top-center' autoClose={3000} />
      <Header {...headerData} />
      <Routes>
        <Route path='/' element={<Home {...homeData} />}></Route>
        <Route path='/headphones' element={<Headphones />}></Route>
        <Route path='/speakers' element={<Speakers />}></Route>
        <Route path='/earphones' element={<Earphones />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/product/:id' element={<Product />}></Route>
      </Routes>
      <Footer {...footerData} />
    </Router>
  )
}

export default App
