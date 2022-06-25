import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './Crausal.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from './Footer'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const Crausal = () => {

  const history = useHistory()



  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}

      pagination={{ clickable: true }}

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>

        <section id="home-banner">

          <div className="masthead">


            <div class="banner-grid-container">
              <div class="banner-item1">
                <div className="left">

                  <h1>Do you really Know what your</h1>
                  <h1>Employees need?</h1>

                  <div className="cz">
                    <p>eiciendis quo sed ipsa odit a quos
                      eiciendis quo sed ip </p>
                    <p>eiciendis quo sed ipsa odit a quos
                      eiciendis quo sed ip </p>
                  </div>



                  <div className="last">
                    <div className="d-flex mt-2">
                      <button className='my-btn-2 text-white ripple' onClick={() => { history.push('/bookdemo') }}>Request Demo<i class="ml-10 fa-solid fa-circle-arrow-right"></i></button>

                      <button className='my-btn-1 ml-free-trial ripple'>Free Trial<i class="p-2 ripple fa-solid fa-circle-arrow-right"></i></button>
                    </div>

                    <div className=" ">
                      <div className="aws-wrap ">
                        <div className='icon-width by '>

                          <h4 className="text-white  text-sm rec ">Recognized by</h4>
                        </div>
                        <div className='icon-width rec  '>
                          <img className=" " src="./images/banner/startup.png" alt="" />
                        </div>

                        <div className='icon-width aws-active'>
                          <h3 className="text-white  text-sm d-flex" >
                            <div className="aws"> aws</div>
                            <div  > <i class="fa-solid fa-power-off"></i></div>
                            <div className="aws">   active</div>


                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>










                </div>
              </div>
              <div class="banner-item2">

                <div className="float-start img-right">
                  <img className="float-end" src="./images/banner/new-right.svg" alt="" />

                </div>


              </div>
            </div>


          </div>
        </section>



      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>


    </Swiper>
  )
}

export default Crausal;