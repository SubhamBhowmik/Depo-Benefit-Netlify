import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cardbox from '../../Cardbox/Cardbox'
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
const Testimonial = () => {
    return (
        <>
            {/* <div className="col-md-12 text-center  mb-5">
                <div className='text-dark  font-weight-bold'><h1>Testimonials</h1></div>
                <h3 className=' bold '>What are customers Say</h3>
            </div>
            <div className='bg-testimonial mt-5   mb-5 testimonial-card-margin  ' style={{ position: "relative", overflow: "hidden" }}>


                <div className='testi-circle-logo float-end'>
                    <img src="./images/testimonial/logo1.png" alt="" />
                </div>

                <Carousel

                    className='testimonial-carousel'
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    showDots={true}
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "desktop"]}
                >


                    <Cardbox />
                    <Cardbox />
                    <Cardbox />





                </Carousel>


            </div> */}

            <div className='bg-testimonial mt-5    testimonial-card-margin  ' style={{ position: "relative", overflow: "hidden" }}>

<div className="col-md-12 text-center  mb-5">
    <div className='text-dark  font-weight-bold'><h1>Testimonials</h1></div>
    <h3 className=' bold '>What are customers Say</h3>
</div>
    {/* <div className='testi-circle-logo float-end'>
        <img src="./images/testimonial/logo1.png" alt="" />
    </div> */}

    <Carousel

        className='testimonial-carousel'
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        showDots={true}
        swipeable={true}
        draggable={true}
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "desktop"]}
    >


        <Cardbox />
        <Cardbox />
        <Cardbox />





    </Carousel>


</div>


        </>
    )
}

export default Testimonial