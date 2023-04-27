import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
        <Header />
        <div id='main-page-section' className='main-page-section-one'>
          <h3>Your Journey Begins</h3>
          <h4>Miles with Mal will take you through tips, tricks, and trip itineraries</h4>
          <Link to="/about">
          <button>About Mal</button>
          </Link>
        </div>

        <div id='main-page-section' className='main-page-section-two'>
          <h4>Where to next?</h4>
          <Link to="/trips">
          <button>Explore the World</button>
          </Link>
        </div>

        
        <div id='main-page-section' className='main-page-section-three'>
          <div>
            <h4>Discover Unlimited Beauty</h4>
            <h5>Meet different people, cultures, traditions and landscapes. Choose your next destination.</h5>
          </div>
          <div>
            <img />
          </div>
        </div>
       
        <div id='main-page-section' className='main-page-section-four'>
          <h4>Upcoming Tours and Destinations</h4>
          <div>
            <img />
            <img />
            <img />
            <img />
          </div>
        </div>
        
    
        <div id='main-page-section' className='main-page-section-five'>
          <div>
            <img />
          </div>
          <div>
            <h4>Stay a While</h4>
            <h3>This space is meant to be informative, helpful, and fun. Have a look around and let me know what you think! 
              -Mal
            </h3>
          </div>
        </div>
       

         <div id='main-page-section' className='main-page-section-six'>
          <div>
            <h4>itineraries</h4>
            <h3>Working on bringing you time-efficient ways to see your destinations!</h3>
          </div>
          <div></div>
        </div>
       
        <div id='main-page-section' className='main-page-section-seven'>
          <h4>Dream about the miles ahead of you</h4>
        </div>
        <Footer />
    </div>
  )
}

export default MainPage