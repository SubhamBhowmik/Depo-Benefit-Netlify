import React,{useState,useEffect} from 'react'
import './checkoutpage1.css'
import Footer from '../../Footer';
import Navbarwithavatar from '../../Navbarwithavatar'
import { useHistory } from 'react-router-dom';
const Checkoutpage1 = () => {
  const history=useHistory()

    const [counter, setCounter] = useState(6);

    const handleIncrement = () => {
      setCounter(counter => counter + 1);
    };
  
    const handleDecrement = () => {
      setCounter(counter => counter - 1);
    };

    useEffect(() => {
     window.scrollTo(0,0)
    }, [])
  return (
  <>
     <Navbarwithavatar/>
        <div className='container'>
        
        <div className="mt-5 mb-5">
          <div className="order-text">
            Order Information
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
        
          <div className="violet-box d-flex justify-content-around align-items-center">

            <div className="d-flex align-items-center">
              <img src="./images/check/myntra-logo.png" alt="" style={{ height: "40px", width: "40px" }} />
              <div className="text-h2">Myntra</div>
            </div>
            <div >
              <div className="text-h2">Myntra Gift Card</div>
            </div>
            <div >
              <div className="text-h2 "><strike className='text-muted'>RS 100</strike></div>
            </div>
            <div >
              <div className="text-h2 text-muted">RS 75</div>
            </div>
            <div className='d-flex text align-items-center mt-2 ' >

              <div onClick={() => handleIncrement()}><h4 className='text-h2 px-2'>+ </h4></div>
              <div disabled className=''><h4 className='text-h2'>{counter}</h4></div>
              <div className='px-2' onClick={() => handleDecrement()} disabled={counter == 0} ><h4 className='text-h2'>-</h4></div>
            </div>


          </div>
        </div>



        {/* ❤❤❤🤷‍♂️🤷‍♂️🤷‍♀️ */}


        <div className="d-flex justify-content-center mt-5">
          <div className='text text-h2 mt-5' style={{ color: "rgba(6, 44, 48, 1)" }}>
            Price Details
          </div>
        </div>

        <div className='d-flex justify-content-center mt-3'>
          <div className='violet-box  align-items-center'>
            <div className="d-flex justify-content-around border-bottom mt-2">
              <div className='text-h2' >Item Price </div>
              <div className='text-h2 text-muted'> 500 Rs</div>
            </div>
            <div className="d-flex justify-content-around border-bottom mt-2">
              <div className='text-h2' >Discount </div>
              <div className='text-h2 text-muted'> 42.50 Rs</div>
            </div>
            <div className="d-flex justify-content-around align-items-center border-bottom mt-2">
              <div className='text-h1' >Total </div>
              <div className='text-h2 text-muted'> 462.50 Rs</div>
            </div>


          </div>
        </div>

        <div className='d-flex justify-content-around mt-5'>
          <div class="radio-item">
            <input type="radio" id="ritema" name="ritem" value="ropt1" />
            <label for="ritema">Pay using UPI</label>
          </div>

          <div class="radio-item">
            <input type="radio" id="ritemb" name="ritem" value="ropt2" />
            <label for="ritemb">Benefit wise points</label>
          </div>
          <div class="radio-item">
            <input type="radio" id="ritemc" name="ritem" value="ropt3" />
            <label for="ritemc text1">Other payment methods</label>
          </div>

        </div>

        <div className="d-flex justify-content-center mt-5">
          <div className=" text-center d-flex justify-content-center text-white proceed-btn align-items-center">
                <div className='text-white text-h2' onClick={()=>history.push('/checkout')}>Proceed to Pay</div>
          </div>
        </div>

      </div>
      <Footer/>
  </>
  )
}

export default Checkoutpage1