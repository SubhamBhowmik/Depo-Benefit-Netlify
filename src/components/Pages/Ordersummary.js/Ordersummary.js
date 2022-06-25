import React,{useEffect} from 'react'
import Banner from './Banner'
import Navbarwithavatar from '../../Navbarwithavatar'
import Ordercontainer from './Ordercontainer'
import Orderslide from './Orderslide'
import Footer from '../../Footer'
const Ordersummary = () => {
  useEffect(() => {
    window.scrollTo(0,0)
   }, [])
  return (
   <>
        <Navbarwithavatar/>
        <Banner/>
       <Ordercontainer/>
       <Orderslide/>
       <Footer/>
   </>
  )
}

export default Ordersummary