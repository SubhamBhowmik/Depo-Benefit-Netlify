import React from 'react'
import './emheader1.css'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Lightpinkbox from './Lightpinkbox';
import Smallfcard from './Smallfcard';
const c1 = {
    title: "Employee Perks",
    detail: "Employee hapiness One click away"
}

const c2 = {
    title: "Food card",
    detail: "Employee hapiness One click away"
}
const c3 = {
    title: "Rewards & Recongnition",
    detail: "Employee hapiness One click away"
}
const c4 = {
    title: "Corporating Gifts",
    detail: "Employee hapiness One click away"
}
const c5 = {
    title: "Channel Incentivisation",
    detail: "Employee hapiness One click away"
}

const smcard1 = {
    backcolor: 'rgba(14, 90, 205, 0.36)',
    img: "./images/employer-1/foodcardimg.svg",
    title1: "Food Card",
    title2: ""
}
const smcard2 = {
    backcolor: 'rgba(231, 21, 8, 0.36)',
    img: "./images/employer-1/rightimg.svg",
    title1: "Employee ",
    title2: "Perks"
}

const Emploheader1 = () => {
    return (
        <>
            <section id='em-header1' className='mb-5'>
                <div className='em-bg'>
                    <div class="pri-header ">

                        <div class="pri-header-wrapper">


                            <div class="pri-header-left">
                                <h1 class="mt-3 ">Its time to take </h1>
                                <h1>rest</h1>

                                <div>
                                    <h2>Easy access to all reports</h2>
                                </div>


                                <div class="text-content">
                                    <div className='d-flex mid-div'>
                                        <TaskAltIcon className='tick' style={{ color: "orange" }} />
                                        <h5>while we do all your work </h5>
                                    </div>
                                    <div className='d-flex mid-div'>
                                        <TaskAltIcon className='tick' style={{ color: "orange" }} />
                                        <h5>Employee hapiness One click away </h5>
                                    </div>
                                    <div className='d-flex mid-div'>
                                        <TaskAltIcon className='tick' style={{ color: "orange" }} />
                                        <h5>Multiple log in facility </h5>
                                    </div>

                                    <div className='free-trial-btn'>
                                        <h2>Free Trial<i class="p-2 ripple fa-solid fa-circle-arrow-right"></i></h2>
                                    </div>
                                </div>









                            </div>
                            <div class="pri-header-right" style={{ width: "50%" }}>
                                <img src="./images/employer-1/header-pic.svg" class="" alt="Web Development" />
                            </div>
                        </div>


                    </div>
                </div>

                <div className='d-flex justify-content-center'>
                    <div className='vd-box'>
                        <img src="./images/employer-1/vd-tag.svg" alt="" />
                        <div className='img-box'>
                            <img className='cls1' src="./images/employer-1/Polygon 3.png" alt="" />
                        </div>

                    </div>
                </div>

                <div className='second-section d-flex justify-content-center'>
                    <h1 className='one-'>One Software for all</h1>
                </div>

                <div className='d-flex justify-content-around'>
                    <div>
                        <Lightpinkbox c={c1} />
                    </div>
                    <div>
                        <Lightpinkbox c={c2} />
                    </div>
                    <div>
                        <Lightpinkbox c={c3} />
                    </div>
                </div>
                <div className='last-2-box'>
                    <Lightpinkbox c={c4} />
                    <Lightpinkbox c={c5} />
                </div>


                <div className='text-center s-c-u'>
                    <h2>Services Currently Using </h2>
                    <h6 className='h6-text'>A simply way of saving your TAX through food cards.A simply</h6>
                    <h6 className='h6-text'> way of saving your TAX through food cards</h6>



                </div>


                <div className="cz-sm-c">
                    <Smallfcard smcard={smcard1} />
                    <Smallfcard smcard={smcard2} />
                </div>

                <div className='line-container d-flex mt-5'>
                    <div className='bg-orange left-line' ></div>
                    <div className='bg-light-gray' ></div>
                </div>



            </section>

        </>
    )
}

export default Emploheader1