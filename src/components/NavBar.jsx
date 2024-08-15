// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ bg, linkColor, logo }) => {
  const [scrolled, setScrolled] = useState(false);
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

  const getLinkClass = (path) => {
    return location.pathname === path ? 'text-primary' : 'hover:text-primary';
  };

  return (
    <nav className={`fixed flex z-20 justify-between w-full px-32 py-4 transition-all duration-300 ${scrolled ? bg : 'bg-transparent'
      }`}
    >
      <Link to="/home#banner" className="flex items-center">
        <img src={logo} alt="Logo" className="h-[38] w-[136]" />
      </Link>
      <div
        className={`lg:flex lg:items-center lg:space-x-11 font-semibold ${linkColor}`}
      >
        <Link to="/home#banner" className={getLinkClass('/home')}>Home</Link>
        <Link to="/about-us#banner" className={getLinkClass('/about-us')}>About</Link>
        <Link to="/courses#banner" className={getLinkClass('/courses')}>Courses</Link>
        <Link to="/contact#banner" className={getLinkClass('/contact')}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
