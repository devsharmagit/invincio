import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const services = [
  {
    title: "SSB Coaching",
    description: "Comprehensive training for Services Selection Board interviews with personalized guidance and mock tests. Our expert trainers have military backgrounds to provide authentic insights and practical strategies for success.",
    icon: "🎖️",
    benefits: ["90% success rate", "Personalized feedback", "Real-time simulations"]
  },
  {
    title: "Corporate Training",
    description: "Leadership and team-building programs designed to enhance organizational performance and employee development. Our military-inspired approach transforms teams with discipline, strategic thinking, and resilience.",
    icon: "🏢",
    benefits: ["Team cohesion", "Leadership skills", "Performance optimization"]
  },
  {
    title: "School Programs",
    description: "Specialized programs for schools focusing on leadership, discipline, and character building. We help shape young minds into confident, resilient individuals through structured activities and mentorship.",
    icon: "🏫",
    benefits: ["Character development", "Confidence building", "Life skills"]
  },
  {
    title: "Skill Development",
    description: "Coming soon: Advanced skill development programs for personal and professional growth. Master critical thinking, time management, problem-solving, and communication skills with our expert trainers.",
    icon: "📚",
    benefits: ["Practical skills", "Industry relevance", "Certified programs"]
  },
  {
    title: "Motivational Speeches",
    description: "Inspiring talks for students focusing on leadership, discipline, and achieving excellence. Our speakers share real-life experiences to motivate and guide students toward successful futures.",
    icon: "🎤",
    benefits: ["Inspiring stories", "Actionable advice", "Interactive sessions"]
  }
];

const ServicesCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 py-12 transform transition-transform hover:scale-105 h-full">
      <div className="text-7xl mb-6 text-center text-[#2d4b41]">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold text-[#2d4b41] text-center mb-4">
        {service.title}
      </h3>
      <p className="text-gray-600 text-center mb-6">
        {service.description}
      </p>
      <div className="border-t border-gray-200 pt-4">
        <h4 className="text-lg font-semibold text-[#2d4b41] text-center mb-3">Key Benefits</h4>
        <ul className="flex flex-wrap justify-center gap-2">
          {service.benefits.map((benefit, idx) => (
            <li key={idx} className="bg-[#e8f0ec] text-[#2d4b41] px-3 py-1 rounded-full text-sm">
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-32 bg-[#eaeeed]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d4b41] mb-4">
            SERVICES WE OFFER
          </h2>
          <div className="w-32 h-1 bg-[#718979] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming individuals and organizations through military-inspired excellence, 
            discipline, and leadership training. Discover our specialized programs designed 
            to bring out the best in you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={false}
            className="mySwiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <ServicesCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Services