import logoSrc from "../assets/logo.png";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "Contact",
    href: "/contact",
  }
];

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="h-20 max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-3">
          <img src={logoSrc} alt="Logo" className="h-20 w-auto" />
          <div className="flex flex-col">
            <p className="text-sm font-bold text-[#2d4b41] tracking-wide">
              #L2L2L
            </p>
            <p className="text-xs text-[#718979] italic">
              learn to live to learn
            </p>
          </div>
        </div>
        
        <div className="flex gap-6 items-center">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative group text-[#2d4b41] font-medium hover:text-[#718979] transition-colors duration-200"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#718979] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <button className="bg-[#2c4d42] hover:bg-[#718979] text-white font-semibold px-6 py-2 rounded-full transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;