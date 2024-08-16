// src/components/Navbar.jsx
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ bg, linkColor, logo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const getLinkClass = (path) => {
    return location.pathname === path ? 'bg-primaryGreen text-background px-3 py-1 rounded-2xl' : 'hover:bg-primaryGreen hover:text-background px-3 py-1 rounded-2xl';
  };

  return (
    <nav className={`w-5/6 fixed flex backdrop-blur-sm bg-white bg-opacity-10 lg:ml-32 ml-8 justify-between px-6 py-1 mt-4 transition-all duration-300 rounded-full z-40 `}
    >
      <Link to="/home#banner" className="flex items-center text-primaryGreen font-bold text-xl lg:mr-96">
        Logo
      </Link>
      <button className='lg:hidden text-background hover:text-primaryGreen bg-primaryGreen hover:bg-background px-3 rounded-full' onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars}/>
      </button>
      <div
        className={`hidden lg:flex lg:items-center lg:space-x-11 font-semibold ${linkColor}`}
      >
        <Link to="/home#banner" className={getLinkClass('/home')}>Home</Link>
        <Link to="/about-us#banner" className={getLinkClass('/about-us')}>About</Link>
        <Link to="/courses#banner" className={getLinkClass('/courses')}>Courses</Link>
        <Link to="/contact#banner" className={getLinkClass('/contact')}>Contact</Link>
        <Link to="#"> <FontAwesomeIcon className='text-background hover:text-primaryGreen bg-primaryGreen hover:bg-background p-1.5 rounded-full' icon={faUser} /></Link>
      </div>

      <div
  className={`fixed top-0 left-0 h-screen w-64 bg-primaryGreen text-background p-6 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
  style={{ left: isMenuOpen ? '0' : '-100%' }}
>
        <ul className="space-y-6">
          <li>
            <Link to="/home#banner" className={getLinkClass('/home')} onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about-us#banner" className={getLinkClass('/about-us')} onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link to="/courses#banner" className={getLinkClass('/courses')} onClick={toggleMenu}>Courses</Link>
          </li>
          <li>
            <Link to="/contact#banner" className={getLinkClass('/contact')} onClick={toggleMenu}>Contact</Link>
          </li>
          <li>
            <Link to="#" className="text-background hover:text-primaryGreen bg-background hover:bg-primaryGreen p-1.5 rounded-full">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
