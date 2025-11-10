'use client';
import { motion } from 'framer-motion';
import projects from '../data/projects';
import FadeIn from './Animation';
import Image from 'next/image';

export default function Projects({ openModal, darkMode, setSelectedProject }) {
  return (
    <section
      id="projects"
      className={`py-24 px-6 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-[#0e0e0e]'
      }`}
    >
      <FadeIn>
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-center">Projects</h3>
          <div className="grid sm:grid-cols-2 gap-10">
            {projects.map((p) => (
              <motion.div
                key={p.title}
                whileHover={{ scale: 1.02 }}
                className={`p-5 rounded-2xl shadow-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div
                  className={`h-40 w-full rounded-xl mb-4 shadow-md ${
                    darkMode ? 'bg-gray-700 ' : 'bg-gray-200 border-gray-500'
                  }`}
                >
                  <Image
                    src={darkMode ? p.image : p.image2}
                    alt="Project Image"
                    width={100}
                    height={100}
                    className="object-cover rounded-lg h-40 w-full"
                  />
                </div>
                <h4 className="text-xl font-semibold">{p.title}</h4>
                <p
                  className={`text-sm mt-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {p.description}
                </p>
                <div
                  className={`mt-4 flex gap-4 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  <button
                    onClick={() => {
                      setSelectedProject(p);
                      openModal(true);
                    }}
                    className="hover:underline"
                  >
                    Details
                  </button>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
