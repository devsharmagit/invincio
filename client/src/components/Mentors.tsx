import React from "react";
import LeaderImage from "../assets/mentor/leader.png";
import BrigAjaySharma from "../assets/mentor/Brig Sharma.jpg";
import ColSuden from "../assets/mentor/Col Suden.jpg";
import ColRanjit from "../assets/mentor/RANJIT.jpg";
import ColKarandeepSingh from "../assets/mentor/Col Karandeep.jpg";
import GpCaptVikramSingh from "../assets/mentor/Gp Capt Vikram Singh.jpg";
import BrigSanjay from "../assets/mentor/sanjay.png";
import havilSanjay from "../assets/mentor/havildarSanjay.png";
import havilRajest from "../assets/mentor/havildarRajseh.png";
import pratishta from "../assets/mentor/pratishta.png";
import radhika from "../assets/mentor/radhika.png";
import hina from "../assets/mentor/hina.png";
import rajinder from "../assets/mentor/rajindersokhi.png";
import vinod from "../assets/mentor/vinod.png"
import pooja from "../assets/mentor/pooja.png"
import hema from "../assets/mentor/hema.png"
import sunny from "../assets/mentor/sunny.png"

interface MentorData {
  name: string;
  title?: string;
  description: string;
  imageUrl: string;
}

const mentorData: MentorData[] = [
  {
    name: "Brig Ajay Sharma, VSM",
    description:
      "Expert in personality assessment with extensive experience, having conducted 2500+ interviews and mentored 1000+ aspirants, many of whom have joined Officer Training Institutions of the Armed Forces.",
    imageUrl: BrigAjaySharma,
  },
  {
    name: "Brig Sanjay Kurelay",
    description:
      "Veteran with 42 years in uniform, NDA & IMA alum, and MTech from IIT Kharagpur. Served as SSB President, conducting 3,500+ interviews and mentoring countless aspirants.",
    imageUrl: BrigSanjay,
  },
  {
    name: "Col Anupam Suden",
    description:
      "He is a Personality Profiler, Assessor, and Behavior Analyst with years of experience, mentoring 3,500+ candidates. He conducts personality enhancement sessions, team bonding events, and campus placement workshops.",
    imageUrl: ColSuden,
  },
  {
    name: "Col Ranjit Singh",
    description:
      "Army veteran with 30+ years of service, expert in SSB assessments and training. Assessed 3,000+ candidates, trained 7,000+ aspirants, and conducted 3,500+ interviews with high success rates.",
    imageUrl: ColRanjit,
  },
  {
    name: "Colonel Karandeep Singh",
    description:
      "Veteran with 27 years in military and corporate leadership. Expert in personality development, assessing 2,100+ candidates, and mentoring future leaders.",
    imageUrl: ColKarandeepSingh,
  },
  {
    name: "Gp Capt Vikram Singh",
    description:
      "A Gold Medalist in Aviation Law & Air Transport Management, this highly experienced Air Force veteran excels in aviation, leadership, and combat operations. With 3,000+ accident-free flight hours and Flight Safety 3 Stars, he has mentored thousands to success.",
    imageUrl: GpCaptVikramSingh,
  },
  {
    name: "Havildar Sanjay Kumar Choubey",
    description:
      " Hav Sanjay Kumar Choubey, a Kargil War veteran from Bihar, served with 1st BIHAR in the Batalik Sector. Former Havildar Major at 34 SSB, Allahabad, he is dedicated to training future defence aspirants. ",
    imageUrl: havilSanjay,
  },
  {
    name: "Havildar Rajesh Kumar",
    description:
      "Havildar Rajesh Kumar, a veteran from Punjab, served with 6 Dogra in Siachen and Manipur. Former Havildar Major at 11 SSB,  llahabad, he is dedicated to mentoring defence aspirants.",
    imageUrl: havilRajest,
  },
  {
    name: "Prashita Dubey",
    description:
      "BA Honours English from LSR, former Social Media Head at Kalakriti (UN Millennium Fellowship). Now at Invincio as Social  edia & Outreach Executive. Proud to have her as our first permanent team member.",
    imageUrl: pratishta,
  },
  {
    name: "Radhika Bali",
    description:
      "Radhika Bali, Presence Sculptor & Image Consultant, empowers professionals in executive presence, communication, and  randing. With 24+ years of experience, she is the Founder of Aक्स by Radhika and PSAI Delhi Chapter President.",
    imageUrl: radhika,
  },
  {
    name: "Hina Arora",
    description:
      "Hina Arora, Engineering Manager & Career Coach, has helped 500+ students secure jobs, optimized 1,000+ LinkedIn profiles, and built a 300K+ social media following. She specializes in ATS resumes and interview success.",
    imageUrl: hina,
  },
];

