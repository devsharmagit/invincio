import React from 'react';
import { FaChartLine, FaUserTie, FaBalanceScale, FaRoad, FaChartBar, FaLaptop, FaBriefcase, FaTrophy } from 'react-icons/fa';

interface DifferentiatorData {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const differentiatorData: DifferentiatorData[] = [
  {
    title: "HOLISTIC PERSONALITY ANALYSIS",
    description: "Combines SSB techniques and psychometric tools for a complete evaluation.",
    icon: <FaUserTie className="w-12 h-12" />
  },
  {
    title: "DATA-DRIVEN INDIVIDUAL DEVELOPMENT PLANS",
    description: "Customised training with progress tracking.",
    icon: <FaChartLine className="w-12 h-12" />
  },
  {
    title: "OBJECTIVE AND BIAS-FREE ASSESSMENTS",
    description: "Ensures fair and accurate evaluations.",
    icon: <FaBalanceScale className="w-12 h-12" />
  },
  {
    title: "PREDICTIVE CAREER MAPPING",
    description: "Identifies the best career path based on strengths.",
    icon: <FaRoad className="w-12 h-12" />
  },
  {
    title: "BEHAVIORAL PATTERN RECOGNITION",
    description: "Tracks trends and adapts mentoring accordingly.",
    icon: <FaChartBar className="w-12 h-12" />
  },
  {
    title: "HYBRID LEARNING MODEL",
    description: "Integrates real-world tasks with interactive assessments.",
    icon: <FaLaptop className="w-12 h-12" />
  },
  {
    title: "CORPORATE & DEFENSE READINESS",
    description: "Prepares candidates for leadership roles.",
    icon: <FaBriefcase className="w-12 h-12" />
  },
  {
    title: "INDUSTRY BENCHMARKING",
    description: "Compares performance with industry benchmarks.",
    icon: <FaTrophy className="w-12 h-12" />
  }
];

const OurDifferentiators: React.FC = () => {
  return (
    <section className="py-16 bg-[#eaeeed]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d4b41] mb-4">
            OUR DIFFERENTIATORS
          </h2>
          <div className="w-24 h-1 bg-[#718979] mx-auto mb-4"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Success today requires personality, leadership, and adaptability. Our academy blends SSB profiling with psychometric assessments for holistic development, personalized growth, and career readiness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiatorData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 p-6"
            >
              <div className="flex justify-center mb-4 text-[#2d4b41]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2d4b41] mb-2 text-center">{item.title}</h3>
              <p className="text-gray-600 text-sm text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDifferentiators;