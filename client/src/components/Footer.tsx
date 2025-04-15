const Footer = () => {
    return (
        <footer className="relative text-white py-20 bg-cover bg-center" style={{
            backgroundImage: `url('https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2253193/settings_images/zHrOGZG0TbaKNlLTcfzO_Compressed.jpg')`
        }}>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content container */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main content */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                        Ready to discover your perfect career?
                    </h1>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-md transition duration-300">
                        Sign Up
                    </button>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 gap-6 md:gap-0">
                    {/* Logo */}
                    <div>
                        <img src="/logo.png" alt="Renergetics Logo" className="h-10" />
                    </div>

                    {/* Links and copyright */}
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                        <a href="/faq" className="text-white hover:underline font-medium">FAQ</a>
                        <span className="text-white/80">© 2025 Renergetics Consulting</span>
                    </div>

                    {/* Social links */}
                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;