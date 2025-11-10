'use client';

import { useState } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import ProjectModal from '@/components/ProjectModal';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [isOpen, setIsOpen] = useState(null);


  return (
    <main className={`relative ${darkMode ? 'dark bg-black' : 'bg-white'}`}>
      <Nav
        toggleDark={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
        openMenu={() => setMenuOpen(true)}
        closeMenu={() => setMenuOpen(false)}
        menuOpen={menuOpen}
      />
      <Hero darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects
        openModal={setIsOpen}
        darkMode={darkMode}
        setSelectedProject={setSelectedProject}
        isOpen={isOpen}
      />
      <About darkMode={darkMode} />
      <Contact darkMode={darkMode} />

      {isOpen && (
        <ProjectModal
          project={selectedProject}
          close={() => setIsOpen(null)}
          darkMode={darkMode}
        />
      )}
      <footer
        className={`text-center py-6 text-sm ${
          darkMode ? 'text-gray-400' : 'text-gray-500 '
        }`}
      >
        © 2025 Mariam Alli
      </footer>
    </main>
  );
}
