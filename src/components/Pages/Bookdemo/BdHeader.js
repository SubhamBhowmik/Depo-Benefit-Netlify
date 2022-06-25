import React from 'react'

const BdHeader = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="col-md-12 text-center font-weight-bold mt-3 p-5 text-format ">
          <h2>
            Learn how  <span className='text-orange'>Benefit</span><span className='text-violet'>-wise</span> DelIvers Better result
          </h2>
        </div>
        <div className="col-md-12 text-center px-5  d-flex justify-content-center ">
          <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusamus conseq
            uuntur ad dolore ratione. Veniam et odit illum culpa pariatur commodi error voluptatibus
            nihil consequatur unde? Quis autem vel delectus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusamus consequunt
            ad dolore ratione. Veniam et odit illum culpa pariatur commodi error voluptatibus nihil consequatur
            unde? Quis autem vel delectus
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusamus consequuntur ad dolore ratione. Veniam et odit illum culpa pariatur commodi error voluptatibus nihil consequatur unde? Quis autem vel delectus.
          </div>
        </div>
      </div>
      <div className="bg-testimonial">
        <div className="container mt-3">
          <div className="d-flex justify-content-center">
            <form className='mt-3 mb-5'>
              <div class="">
                <div class="border bg-white border-radiuss mt-2 p-4 float-left">
                  <div class="card-body">

                    <div class="container">
                      <form id="contact-form bg-white" role="form">

                        <div className="text-format text-center border-bottom mb-3">
                          <h2>Request a <span className='text-violet'>Demo</span> </h2>
                        </div>


                        <div class="controls">

                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">

                                <input id="form_name" type="text" name="name" class="form-control mb-3" placeholder=" First Name " required="required" data-error="Firstname is required." />

                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">

                                <input id="form_lastname" type="text" name="surname" class="form-control" placeholder=" Last Name " required="required" data-error="Lastname is required." />
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group mt-3">

                                <input id="form_name" type="text" name="name" class="form-control mb-3" placeholder=" Phone Number" required="required" data-error="Firstname is required." />

                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group  mt-3">

                                <input id="form_lastname" type="text" name="surname" class="form-control" placeholder=" Work Email " required="required" data-error="Lastname is required." />
                              </div>
                            </div>
                          </div>



                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group mt-3">

                                <input id="form_name" type="text" name="name" class="form-control mb-3" placeholder=" Company Name " required="required" data-error="Firstname is required." />

                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group mt-3">

                                <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Designation " required="required" data-error="Lastname is required." />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group mt-3">

                                <input id="form_name" type="text" name="name" class="form-control mb-3" placeholder="No of Employees " required="required" data-error="Firstname is required." />

                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group mt-3">

                                <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Department" required="required" data-error="Lastname is required." />
                              </div>
                            </div>
                          </div>



                          <div class="row">

                            <div class="form-group mt-3">

                              <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea>

                            </div>











                          </div>
                          <div className='d-flex justify-content-center'>
                            <div className='sch-btn'>
                              <h3>Schedule Demo</h3>
                            </div>
                          </div>



                        </div>
                      </form>

                    </div>
                  </div>


                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default BdHeader