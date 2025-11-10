'use client';
import { motion } from 'framer-motion';
import FadeIn from './Animation';

export default function Skills({ darkMode }) {
  const stack = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind',
    'MUI',
    'Git',
    'Docker',
    'Playwright',
    'WordPress'
  ];

  return (
    <section
      id="skills"
      className={`max-w-6xl mx-auto px-6 py-24 ${darkMode ? 'text-white' : 'text-[#0e0e0e]'}`}
    >
      <FadeIn>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-10 text-center"
      >
        Skills
      </motion.h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {stack.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.05 }}
            className={`p-5 border rounded-2xl shadow-sm text-center ${darkMode ? "border-gray-700 bg-gray-800" : "border-[#0e0e0e] bg-gray-200"}`}
          >
            {skill}
          </motion.div>
        ))}
        </div>
        </FadeIn>
    </section>
  );
}
