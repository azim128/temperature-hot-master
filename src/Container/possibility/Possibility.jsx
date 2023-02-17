import React from 'react'
import './possibility.css'
import  possibility  from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding'>
      <div className="gpt3__possibility-img">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <p style={{color: "#71E5FF"}}>Request Early Access to Get Started</p>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <p style={{color: "#FF8A71"}}>Request Early Access to Get Started</p>
      </div>
      
    </div>
  )
}

export default Possibility
