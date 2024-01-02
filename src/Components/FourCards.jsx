import React from 'react'
import {Card,  Typography} from 'antd'
import cardim from '../images/cardim.png'
import '../CSSfiles/Card.css'


const {Meta} = Card;
const {Paragraph} = Typography;

const FourCards = ({title,para,diffcrd}) => {
  const cardClassName = diffcrd ? 'card__main_diffcrd' : 'card__main';
  const cardPara =  diffcrd ? 'card_pradiff' : 'card_pra';
  const metaTitleClassName = diffcrd ? 'metaTitlediff' : 'maetaTitle';

  return (
    <Card className={cardClassName}>
    <div className="card_content">
     <div className="card_img">
       <img src={cardim} alt="" />
     </div>
     <Meta
     title={<span className={metaTitleClassName}>{title}</span>}    
     description={
       <Paragraph className={cardPara}>
       {para}
       </Paragraph>
     }
    />

    
    </div>
    
    </Card>
  )
}

export default FourCards