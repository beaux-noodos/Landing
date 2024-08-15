// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ bg, linkColor, logo }) => {
  const [scrolled, setScrolled] = useState(false);

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
        <Link to="/home#banner" className="hover:text-primary">Home</Link>
        <Link to="/about-us#banner" className="hover:text-primary">About</Link>
        <Link to="/courses#banner" className="hover:text-primary">Courses</Link>
        <Link to="/contact#banner" className="hover:text-primary">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
