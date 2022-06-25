import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className='d-flex justify-content-center mt-5 mb-5 '>
     
    <MDBCard style={{marginTop:"15px", position:"relative",maxWidth: '22rem',borderRadius:"15px",overflow:"hidden"}}>
    <div>  <img src="./images/testimonial/left.png" alt="" style={{position:"absolute",height:"120px",marginLeft:"-205px",marginTop:"90px"}} />
    </div>
      <img src="./images/testimonial/1.png" alt="" style={{position:"absolute",width:"120px"}} />
    
   <MDBCardBody className='mt-2 text-center'>
  
   <img src="./images/testimonial/right.png" alt="" style={{position:"absolute",height:"120px",marginLeft:"-205px",marginTop:"290px"}} />
     <MDBCardTitle  className='text-dark' style={{marginTop:"1rem"}}>Customer</MDBCardTitle>
      <div>
    

      </div>
    
     <p style={{marginTop:"43px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores, error natus beatae incidunt culpa libero sed hic consectetur temporibus, dolores voluptates! Id, aspernatur neque tenetur minus nesciunt iste sunt?</p>
     <div rippleColor='light' rippleTag='div' className=' bg-image ' style={{justifyContent:'center',alignItems:"center",padding:"10px" }}>
     <div>
   

     </div>
     <img style={{borderRadius:"100%",height:"120px",width:"120px",}} src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
    
   </div>
   <MDBCardTitle className='text-center'>Customer Name</MDBCardTitle>
   </MDBCardBody>
 </MDBCard>
    </div>
  );
}