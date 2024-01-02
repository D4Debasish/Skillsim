import React from 'react';
import { Card, Typography } from 'antd';
import '../CSSfiles/Six.css'


const { Paragraph } = Typography;

const SixCard = ({ image, title, para }) => {
  return (
    <Card className="custom-card" style={{ width: 300 }}>
      <div className="card-content">
        <div className="logo-container">
          <img src={image} alt="Logo" className="card-logo" />
        </div>
        <div className="text-content">
          <h3 className="card-title">{title}</h3>
          <Paragraph className="card-description">{para}</Paragraph>
        </div>
      </div>
    </Card>
  );
};

export default SixCard;
