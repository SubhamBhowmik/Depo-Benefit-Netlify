import React from 'react'
// css in emheader1
const backcolor = 'rgba(14, 90, 205, 0.36)'
const Smallfcard = ({ smcard }) => {
  return (
    <>
      <div className='smcard'>
        <div className="little-card">
          <div style={{ background: `${smcard.backcolor}` }}>
            <img className='img-fluid' src={smcard.img} alt="" />
          </div>
          <div className='text-cont'>
            <h4>{smcard.title1}</h4>
            <h4>{smcard.title2}</h4>
          </div>

        </div>
        <div>
          <h6>A simply way of saving your TAX through food cards.</h6>
        </div>

      </div>


    </>
  )
}

export default Smallfcard