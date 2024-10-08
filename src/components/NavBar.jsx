import { faBars, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const url = "192.168.0.xxx:5173/login";
const Navbar = ({ bg, linkColor, logo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const appUrl = import.meta.env.VITE_APP_URL;

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

  const getLinkClassToggle = (path) => {
    return location.pathname === path ? 'bg-secondaryGreen text-background' : 'hover:bg-primaryGreen hover:text-background';
  };

  return (
    <>
      <nav className={`lg:w-auto w-5/6 fixed flex backdrop-blur-sm bg-[#344E41] bg-opacity-30 justify-between px-6 py-1 mt-4 transition-all duration-300 rounded-full z-40 `}
      >
        <Link to="/home#banner" className="flex items-center text-primaryBrown font-bold text-xl lg:mr-96">
          PlanetPulse
        </Link>
        <button className='lg:hidden text-background hover:text-primaryGreen bg-primaryGreen hover:bg-background px-3 rounded-full' onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          className={`hidden lg:flex lg:items-center lg:space-x-11 font-semibold text-background`}
        >
          <Link to="/home#banner" className={getLinkClass('/home')}>Accueil</Link>
          <Link to="/about-us#banner" className={getLinkClass('/about-us')}>À Propos</Link>
          <Link to="/projects#banner" className={getLinkClass('/projects')}>Projets</Link>
          <Link to="/contact#banner" className={getLinkClass('/contact')}>Contact</Link>
          <a href={appUrl}><FontAwesomeIcon className='text-background hover:text-primaryGreen bg-primaryGreen hover:bg-background p-1.5 rounded-full' icon={faUser} /></a>
        </div>
      </nav>
      <ul className={`fixed h-screen w-full bg-primaryGreen text-background pt-1 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <li className="pl-3 py-2">
          <button onClick={toggleMenu} className="text-background ml-auto block pr-4">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </li>
        <li className={`pl-3 py-2 ${getLinkClassToggle('/home')}`} onClick={toggleMenu}>
          <Link to="/home#banner">Accueil</Link>
        </li>
        <li className={`pl-3 py-2 ${getLinkClassToggle('/about-us')}`} >
          <Link to="/about-us#banner" onClick={toggleMenu}>À Propos</Link>
        </li>
        <li className={`pl-3 py-2 ${getLinkClassToggle('/projects')}`} >
          <Link to="/projects#banner" onClick={toggleMenu}>Projets</Link>
        </li>
        <li className={`pl-3 py-2 ${getLinkClassToggle('/contact')}`}>
          <Link to="/contact#banner" onClick={toggleMenu}>Contact</Link>
        </li>
        <li className={`pl-3 py-2 ${getLinkClassToggle('/t')}`}>
          <a href={appUrl} onClick={toggleMenu}>Se Connecter</a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
