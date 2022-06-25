import React, { useState } from 'react'
import './Graycardcontainer.css'
import Graycard from '../../Cardbox/Graycard'
import { Link, Redirect, useHistory } from 'react-router-dom'

const Graycardcontainer = () => {
  const history = useHistory()
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
  const graycard = {
    title: " Instant  Activation ",

    details: " Give your employees some extra benefits."
  }
  const graycard1 = {
    title: "One Card",
    details: "Give your employees some extra benefits."
  }
  const graycard2 = {
    title: "Expiry",
    details: "Give your employees some extra benefits."
  }
  const graycard3 = {
    title: "100% Security",
    details: "Give your employees some extra benefits."
  }
  const graycard4 = {
    title: "  Instant Activation",
    details: "Give your employees some extra benefits."
  }
  const graycard5 = {
    title: "Free KYC",
    details: "Give your employees some extra benefits."
  }
  const graycard6 = {
    title: "Acceptance",
    details: "Give your employees some extra benefits."
  }
  return (
    <>
      <section className='mt-5'>
        <div className="d-flex justify-content-center mt-benefit">
          <div className='text-muted font-weight-bold' style={{ fontweight: "900" }}><h1>Benefits For</h1></div>
        </div>

        <div className='text-center m-3'>

          <label class="switch " onClick={colorChange}>
            <input type="checkbox" />
            <span class="slider">
              <div className='switch-text d-flex justify-content-between'>

                <div className='mt-2 ' style={{ color: bg1 }}>Employee</div>
                <div className='mt-2  ml-4  float-right' style={{ color: bg2 }}>Employer</div>
              </div>


            </span>
          </label>


        </div>


      </section>
      <section id='gray-card'>
        <div className="container mt-5">
          <div class="gray-grid-container ">
            <div class="gray-item1">
              <div className="gray-card ">

                <div className="gray-cardbox-wrapper">
                  <div className='d-flex justify-content-center'>
                    <img src="./images/gray-card/msg-box.svg" alt="" />
                  </div>



                  <div className='h4-wrapper' >
                    <h4>One Card</h4>
                    <h4></h4>
                  </div>

                  <div className='text-left h4-wrapper'>
                    <p>Give your employees some</p>
                    <p>extra benefits</p>
                  </div>
                </div>



              </div>

            </div>
            <div class="gray-item2">
              <div className="gray-card ">

                <div className="gray-cardbox-wrapper">
                  <div className='d-flex justify-content-center'>
                    <img id='gray-img' src="./images/gray-card/alarm.svg" alt="" />
                  </div>



                  <div className='text-center' >
                    <h4>Expiry</h4>
                    <h4></h4>
                  </div>

                  <div className='text-left h4-wrapper'>
                    <p>Give your employees some</p>
                    <p>extra benefits</p>
                  </div>
                </div>



              </div>
            </div>
            <div class="gray-item3">
              <div className="gray-card ">

                <div className="gray-cardbox-wrapper">
                  <div className='d-flex justify-content-center'>
                    <img id='gray-img' src="./images/gray-card/sheild.svg" alt="" />
                  </div>



                  <div className='h4-wrapper' >
                    <h4>100% Security</h4>
                    <h4></h4>
                  </div>

                  <div className='text-left h4-wrapper'>
                    <p>Give your employees some</p>
                    <p>extra benefits</p>
                  </div>
                </div>



              </div>
            </div>
            <div class="gray-item4">
              <div className="gray-card ">

                <div className="gray-cardbox-wrapper">
                  <div className='d-flex justify-content-center'>
                    <img id='gray-img' src="./images/gray-card/power-off.svg" alt="" />
                  </div>



                  <div className='h4-wrapper' >
                    
                    <h4>Instant Activation</h4>
                  </div>

                  <div className='text-left h4-wrapper'>
                    <p>Give your employees some</p>
                    <p>extra benefits</p>
                  </div>
                </div>



              </div>
            </div>
            <div class="gray-item5">
              <div className="gray-card ">

                <div className="gray-cardbox-wrapper">
                  <div className='d-flex justify-content-center'>
                    <img src="./images/gray-card/profile.svg" alt="" />
                  </div>



                  <div className='text-center' >
                    <h4>Free KYC</h4>
                    <h4></h4>
                  </div>

                  <div className='text-left h4-wrapper'>
                    <p>Give your employees some</p>
                    <p>extra benefits</p>
                  </div>
                </div>



              </div>

            </div>
            <div class="gray-item6">
              <div className="gray-card ">

                <div className="gray-cardbox-wrapper">
                  <div className='d-flex justify-content-center'>
                    <img id='gray-img' src="./images/gray-card/circle-arrow.svg" alt="" />
                  </div>



                  <div className='h4-wrapper ' >
                    <h4>Acceptance</h4>
                    <h4></h4>
                  </div>

                  <div className='text-left h4-wrapper'>
                    <p>Give your employees some</p>
                    <p>extra benefits</p>
                  </div>
                </div>



              </div>
            </div>


          </div>
        </div>
      </section>

    </>
  )
}

export default Graycardcontainer