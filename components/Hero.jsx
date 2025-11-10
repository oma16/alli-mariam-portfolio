'use client';
import { motion } from 'framer-motion';

export default function Hero({ darkMode }) {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex font-montserant items-center justify-center text-center dark:text-white px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className={`text-4xl md:text-6xl font-extrabold ${darkMode ? 'text-gray-200' : 'text-[#0e0e0e]'}`}
        >
          Hi, I&apos;m Mariam 👋
        </h2>
        <p
          className={`mt-4 text-lg md:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
        >
          Frontend Developer • React • Tailwind • Next.js
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className={`px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl dark:text-white ${darkMode ? 'border-gray-600 text-white' : 'border-gray-300 text-[#0e0e0e]'}`}
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
