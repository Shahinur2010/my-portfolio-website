import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    'https://i.ibb.co/sJpwCdJ/Screenshot-1.png',
    'https://i.ibb.co/zn8g5gQ/Screenshot-2.png',
    'https://i.ibb.co/cwwnGmB/Screenshot-3.png',
    'https://i.ibb.co/St2BywS/Screenshot-4.png',
    'https://i.ibb.co/xjKgJVh/Screenshot-5.png',
    'https://i.ibb.co/k8jx0NC/Screenshot-6.png',
    'https://i.ibb.co/82Q7kg9/Screenshot-7.png',
    'https://i.ibb.co/T23CqkM/Screenshot-8.png',
    'https://i.ibb.co/ygJtx8L/Screenshot-9.png'
  ]

const MySlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return (
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    );
  };

export default MySlider;