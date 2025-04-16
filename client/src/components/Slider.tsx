import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import image1 from '../assets/image1.webp';
import image2 from '../assets/image2.webp';
import image3 from '../assets/image3.webp';

const slides = [image1, image2, image3];

export default () => {
  return (
    <div className='h-screen max-h-[400px] w-full'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        allowTouchMove={true}
        className="h-full w-full"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <div className="h-full w-full">
              <img 
                src={image} 
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};