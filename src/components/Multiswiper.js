import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cardbox from '../../src/components/Cardbox/Cardbox'
import Pricingcardbox from './Cardbox/Pricingcardbox';
import Demo from './Demo';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Multiswiper = () => {
  const [bg1, setbg1] = useState('white')
  const [bg2, setbg2] = useState('black')
  const [state, setstate] = useState(false)
  const colorChange = () => {

    setstate(!state);
    switch (state) {
      case true:
        setbg1('black');
        setbg2('white')
        break;
      case false:
        setbg1('white');
        setbg2('black')
        break;


    }
  }

  const pricingcard1={
    title:"BASIC",
    price:"59/-"
  }
  const pricingcard2={
    title:"PREMIUM",
    price:"100/-"
  }





  return (
    <div className='mb-5 container py-5' >
      <div className='text-center m-3' id='pricing-switch'>

        <label class="switch " onClick={colorChange}>
          <input type="checkbox" />
          <span class="slider">
            <div className='switch-text d-flex justify-content-between'>

              <div className='mt-2 ' style={{ color: bg1 }}>Quarterly</div>
              <div className='mt-2  ml-4  float-right' style={{ color: bg2 }}>Yearly</div>
            </div>


          </span>
        </label>


      </div>
      <Carousel


        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        showDots={true}
        swipeable={true}
        draggable={true}
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "desktop", "mobile"]}
      >


        <Pricingcardbox pricingcard={pricingcard1}/>
        <Pricingcardbox pricingcard={pricingcard2}/>
        <Pricingcardbox pricingcard={pricingcard1}/>
       


      </Carousel>
    </div>
  )
}

export default Multiswiper