import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Ordercard from '../../Cardbox/Ordercard'

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
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

const Orderslide = () => {
    return (
        <>
            <div className='mb-3 container py-5 mt-5' >

                <div className='text-format  mb-2'>
                    <div className="col-md-12">

                        Recomended For you
                    </div>


                </div>
                <Carousel


                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    showDots={false}
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "desktop"]}
                >


                    <Ordercard />
                    <Ordercard />
                    <Ordercard />




                </Carousel>
                <div className='line-container d-flex mt-3'>
                    <div className='bg-orange left-line' ></div>
                    <div className='bg-light-gray' ></div>
                </div>
            </div>

            <div className='px-5 mb-3'>
                <div className='text mb-3'>
                  <h3>FAQ’S</h3>  
                </div>
                <div className=" justify-content-center text-center">
                <div className='d-flex align-items-center'>
                    <div className='violet-dot justify-content-center align-items-center text-center' >
                        <i class="fa-solid  fa-plus" style={{
                            color:
                                "rgba(254, 196, 88, 0.92)"
                        }}></i>
                    </div>
                    <div className='text'>1.How can I use my Myntra Gift Card</div>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='violet-dot justify-content-center align-items-center text-center' >
                        <i class="fa-solid  fa-plus" style={{
                            color:
                                "rgba(254, 196, 88, 0.92)"
                        }}></i>
                    </div>
                    <div className='text'>1.How can I use my Myntra Gift Card</div>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='violet-dot justify-content-center align-items-center text-center' >
                        <i class="fa-solid  fa-plus" style={{
                            color:
                                "rgba(254, 196, 88, 0.92)"
                        }}></i>
                    </div>
                    <div className='text'>1.How can I use my Myntra Gift Card</div>
                </div>
                </div>
              

            </div>
        </>
    )
}

export default Orderslide;