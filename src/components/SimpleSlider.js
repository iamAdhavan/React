import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from '../Images/A.jpg';
import Image1 from '../Images/me.jpg';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <Slider {...settings}>
      <div>
        <img 
          src={Image} 
          alt="Slide 1" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            maxHeight: '500px', 
            objectFit: 'cover' 
          }} 
        />
      </div>
      <div>
        <img 
          src={Image1} 
          alt="Slide 2" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            maxHeight: '500px', 
            objectFit: 'cover' 
          }} 
        />
      </div>
      <div>
        <img src={Image}
            style={{ 
                width: '100%', 
                height: 'auto', 
                maxHeight: '500px', 
                objectFit: 'cover' 
              }}
        />
        
        
      </div>
    </Slider>
  );
}
