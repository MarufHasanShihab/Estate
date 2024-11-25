import { useState } from 'react';
import { assets } from './../../assets/assets';
import { useEffect } from 'react';


const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    useEffect(()=>{
        if(showMobileMenu){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = "auto";
        }
        return ()=> document.body.style.overflow = "auto";
    },[showMobileMenu])
    return (
        <div className="absolute top-0 left-0 w-full z-10">
            <nav className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <img src={assets.logo} alt="nav__logo" />
                <ul className='hidden md:flex gap-7 text-white'>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                    <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
                </ul>
                <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
                <img onClick={()=>setShowMobileMenu(true)} src={assets.menu_icon} alt="humberger__icon" className='md:hidden w-7 cursor-pointer' />
            </nav>
            {/* ----- mobile menu ----- */}
            <div className={`md:hidden ${showMobileMenu?'w-full fixed':'w-0 h-0'} top-0 right-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className='flex justify-end p-6'>
                    <img onClick={()=>setShowMobileMenu(false)} src={assets.cross_icon} alt="cross_icon" className='w-6 cursor-pointer' />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a onClick={()=>setShowMobileMenu(false)} href="#Header" className='py-2 px-4 rounded-full inline-block'>Home</a>
                    <a onClick={()=>setShowMobileMenu(false)} href="#About" className='py-2 px-4 rounded-full inline-block'>About</a>
                    <a onClick={()=>setShowMobileMenu(false)} href="#Projects" className='py-2 px-4 rounded-full inline-block'>Projects</a>
                    <a onClick={()=>setShowMobileMenu(false)} href="#Testimonials" className='py-2 px-4 rounded-full inline-block'>Testimonials</a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;