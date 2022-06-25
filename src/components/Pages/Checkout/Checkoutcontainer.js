import React from 'react'
import { Link } from 'react-router-dom'
const Checkoutcontainer = () => {
    return (
        <>
            <div className="conatainer-fluid p-5">

                <div class="col-md-12 d-flex justify-content-center ">
                    <div class="col-md-6 ">
                        <div class="border-radiuss hover-overlay hover-shadow ripple  shadow gradient-custom" width="200" height="50">
                            <div class="">
                                <div className='d-flex justify-content-center border-radiuss  '>
                                    <img className='image-fluid' src="./images/check/check1.png" alt="" style={{height:"30vh"}}/>
                                </div>
                                <div className="card-body">
                                    <h5 class="card-title text-center p-1 ">
                                        Thank you so much  for your order
                                    </h5>
                                
                                    <div className='text-center p-2'>
                                        <button class="border-0 p-2 text-white hover-overlay hover-zoom hover-shadow ripple bg-violet border-radiuss">
                                            <h5 className="  text-decoration-none  ">
                                            Check Status
                                            </h5>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkoutcontainer