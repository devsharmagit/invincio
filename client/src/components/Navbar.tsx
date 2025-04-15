import logoSrc from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full">
    <div className="h-20 max-w-7xl mx-auto flex justify-start items-center py-4">
        <img src={logoSrc} alt="Logo" className="h-full w-auto "  />
    </div>
    </div>
  )
}

export default Navbar