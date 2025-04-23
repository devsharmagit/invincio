import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const services = [
  {
    title: "SSB Coaching",
    description: "Comprehensive training for Services Selection Board interviews with personalized guidance and mock tests.",
    icon: "🎖️"
  },
  {
    title: "Corporate Training",
    description: "Leadership and team-building programs designed to enhance organizational performance and employee development.",
    icon: "🏢"
  },
  {
    title: "School Programs",
    description: "Specialized programs for schools focusing on leadership, discipline, and character building.",
    icon: "🏫"
  },
  {
    title: "Skill Development",
    description: "Coming soon: Advanced skill development programs for personal and professional growth.",
    icon: "📚"
  },
  {
    title: "Motivational Speeches",
    description: "Inspiring talks for students focusing on leadership, discipline, and achieving excellence.",
    icon: "🎤"
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-[#eaeeed]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d4b41] mb-4">
            SERVICES WE OFFER
          </h2>
          <div className="w-24 h-1 bg-[#718979] mx-auto mb-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
           
            navigation={false}
            className="mySwiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform hover:scale-105">
                  <div className="text-6xl mb-6 text-center text-[#2d4b41]">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#2d4b41] text-center mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Services