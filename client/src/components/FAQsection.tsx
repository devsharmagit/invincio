import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What makes Centurion Defence Academy different from other coaching institutes?",
    answer: "Centurion Defence Academy stands out with its exclusive team of defence veterans who bring decades of real service experience to the classroom. Our mentors include former SSB presidents and military leaders who provide insights that textbooks can't offer. We maintain small batch sizes to ensure personalized attention, and our comprehensive approach covers both written exams and SSB interview preparation. Our track record speaks for itself, with consistently high selection rates across NDA, CDS, AFCAT and other defence exams."
  },
  {
    question: "How long are the coaching programs?",
    answer: "Our coaching programs vary in duration based on the exam and your preparation level. The standard NDA course runs for 3-4 months, SSB coaching is typically 14-21 days intensive training, CDS and AFCAT courses run for 2-3 months. Our foundation courses for 9th, 11th, and 12th standards are designed as year-long programs with structured milestones. We also offer weekend batches and crash courses before exams. During your counselling session, we'll recommend the ideal duration based on your current preparation level and target exam dates."
  },
  {
    question: "Do you provide study materials and mock tests?",
    answer: "Yes, our comprehensive study package includes detailed subject notes prepared by domain experts, topical worksheets, previous years' question papers with solutions, and regular mock tests that simulate the actual exam environment. For SSB preparation, we provide specialized materials for all testing stages including psychological tests, GTO tasks, and interview preparation. Our digital learning platform gives you access to additional practice questions, video lectures, and performance analytics to track your progress."
  },
  {
    question: "What is your success rate for defence examinations?",
    answer: "Centurion Defence Academy consistently achieves success rates significantly above the national average. For the past five years, our selection rate for NDA written exams has been 42%, for SSB interviews 38%, and for combined selection (written + SSB) approximately 22%. In the last three sessions alone, we've produced 127 NDA selections, 93 CDS selections, and 81 AFCAT selections. Our success stems from our personalized coaching approach, expert mentorship, and comprehensive preparation strategy covering both written exams and interviews."
  },
  {
    question: "Do you offer hostel facilities for outstation students?",
    answer: "Yes, we provide separate hostel facilities for male and female candidates with all modern amenities. Our hostels are located within a 1-2 km radius of the academy, ensuring easy access. The facilities include furnished rooms, mess services with nutritious meals, 24/7 security, Wi-Fi, a study room, and regular transport to and from the academy. Hostel wardens are available round the clock, and we maintain strict discipline to ensure a conducive environment for studies. Hostel fees are separate from course fees, and details are provided during admission."
  },
  {
    question: "Can I join if I have no prior knowledge about defence examinations?",
    answer: "Absolutely! Many of our successful candidates started with minimal knowledge about defence careers. Our programs are designed to accommodate beginners with a structured curriculum that starts from the basics. We conduct an initial assessment to understand your current level and customize the teaching approach accordingly. Our foundation courses are specifically designed for early starters in classes 9th, 11th, and 12th who want to build a strong base. We provide complete guidance from exam pattern understanding to final selection, covering every aspect of your defence preparation journey."
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#eaeeed]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d4b41] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[#718979] mx-auto mb-4"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Get answers to the most common questions about our coaching programs, methodology, and facilities.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`flex justify-between items-center w-full p-5 font-medium text-left rounded-t-lg ${
                  openIndex === index 
                    ? "bg-[#2d4b41] text-white" 
                    : "bg-white text-[#2d4b41] hover:bg-[#718979] hover:text-white"
                } border border-[#718979] transition-colors duration-300`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex-1">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`border-x border-b border-[#239BD7] rounded-b-lg overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-5 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            Still have questions? We're here to help!
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center py-3 px-6 bg-[#2d4b41] hover:bg-[#718979] text-white font-bold rounded-md transition-colors duration-300"
          >
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;