'use client';
import { motion } from 'framer-motion';

export default function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`max-w-4xl mx-auto px-6 py-24 text-center ${darkMode ? 'text-white' : 'text-[#0e0e0e]'}`}
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        About Me
      </motion.h3>
      <p
        className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
      >
        I&apos;m a frontend developer focused on building scalable, accessible,
        and modern web experiences.
      </p>
    </section>
  );
}
