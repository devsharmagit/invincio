import React from 'react';
import logo from "../assets/logo.png"
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d4b41] text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img 
                src={logo} 
                className="h-20 w-auto mr-3" 
                alt="Centurion Defence Academy Logo" 
              />
            </a>
            <p className="mt-4 max-w-xs text-gray-200 ">
            #L2L2L(Learn to Live to Learn) 
            </p>
            <p className="mt-4 max-w-xs text-gray-200 ">
            ENROLL TODAY TO TRANSFORM YOURSELF!
            </p>
          </div>
          <div className="max-w-2xl flex justify-end">
           
            <div>
              <h2 className="mb-6 max-w-xl text-sm font-semibold uppercase text-white border-b border-[#718979] pb-2">
                Contact Info
              </h2>
              <ul className="text-gray-200 font-medium">
                <li className="mb-3 flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-[#718979]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                  Offline Training at Ambala
                  <br />
                  Online and Hybrid mode also available
                  </span>
                </li>
                <li className="mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#718979]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:invincio_soldier@outlook.com" className="hover:text-[#718979] transition-colors">
                  invincio_soldier@outlook.com
                  </a>
                  
                </li>
                <li className="mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#718979]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                <a href="mailto:info@invincioservices.com" className="hover:text-[#718979] transition-colors">
                  info@invincioservices.com
                  </a>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#718979]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+918601407444" className="hover:text-[#718979] transition-colors">
                    +91 8601407444
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-[#718979] sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center">
            © {new Date().getFullYear()} <a href="/" className="hover:text-[#718979]">
            Invincio Services
            </a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
            <a href="https://www.linkedin.com/in/ankur4b" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-[#718979] transition-colors">
              <FaLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn profile</span>
            </a>
            <a href="https://www.instagram.com/lt_col_ankur_sabharwal" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-[#718979] transition-colors">
              <FaInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram profile</span>
            </a>
            <a href="https://youtube.com/@learntolivetolearn" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-[#718979] transition-colors">
              <FaYoutube className="w-5 h-5" />
              <span className="sr-only">YouTube channel</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;