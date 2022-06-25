import React from 'react'
import './employer3header.css'
import Table from '../../Table/Table'
const Employer3header = () => {

    return (
        <>

            <section id='em2'>
                <div class="pri-header em-bg3 ">
                    <img className='child-img' src="./images/employer3/Ellipse 697.svg" alt="" />
                    <img className='child-img-2' src="./images/employer3/Ellipse 695.svg" alt="" />
                    <img className='child-img-3' src="./images/employer3/Ellipse 697.svg" alt="" />
                    <div class="pri-header-wrapper">


                        <div class="pri-header-left" style={{ width: "50%" }}>

                            <img src="./images/employer3/khana.svg" class="img-fluid" alt="Web Development" />


                        </div>
                        <div class="pri-header-right" style={{ width: "50%" }}>
                            <div className="text-cont">
                                <h1>Food Card</h1>
                                <h6>Saving Tax now easily </h6>
                            </div>
                        </div>
                    </div>


                </div>


                <div className='czx-wrapper' style={{ background: "rgb(255 235 221 / 64%)" }}>
                    <div className=' simple-text d-flex justify-content-center'>
                        <h1>Simple Onboarding</h1>
                    </div>
                    <div className='d-flex justify-content-center'>

                        <div className="d-flex">
                            <div className='wallet-wrap'>
                                <div className="d-flex justify-content-center">
                                    <i class="fa-solid  fa-wallet  fa-4x"></i>
                                </div>

                                <div className=''>
                                    <h3>Recharge your</h3>
                                    <h3> Wallet</h3>
                                </div>
                            </div>
                            <div className='wallet-wrap'>
                                <div className="d-flex justify-content-center">
                                    <i class="fa-solid  fa-wallet  fa-4x"></i>

                                </div>

                                <div className=''>
                                    <h3>Upload your </h3>
                                    <h3> template</h3>
                                </div>
                            </div>
                            <div className='wallet-wrap'>
                                <div className="d-flex justify-content-center">
                                    <i class="fa-solid  fa-wallet  fa-4x"></i>
                                </div>

                                <div className=''>
                                    <h3>Add Employee
                                    </h3>
                                    <h3>Data</h3>
                                </div>
                            </div>
                            <div className='wallet-wrap'>
                                <div className="d-flex justify-content-center">
                                    <i class="fa-solid  fa-wallet  fa-4x"></i>
                                </div>

                                <div className=''>
                                    <h3>Review and
                                    </h3>
                                    <h3>Submit</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>




                <div className="container"  >
          
                    <div className="lomba-text">
                        <h1>Update your Wallet for more benefits</h1>
                    </div>
                    <div className='d-flex justify-content-center' style={{ position: "relative" }}>

                     
                        <div className="redcard-wrap">

                            <div className="left" style={{ width: "50%" }}  >
                                <div className="red-bg">
                                    <div className='first-div'>
                                        <div>
                                            <h3>Amount</h3>
                                            <input type="text" />
                                        </div>
                                        <div className='prepaid'>
                                            <h3>Prepaid</h3>
                                        </div>
                                    </div>

                                    <div className='second-di'>
                                        <h3>Add Money</h3>
                                    </div>
                                </div>

                            </div>
                            <div className="right" >
                                <p>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur.</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div style={{position: "relative"}}>
                <img className='ora-img' src="./images/Foodcardwallet/orange.svg" alt="" />
                </div>
                <div style={{ position: "relative",height:"300px",overflow:"hidden" }}>

                    <img className='vio-img' src="./images/Foodcardwallet/violet.svg" alt="" />

                </div>
                  <Table/>
            </section>




        </>
    )
}

export default Employer3header