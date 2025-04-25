import partnership1 from "../assets/partnership/partnership2.png"
import podcast from "../assets/partnership/podcaster collab.jpg"
import React from 'react'

const Partnership = () => {
  return (
    <section className="py-16 bg-white/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d4b41] mb-4">
            OUR PARTNERSHIPS
          </h2>
          <div className="w-24 h-1 bg-[#718979] mx-auto mb-8"></div>

          {/* Disha Kiran Partnership */}
          <div className="mb-16"> 
            <p className="text-xl font-semibold text-gray-700 max-w-3xl mx-auto mb-12">
              Disha Kiran's NEP 2020-compliant assessments, which are
              scientifically accredited to ensure a high degree of accuracy, reliability,
              and validity. These assessments, tailored to the Indian context by a
              team of expert practicing psychologists and psychometrists, provide
              unparalleled insights into the cognitive and emotional development of
              children, teens, and young adults. With 4 million+ assessments in India,
              Disha Kiran is one of the leading platforms in India.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div>
              <h3 className="text-2xl font-semibold text-[#2d4b41] mb-2 text-center">
                INVINCIO SERVICES LLP X DISHA KIRAN
              </h3>
              <img src={partnership1} alt="Disha Kiran Partnership" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="flex flex-col justify-center space-y-4 text-left">
                <h3 className="text-2xl font-semibold text-[#2d4b41] mb-4">Key Features</h3>
                <ul className="space-y-3 text-xl font-semibold text-gray-700">
                  <li className="flex items-center">
                    <span className="mr-2">▷</span>
                    Seamless Offline-Online Integration
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">▷</span>
                    Personalized Learning Journeys
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">▷</span>
                    Scalable Reach, Tailored Impact
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">▷</span>
                    Data-Driven Decision-Making
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">▷</span>
                    Holistic Skill Development
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-xl font-semibold text-gray-700 max-w-3xl mx-auto italic">
              This partnership redefines training and assessment by leveraging
              the strengths of both platforms to deliver unparalleled value!
            </p>
          </div>

          {/* Podcast Section */}
          <div className="bg-[#eaeeed] rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[#2d4b41] mb-6">Featured Podcast</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="aspect-w-9 aspect-h-16">
                <img 
                  src={podcast} 
                  alt="Infinite Talk Podcast" 
                  className="rounded-lg shadow-md object-cover h-[400px] w-full"
                />
              </div>
              <div className="text-left">
                <h4 className="text-2xl font-semibold mb-4">Infinite Talk Collaboration</h4>
                <p className="text-xl font-semibold text-gray-700 mb-6">
                  Join us in our engaging discussion on the Infinite Talk podcast where we explore
                  innovative approaches to education and skill development.
                </p>
                <a 
                  href="https://www.youtube.com/watch?v=-UFYWKpxyr0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#2d4b41] text-white rounded-lg hover:bg-[#3a5f52] transition-colors"
                >
                  <span className="mr-2">Watch Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partnership