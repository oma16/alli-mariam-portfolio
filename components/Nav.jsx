'use client';

import { Moon, Sun, Menu, X } from 'lucide-react';

const Nav = ({ toggleDark, darkMode, openMenu, closeMenu, menuOpen }) => (
  <nav
    className={`fixed top-0 w-full backdrop-blur-md shadow-md z-50 ${darkMode ? 'bg-black/80 border-b-gray-400' : 'bg-white/80'}`}
  >
    <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
      <h1
        className={`text-xl font-bold ${darkMode ? 'text-gray-200' : 'text-[#0e0e0e]'}`}
      >
        Mariam Alli
      </h1>

      {/* Desktop Nav */}
      <div
        className={`hidden md:flex gap-6 text-sm font-medium  ${darkMode ? 'text-gray-200' : 'text-[#0e0e0e]'}`}
      >
        {['skills', 'projects', 'about', 'contact'].map((id) => (
          <button
            key={id}
            onClick={() =>
              document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
            }
            className={`${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </div>

      {/* Mobile Nav Toggle */}
      <button
        onClick={toggleDark}
        className={`${darkMode ? 'text-gray-200' : 'text-[#0e0e0e]'}`}
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
      <button className="md:hidden dark:text-white" onClick={openMenu}>
        <Menu className={`${darkMode ? 'text-gray-200' : 'text-[#0e0e0e]'}`} />
      </button>
    </div>
    {menuOpen && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 h-screen w-full text-lg">
        <div
          className={`flex flex-col p-8 w-3/5 h-screen ${darkMode ? 'bg-[#0e0e0e] text-white' : 'bg-white text-black'}`}
        >
          <button className="self-end mb-6" onClick={closeMenu}>
            <X size={32} />
          </button>
          {['skills', 'projects', 'about', 'contact'].map((id) => (
            <button
              key={id}
              className="py-4 text-left"
              onClick={() => {
                closeMenu();
                document
                  .getElementById(id)
                  .scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
        <button onClick={toggleDark}>{darkMode ? <Sun /> : <Moon />}</button>
      </div>
    )}
  </nav>
);

export default Nav;
