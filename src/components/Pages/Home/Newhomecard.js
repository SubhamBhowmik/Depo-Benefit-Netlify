import React from 'react'
import './newhomecard.css'
import NewFlip from './NewFlip'
import NewHcard from '../../Cardbox/New/NewHcard'
const Newhomecard = () => {
  const card1 = {
    img: "./images/cardholder/left1.png",
    title1: "Channel",
    title2: "promotion programs",
    subtitle: "Encourage your employees by giving seemless.",
    bg:" rgba(231, 21, 8, 0.36)"
    
  }
  const card2 = {
    img: "./images/cardholder/right1.png",
    title1: "Corporate",
    title2: "gifting",
    subtitle: "Encourage your employees by giving seemless.",
    bg:" rgba(231, 21, 8, 0.36)"
  }
  return (
    <>
      <section id='homecard'  className="pb-5 whole-section">

        <div className="container" >
          <div className='sol-'>
            <div className='text-center'>
              <h1>Solutions for</h1>
              <h1>Marketing and Sales Team</h1>
            </div>

          </div>

          <div className="container" 
      >

          <div className="new-card-wrap">
           <NewHcard card={card1}/>
           <NewHcard card={card2}/>
          </div>


        </div>
      </div>


    </section>

    </>
  )
}

export default Newhomecard