import React from 'react'
import { Typography } from 'antd'
import spon from '../images/Sponsors.png'
import '../CSSfiles/spon.css'

const { Title } = Typography;

const Sponsors = () => {
  return (
    <div className="sponsors">
    
        <Title level={1}><span className='titl'>Our <span className='spon'>Sponsors</span> </span></Title>
        <br />

        <img src={spon} alt="" />
    
    </div>
    
  )
}

export default Sponsors