const ourMentors = [
  {
    name: "Maj Gen Vinod, VSM",
    description:
      "A military veteran with 37 years in Army Air Defence and SSB expertise, mentoring thousands in interviews, leadership, and  Career success. His strategic guidance empowers individuals to excel, and we're honoured to have him as our mentor.",
    imageUrl: vinod,
  },
  {
    name: "Puja Sabharwal",
    description:
      "An educationist with 17+ years of experience, is dedicated to mentoring future leaders. As the mentor she blends philosophy with experiential learning to empower young minds. Her commitment has earned her widespread recognition for shaping the next generation's success.",
    imageUrl: pooja,
  },
  {
    name: "Dr. Hema Diwan",
    description:
      ` Associate Professor at IIM
Mumbai, specializing in
Corporate Sustainability, ESG,
and Environmental
Management. A Gold Medalist
and award-winning researcher,
she has trained professionals
from top industries and
mentored young minds for
sustainability-driven growth. `,
    imageUrl: hema,
  },
];

const MentorsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d4b41] mb-4">
            MEET OUR LEADER
          </h2>
          <div className="w-24 h-1 bg-[#718979] mx-auto mb-4"></div>
        </div>
        <div className="max-w-3xl flex justify-center items-center mx-auto gap-5 mb-5">
          <div className="w-1/2 flex justify-center flex-col items-center gap-2">
            <img src={LeaderImage} alt="" className="w-full rounded-lg" />
            <h2 className="text-xl font-bold text-[#2d4b41]">
              Lt Col Ankur Sabharwal
            </h2>
          </div>
          <div className="w-1/2">
            <p className="text-gray-600 font-medium text-lg">
              Our team leader is a seasoned Personality Assessor & Behavioral
              Analyst with deep expertise in psychological assessments,
              competency profiling, and leadership evaluation. With a
              distinguished background in military leadership and human
              intelligence operations, he has successfully developed talent
              strategies aligned with organizational goals, fostering success
              through resilience and behavioral adaptability.
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto text-center mt-32 mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d4b41] text-center">
            Professional Experiences:
          </h2>
          <ul className="grid grid-cols-2 gap-4 text-left mt-4 list-none">
            <li className="bg-[#eaeeed] list-none p-4 text-lg font-semibold rounded-lg">
              10 years of experience of mentoring candidates
            </li>
            <li className="bg-[#eaeeed] list-none p-4 text-lg font-semibold rounded-lg">
              Providing best in country training with unique curriculum
              including sessions on communication skills, leadership and other
              relevant aspects of SSB assessment criteria
            </li>
            <li className="bg-[#eaeeed] list-none p-4 text-lg font-semibold rounded-lg">
              Training on Authentic and realistic GTO structures
            </li>
            <li className="bg-[#eaeeed] list-none p-4 text-lg font-semibold rounded-lg">
              21+ years of experience in military leadership, behavioral
              psychology & corporate expansion
            </li>
            <li className="bg-[#eaeeed] list-none p-4 text-lg font-semibold rounded-lg">
              Unmatched exposure at SSBs and mentoring assessors at DIPR - 300+
              singular recommendations
            </li>
            <li className="bg-[#eaeeed] list-none p-4 text-lg font-semibold rounded-lg">
              Ensuring no one left behind hence tie ups in North and West India,
              more in pipeline
            </li>
          </ul>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d4b41] mb-4">
            MEET OUR TEAM
          </h2>
          <div className="w-24 h-1 bg-[#718979] mx-auto mb-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-10 max-w-6xl mx-auto">
          {mentorData.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl flex flex-col items-center px-6 py-8 w-full md:w-[22rem]"
            >
              <div className="w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-[#eaeeed]">
                <img
                  src={mentor.imageUrl}
                  alt={mentor.name}
                  className="object-cover object-top w-full h-full"
                />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-[#2d4b41] mb-3">
                  {mentor.name}
                </h3>

                {mentor.title && (
                  <p className="text-[#718979] font-medium mb-3">
                    {mentor.title}
                  </p>
                )}

                <p className="text-gray-600 text-sm">{mentor.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12 mt-32">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d4b41] mb-4">
            VISITING FACULTY
          </h2>
          <div className="w-24 h-1 bg-[#718979] mx-auto mb-4"></div>
        </div>

        <div className="flex justify-center mt-10 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl flex flex-col items-center px-6 py-8 w-full md:w-[22rem]">
            <div className="w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-[#eaeeed]">
              <img
                src={rajinder}
                alt={"Rajinder Sokhi"}
                className="object-cover object-top w-full h-full"
              />
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-[#2d4b41] mb-3">
                Dr Rajinder Sokhi
              </h3>

              <p className="text-gray-600 text-sm">
                Dr. Rajinder K. Sokhi, a defence psychologist with 34+ years of
                expertise, specializes in work values, group dynamics, and
                performance appraisals. An award-winning researcher, has
                authored 28 publications and developed training programs for the
                Armed Forces.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12 mt-32">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d4b41] mb-4">
          OUR MENTORS
          </h2>
          <div className="w-24 h-1 bg-[#718979] mx-auto mb-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-10 max-w-6xl mx-auto">
          {ourMentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl flex flex-col items-center px-6 py-8 w-full md:w-[22rem]"
            >
              <div className="w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-[#eaeeed]">
                <img
                  src={mentor.imageUrl}
                  alt={mentor.name}
                  className="object-cover object-top w-full h-full"
                />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-[#2d4b41] mb-3">
                  {mentor.name}
                </h3>

                <p className="text-gray-600 text-sm">{mentor.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12 mt-32">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d4b41] mb-4">
          Financial Literacy Training
          </h2>
          <div className="w-24 h-1 bg-[#718979] mx-auto mb-4"></div>
        </div>
        <div className="max-w-3xl flex justify-center items-center mx-auto gap-5 mb-5">
          <div className="w-1/2 flex justify-center flex-col items-center gap-2">
            <img src={sunny} alt="" className="w-full rounded-lg" />
            <h2 className="text-xl font-bold text-[#2d4b41]">
            CA Sunny Sabharwal
            </h2>
          </div>
          <div className="w-1/2">
            <p className="text-gray-600 font-medium text-lg">
            Chartered Accountant and Financial Literacy
Trainer with 18 years of experience in banking,
risk management, and financial consulting.
Conducted international training programs
across Asia, including the Philippines and Nepal.
Specializes in bridging theory with real-world
applications through interactive learning and
case studies. Passionate about equipping
professionals with financial acumen for better
decision-making and long-term success.
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto text-center mt-32 mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d4b41] text-center">
          Why Financial Literacy Matters in Schools?
          </h2>
          
          <div className="mt-8 text-left">
            <p className="text-gray-600 text-lg mb-6">
              India's education system neglects financial literacy, leaving students unprepared for real-world money management.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#eaeeed] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#2d4b41] mb-3">High Debt</h3>
                <p className="text-gray-600">Easy credit leads to repayment struggles</p>
              </div>
              <div className="bg-[#eaeeed] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#2d4b41] mb-3">Poor Investments</h3>
                <p className="text-gray-600">Lack of knowledge causes financial losses</p>
              </div>
              <div className="bg-[#eaeeed] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#2d4b41] mb-3">Financial Stress</h3>
                <p className="text-gray-600">Many live paycheck to paycheck, lack savings</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#2d4b41] mb-6">The Solution</h3>
              <p className="text-gray-600 text-lg mb-6">Schools must teach:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-xl">✔</span>
                  <span className="text-gray-600">Budgeting & Savings</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-xl">✔</span>
                  <span className="text-gray-600">Debt & Credit Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-xl">✔</span>
                  <span className="text-gray-600">Investment Basics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-xl">✔</span>
                  <span className="text-gray-600">Taxation & Insurance</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-lg mt-8">
              Countries like the U.S. and Singapore have done it—India must, too, for a financially secure future.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MentorsSection;