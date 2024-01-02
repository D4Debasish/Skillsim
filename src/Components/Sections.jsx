import React from 'react'
import { Typography } from 'antd';
import '../CSSfiles/sections.css'

const {  Paragraph,Title } = Typography;

const Sections = () => {
  return (
    <div className="sections">
        <div className="writes">    
            <Title className='sectiontitle' level={2}><span className='spp'>If You Have Any Queries Feel, <br /> Free To Contact Us </span></Title>
            <Paragraph className='pra'>Click on the button to fill in the contact us for</Paragraph>
        
        </div>
        
        <div className="buttons">
        <button className='btns'>Contact us</button>
        </div>
    
    </div>
  )
}

export default Sections