import React, { useState } from 'react'
import Navbar from './Navbar'
import Homecard from './Cardbox/Homecard';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import Homecard1 from './Cardbox/Homecard1';
import './Pages/Home/cradholder.css'
// import '../components/Cardbox/coloredcard.css'
// import './Cardbox/graycard.css'
// import './Pages/Home/Graycardcontainer.css'
// import Graycard from './Cardbox/Graycard'
// // import Groupdiv from './Pages/Checkout/Groupdiv';
import './Pages/Home/switchbutton.css'
// import './Pages/Solutions/solutioncontainer.css'
// // import div from '@mui/material/div';
// import divGroup from '@mui/material/divGroup';
// import { Button, makeStyles } from '@mui/material';
// import Footer from './Footer';
import Butttons from './Butttons';
// import Coloredcard from './Cardbox/Coloredcard';
// import Last from './Pages/Home/Last';
import Coloredcard from './Cardbox/Coloredcard'
import Avatar from '@mui/material/Avatar';
import './Pages/Home/Newcardcontainer.css'
import Graycard from './Cardbox/Graycard';
import Flipcard from './Cardbox/Flipcard';
import Flipcard1 from './Cardbox/Flipcard1';
import Flipcard3 from './Cardbox/Flipcard3';
import '../components/Cardbox/Shopingitemcard.css'
import CheckoutRedeem from './Pages/Checkout/CheckoutRedeem';
import Employer1 from './Pages/Employer/Employer1';
import Table from './Table/Table';
import Table2 from './Table/Table2';
import Employer2 from './Pages/Employer2/Employer2';
import LoginDialogOTP from './Pages/Login/LoginDialogOTP';
import Checkoutpage1 from './Pages/Checkout/Checkoutpage1';
import Employer3 from './Pages/Employer3/Employer3';
import Table1 from './Table/Table1';
import Employer4 from './Pages/Employer4/Employer4';
import Privacypolicy from './Pages/Privacy-policy-pages/Privacypolicy';
import Termsandcondition from './Pages/Privacy-policy-pages/Termsandcondition';
import Refundpolicy from './Pages/Privacy-policy-pages/Refundpolicy';
import Newhomecard from './Pages/Home/Newhomecard';
import NewFlip from './Pages/Home/NewFlip';
import ShopingItemcards from './Cardbox/ShopingItemcards';
import NewHcard from './Cardbox/New/NewHcard';

