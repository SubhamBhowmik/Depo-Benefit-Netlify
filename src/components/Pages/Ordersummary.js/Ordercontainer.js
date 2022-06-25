import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const Ordercontainer = () => {
    return (
        <>
            <div className="d-flex order-main-box">
                <div className="left px-2">
                    <div className="left-container justify-content-center left-box-shadow p-2 mb-3">
                        <div className='text-center myntra-tag'><span className='myntra-gradiant'> Myntra </span>Gift Cards</div>
                        <div className="text1 p-2">
                            <p className='text1 text-muted'> Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, </p>
                        </div>
                        <div className='px-2 mb-3'>
                            <button className='order-more-btn  hover-overlay hover-zoom hover-shadow ripple ' >More</button>
                        </div>
                        <div className="d-flex justify-content-center px-2 mt-2">
                            <div className='order-rounded-box text-center'>
                                <h2 className='text'>Refer and earn rs <span style={{ color: "#FCA311" }}>100</span></h2>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <div className='order-invite-btn text-center text-white  px-2 hover-overlay hover-zoom hover-shadow ripple'>
                                <h2 className='text'>Invite Friends</h2>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mt-5">
                            <div className='rounded-eb-box text-center hover-overlay hover-zoom hover-shadow ripple'>

                                <h2 className='text text-muted'>Check your EB balance </h2>
                            </div>
                            <div> </div>

                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <div className='rounded-eb-box text-center hover-overlay hover-zoom hover-shadow ripple'>

                                <h2 className='text text-muted'>Get The BW App</h2>
                            </div>
                            <div> </div>

                        </div>

                        <div className="d-flex justify-content-center  mt-5 mb-3">
                            <div className='order-redemtion-box d-flex justify-content-center align-items-center hover-overlay hover-zoom hover-shadow ripple '>
                                <h1 className='text text-muted text-center'>
                                    Redemption Details
                                    <KeyboardDoubleArrowRightIcon /></h1>

                            </div>
                        </div>


                    </div>
                </div>
                <div className="right justify-content-center  " >
                    <div className="right-container justify-content-center px-5 " style={{ width: "100%" }} >
                        <div className=''>
                            <div className=' myntra-tag  '><span className='myntra-gradiant'> Myntra </span>Gift Cards</div>

                        </div>
                        <div className="mt-2">
                            <div className=' text-muted '>When you buy disscounted Shoppers Stop Gift card from Employee Benifit</div>
                        </div>

                        <div className="d-flex justify-content-around mt-3" >
                            <div className='d-flex row  justify-content-center' style={{ width: "140px" }}>
                                <img className='text-center' src="./images/ordersummary/1.png" alt="" style={{ width: "50px" }} />
                                <span className='micro-text text-center' style={{ fontSize: "8px" }}>Offline Store</span>
                            </div>
                            <div className='d-flex row  justify-content-center' style={{ width: "140px" }}>
                                <img className='text-center' src="./images/ordersummary/2.png" alt="" style={{ width: "50px" }} />
                                <span className='micro-text text-center' style={{ fontSize: "8px" }}>Online Store</span>
                            </div>
                            <div className='d-flex row  justify-content-center' style={{ width: "140px" }}>
                                <img className='text-center' src="./images/ordersummary/3.png" alt="" style={{ width: "50px" }} />
                                <span className='micro-text text-center' style={{ fontSize: "8px" }}>Can Club  </span>
                                <span className='micro-text text-center' style={{ fontSize: "8px" }}>with offers </span>

                            </div>
                            <div className='d-flex row  justify-content-center' style={{ width: "140px" }}>
                                <img className='text-center' src="./images/ordersummary/4.png" alt="" style={{ width: "50px" }} />
                                <span className='micro-text text-center' style={{ fontSize: "8px" }}>Multiple gift cards </span>

                                <span className='micro-text text-center' style={{ fontSize: "8px" }}>can be applied</span>                            </div>
                            <div className='d-flex row  justify-content-center' style={{ width: "140px" }}>
                                <img className='text-center' src="./images/ordersummary/5.png" alt="" style={{ width: "50px" }} />
                                <span className='micro-text text-center' style={{ fontSize: "8px" }}>Partial redemtion</span>
                                <span className='micro-text text-center' style={{ fontSize: "8px" }}>is not allowed</span>
                            </div>

                        </div>

                        <div className='d-flex jusitfy-content-around  align-items-center '>
                            <div>
                                <img src="./images/ordersummary/money-bag.png" className='img-fluid money-bag-img  ' alt="" />
                            </div>
                            <div className='text text-muted text-center mt-3'>
                                Save    10% to 20 %
                            </div>
                        </div>
















                    </div>





                    <div className="order-table-box justify-content-center ml-15" style={{overflow:"hidden"}}>
                        <div className='d-flex justify-content-around table-header-box mt-3 mb-3 p-2' style={{marginLeft:"45px"}}>
                            <div className='text1'>Card Value</div>
                            <div className='text1'>Discount</div>
                            <div className='text1'>Your Price</div>
                        </div>
                        <div className="d-flex justify-content-around mt-2 mb-2  align-items-center  border-bottom" >
                            <div className='d-flex row align-items-center ms-auto ' style={{width:"25%"}}>
                                <div className='text1 '>
                                    500 Rs
                                </div>
                                <div className='d-flex align-items-center' >
                                    <div className='yellow-dot'></div>
                                    <div className="text1 ">Digital Delivery</div>
                                </div>
                            </div>

                            <div style={{width:"25%"}}  >
                                <div className="text1 cz-box text-center ml-15">7.5% off</div>
                            </div>

                            <div style={{width:"25%"}}  >
                                <div className="text1 text-center mr-10">462.50 Rs</div>
                            </div>

                            <div className="d-flex justify-content-center bg-violet text-center order-add-btn mr-25  "  >
                                <div className='px-2 '>
                                    <h5 className=' text-white text1'>Add</h5>
                                </div>
                            </div>




                        </div>
                        <div className="d-flex justify-content-around mt-2 mb-2  align-items-center  border-bottom" >
                            <div className='d-flex row align-items-center ms-auto ' style={{width:"25%"}}>
                                <div className='text1 '>
                                    500 Rs
                                </div>
                                <div className='d-flex align-items-center' >
                                    <div className='yellow-dot'></div>
                                    <div className="text1 ">Digital Delivery</div>
                                </div>
                            </div>

                            <div style={{width:"25%"}}  >
                                <div className="text1 cz-box text-center ml-15">7.5% off</div>
                            </div>

                            <div style={{width:"25%"}}  >
                                <div className="text1 text-center mr-10">462.50 Rs</div>
                            </div>

                            <div className="d-flex justify-content-center bg-violet text-center order-add-btn mr-25  "  >
                                <div className='px-2 '>
                                    <h5 className=' text-white text1'>Add</h5>
                                </div>
                            </div>




                        </div>
                        <div className="d-flex justify-content-around mt-2 mb-2  align-items-center  border-bottom" >
                            <div className='d-flex row align-items-center ms-auto ' style={{width:"25%"}}>
                                <div className='text1 '>
                                    500 Rs
                                </div>
                                <div className='d-flex align-items-center' >
                                    <div className='yellow-dot'></div>
                                    <div className="text1 ">Digital Delivery</div>
                                </div>
                            </div>

                            <div style={{width:"25%"}}  >
                                <div className="text1 cz-box text-center ml-15">7.5% off</div>
                            </div>

                            <div style={{width:"25%"}}  >
                                <div className="text1 text-center mr-10">462.50 Rs</div>
                            </div>

                            <div className="d-flex justify-content-center bg-violet text-center order-add-btn mr-25  "  >
                                <div className='px-2 '>
                                    <h5 className=' text-white text1'>Add</h5>
                                </div>
                            </div>




                        </div>
                        <div className="d-flex justify-content-around mt-2 mb-2  align-items-center border-bottom" >
                            <div className='d-flex row align-items-center ms-auto ' style={{width:"25%"}}>
                                <div className='text1 '>
                                    500 Rs
                                </div>
                                <div className='d-flex align-items-center' >
                                    <div className='yellow-dot'></div>
                                    <div className="text1 ">Digital Delivery</div>
                                </div>
                            </div>

                            <div style={{width:"25%"}}  >
                                <div className="text1 cz-box text-center ml-15">7.5% off</div>
                            </div>

                            <div style={{width:"25%"}}  >
                                <div className="text1 text-center mr-10">462.50 Rs</div>
                            </div>

                            <div className="d-flex justify-content-center bg-violet text-center order-add-btn mr-25  "  >
                                <div className='px-2 '>
                                    <h5 className=' text-white text1'>Add</h5>
                                </div>
                            </div>




                        </div>
                       
                     


                    </div>

                </div>
            </div>

        </>
    )
}

export default Ordercontainer