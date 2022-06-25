import React,{useEffect} from 'react'
import Footer from '../../Footer'
import Navbarwithavatar from '../../Navbarwithavatar'
import Checkoutcontainer from './Checkoutcontainer'

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0,0)
   }, [])
  return (
    <>
        <Navbarwithavatar/>
        <Checkoutcontainer/>
        <Footer/>
    </>
  )
}

export default Checkout