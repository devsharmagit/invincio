import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logoSrc from "../assets/logo.png";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Mentors",
    href: "#mentors",
  },
  {
    name: "Projects",
    href: "#projects",
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <div className="w-full bg-white/90 shadow-md relative z-50">
      <div className="h-24 max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-4">
          <img src={logoSrc} alt="Logo" className="h-24 w-auto" />
          <div className="flex flex-col">
            <p className="text-base font-bold text-[#2d4b41] tracking-wide">
              #L2L2L
            </p>
            <p className="text-sm text-[#718979] italic">
              learn to live to learn
            </p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 items-center">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={handleClick}
              className="relative group text-[#2d4b41] font-medium hover:text-[#718979] transition-colors duration-200 text-lg"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#718979] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
            <a
              href={"https://drive.google.com/drive/folders/1OjD5tquiaCtNUFyCcoWUR0qJEM0JdU--?usp=drive_link"}
              target="_blank"
              className="relative group text-[#2d4b41] font-medium hover:text-[#718979] transition-colors duration-200 text-lg"
            >
         Brochure
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#718979] group-hover:w-full transition-all duration-300"></span>
            </a>
          <a href="https://forms.gle/jcUHXwXKafQp5ChS9" target="_blank" className="bg-[#2c4d42] hover:bg-[#718979] text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#2d4b41] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center py-6 space-y-5">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={handleClick}
              className="text-[#2d4b41] font-medium hover:text-[#718979] transition-colors duration-200 text-lg"
            >
              {link.name}
            </a>
          ))}
           <a
              href={"https://drive.google.com/drive/folders/1OjD5tquiaCtNUFyCcoWUR0qJEM0JdU--?usp=drive_link"}
              target="_blank"
              className="relative group text-[#2d4b41] font-medium hover:text-[#718979] transition-colors duration-200 text-lg"
            >
         Brochure
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#718979] group-hover:w-full transition-all duration-300"></span>
            </a>
          <a href="https://forms.gle/jcUHXwXKafQp5ChS9" target="_blank" className="bg-[#2c4d42] hover:bg-[#718979] text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;