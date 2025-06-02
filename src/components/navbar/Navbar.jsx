import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const navLinks = [
  { title: 'Home', path: '/', index: '00' },
  { title: 'Destination', path: '/destination', index: '01' },
  { title: 'Crew', path: '/crew', index: '02' },
  { title: 'Technology', path: '/technology', index: '03' },
];

const Navbar = () => {
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 bg-transparent">
      <img src="Logo.png" alt="logo" className="z-50" />

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center space-x-16 bg-white/5 px-10 py-6 rounded-sm backdrop-blur-sm">
        {navLinks.map(({ title, path, index }) => {
          const isActive = location.pathname === path;
          const isHovered = hoveredPath === path;

          return (
            <div
              key={path}
              className="relative h-full"
              onMouseEnter={() => setHoveredPath(path)}
              onMouseLeave={() => setHoveredPath(null)}
            >
              <Link
                to={path}
                className="text-white font-barlow font-thin uppercase tracking-wider"
              >
                <span className="font-semibold font-barlow mr-2">{index}</span>
                {title}
              </Link>
              {(isActive || isHovered) && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-2 left-0 h-1 w-full bg-white"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden z-50 text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-screen w-64 bg-[#0B0D17]/15 z-40 p-8 flex flex-col space-y-8 backdrop-blur-xl pt-24 lg:hidden"
          >
            {navLinks.map(({ title, path }, index) => (
              <Link
                key={index}
                to={path}
                className="text-white text-lg tracking-widest font-barlow font-light uppercase border-r-4 border-transparent pr-4 hover:border-white active:border-white"
                onClick={() => setMenuOpen(false)}
              >
                <span className="font-semibold mr-2">0{index}</span>
                {title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
