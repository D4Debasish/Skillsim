import React from 'react';
import { Card, Typography, Button } from 'antd';
import program from './program'; 
import '../CSSfiles/upcoming.css'; 

const { Meta } = Card;
const {  Paragraph } = Typography;

const Upcoming = () => {
  return (
    <div className="card-container">
      {program.map((item) => (
        <Card key={item.id} className="card" cover={<img alt={item.name} src={item.image} />}>
          <Meta
            title={<span className="itemname">{item.name}</span>}
            description={
              <React.Fragment>
                <Paragraph className='prrra'>
                  <strong>Date:</strong> {item.date} | <strong>Location:</strong> {item.location}
                </Paragraph>
                <Paragraph className='desc'>{item.desc}</Paragraph>
                <div className="price-button-container">
                  <div className='pricetag'>
                    <strong>₹{item.price.toFixed(2)}</strong>
                  </div>
                  <Button type="primary">Book Now</Button>
                </div>
              </React.Fragment>
            }
          />
        </Card>
      ))}
    </div>
  );
};

export default Upcoming;
