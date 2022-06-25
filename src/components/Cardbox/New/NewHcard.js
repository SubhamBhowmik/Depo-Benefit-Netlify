import React, { useState } from 'react'
import './NewHcard.css'

import ReactCardFlip from 'react-card-flip';
import { useHistory } from 'react-router-dom';
const NewHcard = ({card}) => {
    const [isFlipped, setisFlipped] = useState(false)
    const handleClick = () => {
        setisFlipped(!isFlipped)
    }
    const history = useHistory()
    return (

    
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
     
        <div className="" id='newhcard' onClick={handleClick} >
                <div className="card-- hover-zoom shadow" >
                    <div className='first-div'>
                        <h1>{card.title1}</h1>
                        <h1>{card.title2}</h1>
                    </div>
                    <div className=' second d-flex justify-content-center'>
                        <img src={card.img} alt="" />
                    </div>
                    <div className='third-div '>
                        <p>Encourage your employees by giving </p>
                        <p>seemless.</p>
                    </div>

                    <div className='fourth-div'>
                        <div className='more- shadow ripple ' onClick={()=>{history.push('/solutions#cz')}}><h3>More</h3></div>
                    </div>

                </div>
            </div>
        <div className="" id='newhcard' onClick={handleClick} >
                <div className="card--  shadow" >
                   
                    <div className='third-div '>
                        <p>Encourage your employees by giving </p>
                        <p>seemless.</p>
                    </div>

                </div>
            </div>
      
        </ReactCardFlip>
      
          

       

  


    )
}

export default NewHcard