const Demo = () => {
  const card1 = {
    img: "./images/cardholder/left1.png",
    title1: "Channel",
    title2: "promotion programs",
    subtitle: "Encourage your employees by giving seemless."
  }
  const card2 = {
    img: "./images/cardholder/right1.png",
    title1: "Corporate",
    title2: "gifting",
    subtitle: "Encourage your employees by giving seemless."
  }
  const card3 = {
    img: "./images/cardholder/1.png",
    title1: "Employee",
    title2: " perks",
    subtitle: "Encourage your employees by giving seemless."
  }
  const card4 = {
    img: "./images/cardholder/2.png",
    title1: "Rewards & recognition ",
    title2: "programme",
    subtitle: "Encourage your employees by giving seemless."
  }
  const card5 = {
    img: "./images/cardholder/3.png",
    title1: "Food Card",
    title2: "",
    subtitle: "Encourage your employees by giving seemless."
  }
  const card = {
    title: "sfgy1",
    title: "tdcvw",
    subtitle: "vynaigy"
  }

  const graycard = {
    title: " Instant  Activation ",

    details: " Give your employees some extra benefits."
  }


  return (
    <>
     
  
     <NewHcard/>

      {/* <div className='d-flex justify-content-center' id='shopingitemcard'>
        <div className='mb-5'>
          <div className='item-card  shadow ' style={{ maxWidth: '451px', borderRadius: "20px" }}>

            <div className='hover-shadow border-radiuss' style={{ maxWidth: '', borderRadius: "", position: "relative", overflow: "hidden" }}>
             
              <div className='discount-tag text-center tag-div' style={{ position: "absolute" }} >
                <h5 style={{marginTop:"4px"}}>8% Off</h5>
              </div>
              <div>

              </div>


              <button type="button " class="view-btn  hover-overlay hover-zoom hover-shadow ripple" style={{ position: "absolute",  }} >View</button>
              <img src="./images/items/1.png" alt="" className='shadow ' />


            </div>
          </div>
          <div className='mt-3 myntra-gift-card d-flex justify-content-center' ><h2> Myntra Gift Card</h2></div>

        </div>
      </div> */}




















      {/*      

      <section className='mt-5 ' id='second' style={{ background: "rgba(14, 90, 205, 0.05)" }}>
        <div className="container" >
        <div className='high text-center'>
            <div><h1>Solutions for</h1></div>
            <div> <h1>Human Resources(HR)</h1></div>

             
          </div>
          <div class="second-grid-container">
            <div class="second-item1">
              <Flipcard1 card={card3} />
            </div>
            <div class="second-item2">
              <Flipcard1 card={card4} />
            </div>


          </div>


        </div>
      </section> */}


      {/* <section id='third' style={{ background: "rgba(14, 90, 205, 0.05)" }}>
        <div className="container">

          <div class="" >
            <div class=" d-flex justify-content-center" >
              <div >
                <Flipcard1 card={card5} />
              </div>

            </div>




          </div>
        </div>
      </section>
      <section id='colored-card' >

        <div className="container mt-5 ">
          <div class="grid-container">
            <div class="item1 ">
              <div className="colored-card shadow ">



                <div className="colored-card-overlay " style={{ background: " rgba(15, 70, 153, 0.45)" }}>
                </div>

                <div style={{ position: "absolute" }} className=' '>
                  <div className='colored-box-text-wrapper'>
                    <div className=''>
                      <div className='encourage-text' ><h2>Encourage</h2></div>
                      <div className='encourage-text'> <h2>Engagement</h2></div>

                    </div>

                    <div className='d-flex  align-items-center'>
                      <div> <img src="./images/blend/up arrow.png" alt="" className='up-arrow ' /></div>
                      <div className='encourage-text'><h2>15%</h2></div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            <div class="item2">
              <div className="colored-card shadow ">



                <div className="colored-card-overlay " style={{ background: "rgba(25, 198, 83, 0.52)" }}>
                </div>

                <div style={{ position: "absolute" }} className=' '>
                  <div className='colored-box-text-wrapper'>
                    <div className=''>
                      <div className='  encourage-text' > <h2>Create a culture</h2></div>
                      <div className='encourage-text' ><h2>of appreciation</h2></div>

                    </div>

                    <div className='d-flex  align-items-center'>
                      <img src="./images/blend/up arrow.png" alt="" className='up-arrow ' />
                      <div className='encourage-text'><h2>15%</h2></div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            <div class="item3">
              <div >
                <div className="colored-card shadow ">



                  <div className="colored-card-overlay " style={{ background: "rgba(221, 38, 121, 0.5)" }}>
                  </div>

                  <div style={{ position: "absolute" }} className='  '>
                    <div className='colored-box-text-wrapper'>
                      <div className=''>
                        <div className=' encourage-text' > <h2>Be a workplace</h2></div>
                        <div className=' encourage-text' ><h2>people love to work</h2> </div>

                      </div>

                      <div className='d-flex  align-items-center'>
                        <img src="./images/blend/up arrow.png" alt="" className='up-arrow ' />
                        <div className='encourage-text'><h2>15%</h2></div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div class="item1">
              <div className="colored-card shadow ">



                <div className="colored-card-overlay " style={{ background: "rgba(178, 24, 14, 0.49)" }}>
                </div>

                <div style={{ position: "absolute" }} className=' encourage-text '>
                  <div className='colored-box-text-wrapper'>
                    <div className=''>
                      <div className=' encourage-text' ><h2>Enhance</h2> </div>
                      <div className=' encourage-text' ><h2>efficiency</h2>  </div>

                    </div>

                    <div className='d-flex  align-items-center'>
                      <img src="./images/blend/up arrow.png" alt="" className='up-arrow ' />
                      <div className=' encourage-text'><h2>15%</h2></div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
            <div class="item2">
              <div className="colored-card shadow ">



                <div className="colored-card-overlay " style={{ background: "rgba(255, 177, 33, 0.57)" }}  >
                </div>

                <div style={{ position: "absolute" }} className=' encourage-text '>
                  <div className='colored-box-text-wrapper'>

                    <div className=' encourage-text' ><h2>Best ROI on an</h2></div>
                    <div className=' encourage-text'> <h2>incentive programmes </h2></div>



                    <div className='d-flex  align-items-center'>
                      <img src="./images/blend/up arrow.png" alt="" className='up-arrow ' />
                      <div className='encourage-text'><h2>100%</h2></div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
            <div class="item3">
              <div className="colored-card shadow " >



                <div className="colored-card-overlay " style={{ background: "rgba(0, 0, 0, 0.54)" }}  >
                </div>

                <div style={{ position: "absolute" }} className=' '>
                  <div className='colored-box-text-wrapper' >
                    <div className=''>
                      <div className='encourage-text'><h2>Nurture</h2></div>
                      <div className='encourage-text'><h2>innovation</h2></div>

                    </div>

                    <div className='d-flex  align-items-center'>
                      <img src="./images/blend/up arrow.png" alt="" className='up-arrow ' />
                      <div className='encourage-text'><h2>15%</h2></div>
                    </div>
                  </div>

                </div>

              </div>
            </div>


          </div>
        </div>

      </section>




      <section id='gray-card'>
        <div className="container mt-5">
          <div class="gray-grid-container ">
            <div class="gray-item1">
              <Graycard graycard={graycard} />
            </div>
            <div class="gray-item2">
              <Graycard graycard={graycard} />
            </div>
            <div class="gray-item3">
              <Graycard graycard={graycard} />
            </div>
            <div class="gray-item4">
              <Graycard graycard={graycard} />
            </div>
            <div class="gray-item5">
              <Graycard graycard={graycard} />
            </div>
            <div class="gray-item6">
              <Graycard graycard={graycard} />
            </div>


          </div>
        </div>
      </section>


      <section id='last'>
        {/* css in cradholder.css */}
      {/* <div className="container">
          <div className="last-grid-container">
            <div class="last-item1">
              <h1>
                Amazon based <span className='text-violet'>security </span></h1>
              <h1>service</h1>
              <h6 class="card-subtitle text1 text-muted">
                Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consecte
                Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consecte
              </h6>
              <div className="k-wrap">
                <div className=' hi'>
                  <h3>6.7M</h3>
                  <p>Nulla facilisis.</p>
                </div>
                <div className=' '>
                  <h3>56.2K</h3>
                  <p>Nulla facilisis.</p>
                </div>
              </div>
              <Link class="hover text-decoration-none text-violet learn">Learn More<i class="p-2 fa-solid fa-circle-arrow-right"></i> </Link>


            </div>
            <div class="last-item2">
              <img class=' last-img' src="./images/iconholder/Password protection.png" alt="" />
            </div>
            <div class="last-item3">
              <img className='' src="./images/infocard/2.png" alt="" style={{ width: "320px" }} />
            </div>
            <div class="last-item4">



              <h1>Cost <span className='text-violet'>Benefits </span></h1>

              <h6 class="card-subtitle text1 text-muted">
                Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consecte
                Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consecte
              </h6>
              <div className="k-wrap">
                <div className=' hi'>
                  <h3>6.7M</h3>
                  <p>Nulla facilisis.</p>
                </div>
                <div className=' '>
                  <h3>56.2K</h3>
                  <p>Nulla facilisis.</p>
                </div>
              </div>
              <Link class="hover text-decoration-none text-violet learn">Learn More<i class="p-2 fa-solid fa-circle-arrow-right"></i> </Link>


            </div>
            <div class="last-item5">

              <h1>
                <span className='text-violet '>Scalability </span>    </h1>

              <h6 class="card-subtitle text1 text-muted">
                Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consecte
                Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consecte
              </h6>
              <div className="k-wrap">
                <div className=' hi'>
                  <h3>6.7M</h3>
                  <p>Nulla facilisis.</p>
                </div>
                <div className=' '>
                  <h3>56.2K</h3>
                  <p>Nulla facilisis.</p>
                </div>
              </div>
              <Link class="hover text-decoration-none text-violet learn">Learn More<i class="p-2 fa-solid fa-circle-arrow-right"></i> </Link>
            </div>
            <div class="last-item6">
              <img className='last-img ' src="./images/infocard/3.png" alt="" />
            </div>

          </div>
        </div>
      </section> */}

      {/* <Flipcard3 card={card5}/> */}
    </>
  )
}

export default Demo