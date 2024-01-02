import React from 'react';
import { Layout, Row, Col, Typography, Input, Button, Space } from 'antd';
import { Link } from 'react-router-dom'; 
import logo2 from '../images/whitelogo.png'
import fb from '../images/fb.png'
import ins from '../images/insta.png'
import twitt from '../images/twitt.png'
import linld from '../images/linked.png'
import '../CSSfiles/footer.css' 

const { Footer } = Layout;
const { Title, Paragraph } = Typography;

const FooterComponent = () => {
  return (
    <Footer className="footer">
      <Row className="footer-row">
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="footer-col">
          {/*-------------------------------- Left side ------------------------------------*/}
          <div className="left-section">
            <img src={logo2} alt="Logo" className="logo" />
            <br /> <br /> 
            <Paragraph className='footdesc'>
            Empowering Minds, Igniting Passions! SkillSim is an immersive event that brings together the best of education, innovation, and talent.
            </Paragraph>
            <Space size="large" className="icon-links">
              <Link to="/link1"><img className='imgs' src={fb} alt="" /></Link>
              <Link to="/link2"><img className='imgs' src={ins} alt="" /></Link>
              <Link to="/link3"><img className='imgs' src={linld} alt="" /></Link>
              <Link to="/link4"><img className='imgs' src={twitt} alt="" /></Link>
            </Space>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="footer-col">
          {/*------------------------------------------ Middle part------------------------- */}
          <div className="middle-section">
            <div className="sections">
              <div className="page-links">
                <Title  level={4}><span className="page">Page</span></Title>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/about">Contact</Link>
                <Link to="/about">Programme</Link>
                <Link to="/about">SignUp</Link>
                <Link to="/about">Login</Link>
                
              </div>
              <div className="more-links">
                <Title  level={4}><span className="more">More</span></Title>
                <Link to="/about">Privacy</Link>
                <Link to="/about">Terms</Link>
                <Link to="/about">Legal</Link>
                <Link to="/about">FAQ</Link>
                <Link to="/about">Help</Link>
                <Link to="/about">Cookies</Link>
               
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="footer-col">
          {/*-------------------------- Right side----------------------------------------------------------------- */}
          <div className="right-section">
            <Title className="subs" level={4}>Subscribe</Title>
            <Paragraph className='rightdesc'>Join our mailing list to stay in the loop with our newest for Programme</Paragraph>
            <div className="subscribe-form">
              <Input placeholder="Enter your email" className='inp' />
              <Button type="primary">Subscribe</Button>
            </div>
          </div>
        </Col>
      </Row>  
      <div className="vertical-line"></div>
      <p className='lambaline'>__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</p>

      {/* Section with Two Paragraphs */}
      <div className="section-two-paragraphs">
        <div className="first-paragraph">
          <Paragraph className='firstpara'>
          © Copyright #Skillsim@2023-2024. All Rights Reserved
          </Paragraph>
        </div>
        <div className="second-paragraph">
          <Paragraph className='firstpara'>
            Powered By Debasish Das Biswas
          </Paragraph>
        </div>
      </div>
        

    </Footer>

    
  );
};

export default FooterComponent;
