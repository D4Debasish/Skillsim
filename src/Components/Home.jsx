import React from 'react'
import Navbar from './Navbar'
import logo from '../images/Group 1171275231.png'
import '../CSSfiles/Home.css'
import { Typography } from 'antd';
import VideoH from './VideoH'
import FourCards from './FourCards';
import SixCards from './SixCards';
import Sponsors from './Sponsors';
import Upcoming from './Upcoming';
import recA from '../images/Rectangle A.png'
import recB from '../images/Rectangle B.png'
import recC from '../images/Rectangle C.png'
import recD from '../images/Rectangle D.png'
import recE from '../images/Rectangle E.png'
import recF from '../images/Rectangle F.png'
import Sections from './Sections';
import FooterComponent from './FooterComponent';


const { Title, Paragraph } = Typography;



const Home = () => {
  return (
    <div className='Home__main'>
    
    <Navbar/>


    {/* ------------------------------------------BIG IMAGE----------------------------------------------------------------  */}
    
    <div className="big_img">
            <img src={logo} alt="" />
    </div>

     {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

    <div className="home__writes">
         <div className="home__left">
            <Title className='home__leftTitle' level={1}>What If You Could <br />
                    Try <span> Out Your Future <br />
                    Career Today? </span>
            </Title>
         </div>
        <div className="home__right">
        <Paragraph className='home__rightPara'>
            <Title level={3}>Imagine Stepping Into The Shoes Of A <br />
            Doctor For A Day - </Title> 
            Treating patients in a simulated hospital, wearing a
            white coat, and using a stethoscope.  
            Or picture yourself as a 
            startup founder, brainstorming groundbreaking business 
            ideas and pitching investors on your innovative company.</Paragraph>  
        <Paragraph>
            With SkillSim, you can immerse yourself in your dream 
            career through real-world simulations designed and 
            delivered by industry experts. Whether you aspire to be 
            an engineer,
            entrepreneur, doctor or teacher, SkillSim 
            offers a sneak peek into many exciting 
            fields with hands-on, 
            internship-like experiences, insider tips, 
            and mentorship from industry professionals.</Paragraph>
        
        </div>
    
    </div>
    <br />
    <br />
            <VideoH/>
     <br />
    <br />
     
     <div className="home_four">
          <Title className='four' level={3}><span>During our transformational 2-day weekend experiences, you'll get to</span></Title>
     </div>
     <div className="four__c">
          <FourCards diffcrd title = "Art of Problem-Solving" para="Take on challenges in a realistic workplace setting to problem solve like
          a pro. 
          Our cutting-edge simulations mirror and give you hand-on experience
          of real on-the-job scenarios."/>
          <FourCards title="Exclusive Mentoring & Insider" para="Receive personal mentoring and career guidance from industry professionals at the top of their game. Learn trade secrets that give you a leg up."/>
          <FourCards title="Impressive Portfolios" para="Get tips on building connections and a personal brand that open doors through networking and use of social media platforms. Make lifelong friends with peers chasing similar dreams."/>
          <FourCards title="Impressive Portfolios" para="Get tips on building connections and a personal brand that open doors through networking and use of social media platforms. Make lifelong friends with peers chasing similar dreams."/>
    </div>

    {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  */}
    
    {/* ----------------------------------------------------MIDDLE PART-------------------------------------------------------------------------------------------------------  */}

  

     <div className="home_middle">
          <Title className='midd_title' level={1}> Our Transformational <span>Experiences</span></Title>
          <Paragraph className='home_middlePara'>During Our Transformational 2-Day Weekend Experiences </Paragraph>
     </div>
     <div className="home-container">
     <div className="top-row">
       <SixCards
         image={recA}
         title="Skills Unleashed"
         para="Take on challenges in a realistic workplace setting to problem solve like a pro. "
       />
       <SixCards
         image={recB}
         title="Exclusive Mentoring"
         para="Receive personal mentoring and career guidance from industry professionals at the top of their game."
       />
       <SixCards
         image={recC}
         title="Impressive Portfolios"
         para="Come away with amazing updated & achievements to highlight on your college and job applications."
       />
     </div>
     <div className="bottom-row">
       <SixCards
         image={recD}
         title="Craft Your Personal Brand"
         para="Make lifelong friends with peers chasing similar 
         dreams."
       />
       <SixCards
         image={recE}
         title="Path to Excellence"
         para="Get the inside scoop on how to gain the skills, education, and experience needed to excel in your chosen path."
       />
       <SixCards
         image={recF}
         title="Refine Your Career Path"
         para="Add-on psychometric tests to completely secure your choice of career"
       />
     </div>
   </div>
     <br />
     <br />
     <br />
     <br />
     {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  */}


     {/*------------------------------- Sponsors-----------------------------------------------------------------------  */}
   <div className="sponpart">
     <Sponsors/>
   </div>
    
      {/* ---------------------------Upcoming Programs-------------------------------------------------------------------------------  */}

      <div className="upcoming_home">
      
          <div className="words">
          <Title level={1}><span className='upcom_head'>Few Of Our <span className='upcom'>Upcoming</span>Programs </span></Title>
          <Paragraph className='upcompara'>
          Empowering Minds, Igniting Passions! SkillSim is an immersive event that brings <br />
          together the best of education, innovation, and talent.</Paragraph> 
          </div>

          <div className="upcards">
            <Upcoming/>
          
          </div>
          <div className="viewall">
            <button>VIEW ALL</button>
          
          </div>
          
      
      </div>

      {/*----------------------------------------------------------------------------------------------------------------------------------  */}
       <div className="homesection">
       <Sections/>
       </div>
       
       {/*---------------------------------footer---------------------------------------------------------------------------------------  */}
        
       <div className="footer">
           <FooterComponent/>
       </div>


     

</div>
  )
}

export default Home
