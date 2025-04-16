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
        <div className="flex items-center">
          <img src={logoSrc} alt="Logo" className="h-12 w-auto" />
        </div>
        
        <div className="flex gap-6 items-center">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative group text-[#0F6491] font-medium hover:text-[#F0642D] transition-colors duration-200"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5AF19] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <button className="bg-[#0F6491] hover:bg-[#239BD7] text-white font-semibold px-6 py-2 rounded-full transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;