/** @jsx jsx */
import dynamic from 'next/dynamic';
import { jsx, Box, Container } from 'theme-ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/section-heading';
import photo from 'assets/images/b.png';
import photoc from 'assets/images/c.png';
const Testimonial = dynamic(() => import('components/cards/testimonial'));



const Testimonials = () => {
  const options = {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <center>
       <div id='testimonials'>
        <div>
          <h1>OUR TEAM</h1>
        </div>
        <br/>
        <div style={{margin:'10px', borderRadius:'7px',background:'transparent'}}>
          <div style={{borderRadius:'7px',padding:'6px'}}>
          <img src={photo} alt="workHard" style={{width:'75px'}}/>  
          <h3>Farhan Ibne Saif</h3>
          <h4>Founder, Intructor & Developer</h4>
          </div>
        <hr/>
        </div>
          <br/>
          <div style={{margin:'10px', borderRadius:'7px',background:'transparent'}}>
          <div style={{borderRadius:'7px',padding:'6px'}}>
          <img src={photoc} alt="workHard" style={{width:'75px',borderRadius:'50%'}}/>  
          <h3>Tousif Nehal Pratno</h3>
          <h4>Co-Founder, Instrutor </h4>
          </div>
        
        </div>
      </div>
    </center>
   
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: '#FFFCF7',
    pt: [10, null, null, 9, 10, 11, 11],
    pb: [7, null, null, 7, 7, 9, 9],
  },
  heading: {
    mb: [7, null, null, null, 8],
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  carousel: {
    '&.swiper-container': {
      pb: [8],
      pl: [6, null, null, 0],
      pr: [6, null, null, 0],
    },
  },
};
