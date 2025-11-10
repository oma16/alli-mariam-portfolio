'use client';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact({darkMode}) {
  return (
    <section
      id="contact"
      className={`py-24 px-6 ${darkMode ? 'bg-gray-900 text-white ' : 'bg-gray-300 text-[#0e0e0e]'}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          Let&apos;s build something great together.
        </p>
        <div className="flex justify-center gap-6 text-lg">
          <a
            href="mailto:titioba95@gmail.com"
            className="hover:text-blue-400 flex items-center gap-2"
          >
            <Mail size={20} /> Email
          </a>
          <a
            href="https://github.com/oma16/"
            className="hover:text-blue-400 flex items-center gap-2"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mariam-titilope-alli-281560177/"
            className="hover:text-blue-400 flex items-center gap-2"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
