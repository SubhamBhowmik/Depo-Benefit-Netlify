

import React from 'react'

// styles are stored in button .css
import { Link } from 'react-router-dom'
import LoginDialogpage from './Pages/Login/LoginDialogpage';
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid">
          <Link to='/' className='navbar-logo p-2' >

            <img class="benefit-wise-logo" src='./images/BENIFIT WISE.svg' />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse  " id="navbarNav">
            <ul class="navbar-nav   ms-auto ">
              <li class="nav-item mx-5 ">
                <Link to='/' class="nav-link active hover-overlay text-bold ripple rounded hover-zoom  " >
                  <div className='font-weight-500 normal-text'>Home</div>
                </Link>
              </li>

              <li class="nav-item mx-5 temp-ml">
                <Link to='/solutions' class="nav-link active hover-overlay ripple rounded hover-zoom font-weight-500 normal-text" >Solutions</Link>
              </li>
              <li class="nav-item mx-5">
                <Link to='/pricing' class="nav-link active hover-overlay ripple rounded hover-zoom font-weight-500 normal-text" >Pricing</Link>
              </li>
              <li class="nav-item mx-5">
                <Link to='/employeeperks' class="nav-link active hover-overlay ripple rounded hover-zoom font-weight-500 normal-text" >Employee Perks</Link>
              </li>
              <li class="nav-item mx-5 nav-login-flex ">
                
                <Link to='/foodcardwallet' class=" nav-link active hover-overlay ripple rounded hover-zoom font-weight-500 normal-text" style={{}}>Foodcard Wallet</Link>
             
              </li>

              <li class="nav-item temp-mx d-flex align-items-center">
              <LoginDialogpage />
              </li>
             
               
              

            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar