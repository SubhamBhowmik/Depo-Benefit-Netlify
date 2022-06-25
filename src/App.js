import React, { useLayoutEffect } from 'react'
import Home from './components/Pages/Home/Home'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Solutions from './components/Pages/Solutions/Solutions'
import About from './components/Pages/About/About';
import Pricing from './components/Pages/Pricing/Pricing';
import Employeeperks from './components/Pages/Employee perks/Employeeperks';
import Login from './components/Pages/Login/Login'
import Checkout from './components/Pages/Checkout/Checkout';
import Checkouterror from './components/Pages/Checkout/Checkouterror';
import Multiswiper from './components/Multiswiper';
import Demo from './components/Demo';
import Bookdemo from './components/Pages/Bookdemo/Bookdemo';
import Ordersummary from './components/Pages/Ordersummary.js/Ordersummary';
import Employer from './components/Pages/Employer/Employer';
import FW from './components/Pages/FoodCard Wallet/FW';
import CheckoutRedeem from './components/Pages/Checkout/CheckoutRedeem';
import Employer1 from './components/Pages/Employer/Employer1';
import LoginDialogOTP from './components/Pages/Login/LoginDialogOTP';
import Checkoutpage1 from './components/Pages/Checkout/Checkoutpage1';
import Privacypolicy from './components/Pages/Privacy-policy-pages/Privacypolicy';
import Termsandcondition from './components/Pages/Privacy-policy-pages/Termsandcondition';
import Refundpolicy from './components/Pages/Privacy-policy-pages/Refundpolicy';
import Employer2 from './components/Pages/Employer2/Employer2';
import Employer3 from './components/Pages/Employer3/Employer3';
import Employer4 from './components/Pages/Employer4/Employer4';
const App = () => {
  return (
    <>
       <Router>
    
    
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/solutions' exact component={Solutions} />
          <Route path='/pricing' exact component={Pricing} />
          <Route path='/employeeperks' exact component={Employeeperks} />
          <Route path='/foodcardwallet' exact component={FW} />
          <Route path='/login' exact component={Login} />
          <Route path='/checkout' exact component={Checkout} />
          <Route path='/checkoutpage1' exact component={Checkoutpage1} />
          <Route path='/checkouterror' exact component={Checkouterror} />
          <Route path='/demo' exact component={Demo} />
          <Route path='/swiper' exact component={Multiswiper} />
          <Route path='/bookdemo' exact component={Bookdemo} />
          <Route path='/ordersummary' exact component={Ordersummary} />
          <Route path='/employer' exact component={Employer} />
          <Route path='/checkoutredeem' exact component={CheckoutRedeem} />
          <Route path='/landingpage1' exact component={Employer1} />
          <Route path='/landingpage2' exact component={Employer2} />
          <Route path='/landingpage3' exact component={Employer3} />
          <Route path='/landingpage4' exact component={Employer4} />
          <Route path='/loginOTP' exact component={LoginDialogOTP} />
          <Route path='/privacypolicy' exact component={Privacypolicy} />
          <Route path='/termsandconditions' exact component={Termsandcondition} />
          <Route path='/refundpolicy' exact component={Refundpolicy} />
          
        </Switch>
      </Router>

    </>
  )
}

export default App
