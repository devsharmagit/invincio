import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const slides = [
  {
    title: "Transform Your Space",
    description: "Expert interior design solutions for your dream home",
    buttonText: "Book a Consultation"
  },
  {
    title: "Modern Living Redefined",
    description: "Contemporary designs that inspire and delight",
    buttonText: "Schedule a Visit"
  },
  {
    title: "Luxury Interiors",
    description: "Premium designs that elevate your lifestyle",
    buttonText: "Get Started"
  },
  {
    title: "Timeless Elegance",
    description: "Classic designs that never go out of style",
    buttonText: "Book Now"
  }
];

export default () => {
  return (
    <div className='h-screen w-full'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-white p-8">
              <h1 className="text-5xl font-bold mb-4 text-center">{slide.title}</h1>
              <p className="text-xl mb-8 text-center">{slide.description}</p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                {slide.buttonText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};