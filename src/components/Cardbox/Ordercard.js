import React from 'react'

const Ordercard = () => {
  return (
<>
<div className=" justify-content-center">
       

       <div className="order-card p-2 " style={{overflow:"hidden"}}>
       <button type="button " class=" mt-ml-view order-view-btn hover-overlay hover-zoom hover-shadow ripple" style={{ position:"absolute",  }}>View</button>
          <img src="./images/ordersummary/electronics-removebg-preview 4.png" alt=""  className='order-card-img' style={{poistion:"relative"}} />
       </div>
        <div className='text text-center mt-2'>
          Electronics
        </div>
     </div>

</>
  )
}

export default Ordercard