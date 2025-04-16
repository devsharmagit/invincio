import React from 'react';
import course1 from '../assets/course1.jpg';

interface CourseData {
  title: string;
  description: string;
  imageAlt: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

const courseData: CourseData[] = [
  {
    title: "NDA COURSE",
    description: "Best NDA Coaching in India for NDA Written & SSB Preparation.",
    imageAlt: "NDA Coaching",
    imageUrl: course1,
    ctaText: "Enroll Now",
    ctaLink: "/courses/nda"
  },
  {
    title: "SSB COURSE",
    description: "Individual guidance & tailored feedback, Centurion, Best SSB Coaching in India.",
    imageAlt: "SSB Coaching",
    imageUrl: course1,
    ctaText: "Join SSB Training",
    ctaLink: "/courses/ssb"
  },
  {
    title: "CDS COURSE",
    description: "Best CDS Coaching in India with complete written + SSB Preparation.",
    imageAlt: "CDS Coaching",
    imageUrl: course1,
    ctaText: "Explore CDS",
    ctaLink: "/courses/cds"
  },
  {
    title: "AFCAT COURSE",
    description: "Best AFCAT Coaching in India for AFCAT Written + AFSB Interview.",
    imageAlt: "AFCAT Coaching",
    imageUrl: course1,
    ctaText: "Know More",
    ctaLink: "/courses/afcat"
  },
  {
    title: "MNS NEET AFMC COURSE",
    description: "Consistently Producing AIR-1 in NEET & MNS as Best MNS Coaching in India",
    imageAlt: "MNS Foundation Coaching",
    imageUrl: course1,
    ctaText: "Apply Today",
    ctaLink: "/courses/mns-neet-afmc"
  },
  {
    title: "NDA 9th FOUNDATION COURSE",
    description: "Centurion Juniors, Exclusive Launchpad for NDA Success in 1st Attempt",
    imageAlt: "9th foundation",
    imageUrl: course1,
    ctaText: "Start Early",
    ctaLink: "/courses/nda-9th-foundation"
  },
  {
    title: "NDA 11th FOUNDATION COURSE",
    description: "Holistic Training for NDA, Join the Most Successful Batch After Class 10",
    imageAlt: "NDA Foundation Coaching",
    imageUrl: course1,
    ctaText: "Begin Journey",
    ctaLink: "/courses/nda-11th-foundation"
  },
  {
    title: "NDA 12th FOUNDATION COURSE",
    description: "Smart Strategy, 12th Boards & NDA Prep for One-Shot Success",
    imageAlt: "NDA Coaching",
    imageUrl: course1,
    ctaText: "Last Chance",
    ctaLink: "/courses/nda-12th-foundation"
  }
];

const Courses: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F6491] mb-4">
            Our Premier Courses
          </h2>
          <div className="w-24 h-1 bg-[#F5AF19] mx-auto mb-4"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Exceptional training programs designed by experts to ensure your success in defense examinations and interviews.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseData.map((course, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-48">
                <img 
                  src={course.imageUrl} 
                  alt={course.imageAlt}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F6491] mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 text-sm h-16">{course.description}</p>
                <a href={course.ctaLink}>
                  <span className="inline-block w-full text-center py-2 px-4 bg-[#239BD7] hover:bg-[#0F6491] text-white font-semibold rounded-md transition-colors duration-300">
                    {course.ctaText}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;