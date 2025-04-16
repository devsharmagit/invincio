import React from 'react';
import mentor1 from "../assets/mentor1.jpeg"

interface MentorData {
  name: string;
  title?: string;
  description: string;
  imageUrl: string;
}

const mentorData: MentorData[] = [
  {
    name: "Brig Ajay Sharma, VSM",
    description: "Expert in personality assessment with extensive experience, having conducted 2500+ interviews and mentored 1000+ aspirants, many of whom have joined Officer Training Institutions of the Armed Forces.",
    imageUrl: mentor1,
  },
  {
    name: "Brig Sanjay Kurelay",
    description: "Veteran with 42 years in uniform, NDA & IMA alum, and MTech from IIT Kharagpur. Served as SSB President, conducting 3,500+ interviews and mentoring countless aspirants.",
    imageUrl: mentor1,
  },
  {
    name: "Col Anupam Suden",
    description: "He is a Personality Profiler, Assessor, and Behavior Analyst with years of experience, mentoring 3,500+ candidates. He conducts personality enhancement sessions, team bonding events, and campus placement workshops.",
    imageUrl: mentor1,
  },
  {
    name: "Col Ranjit Singh",
    description: "Army veteran with 30+ years of service, expert in SSB assessments and training. Assessed 3,000+ candidates, trained 7,000+ aspirants, and conducted 3,500+ interviews with high success rates.",
    imageUrl: mentor1,
  },
  {
    name: "Colonel Karandeep Singh",
    description: "Veteran with 27 years in military and corporate leadership. Expert in personality development, assessing 2,100+ candidates, and mentoring future leaders.",
    imageUrl: mentor1,
  },
  {
    name: "Gp Capt Vikram Singh",
    description: "A Gold Medalist in Aviation Law & Air Transport Management, this highly experienced Air Force veteran excels in aviation, leadership, and combat operations. With 3,000+ accident-free flight hours and Flight Safety 3 Stars, he has mentored thousands to success.",
    imageUrl: mentor1,
  }
];

const MentorsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F6491] mb-4">
            MEET OUR TEAM
          </h2>
          <div className="w-24 h-1 bg-[#F5AF19] mx-auto mb-4"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Learn from distinguished veterans with decades of experience in defense services and assessment. Our mentors have guided thousands of successful candidates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentorData.map((mentor, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={mentor.imageUrl} 
                  alt={mentor.name}
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F6491]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-[#0F6491]">{mentor.name}</h3>
                </div>
                
                {mentor.title && (
                  <p className="text-[#F0642D] font-medium mb-3">{mentor.title}</p>
                )}
                
                <p className="text-gray-600 text-sm">
                  {mentor.description}
                </p>
              </div>
              
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;