
import Navbar from "../Navbar/Navbar";


const Header = () => {
    return (
        <div className="min-h-screen w-full mb-4 bg-center bg-cover flex items-center overflow-hidden" style={{backgroundImage:"url('/header_img.png')"}} id="Header">
            <Navbar/>
            <div className="container mx-auto text-center py-4 px-6 md:px-20 lg:px-32 text-white">
                <h2 className="text-5xl sm:text-6xl md:text-[76px] inline-block  max-w-[790px] font-semibold">Explore homes that fit your dreams</h2>
                <div className="space-x-6 pt-16">
                    <a href="#Projects" className="py-3 px-8 border border-white rounded">Projects</a>
                    <a href="#Contact" className="py-3 px-8 bg-blue-500 rounded">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default Header;