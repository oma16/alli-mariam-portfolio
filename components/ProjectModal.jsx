const ProjectModal = ({ project, close, darkMode }) => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex justify-center items-center p-6">
    <div
      className={`p-8 rounded-2xl max-w-lg w-full ${
        darkMode ? 'bg-gray-800' : 'bg-white '
      }`}
    >
      <h3
        className={`text-2xl font-bold mb-3 ${
          darkMode ? 'text-white' : 'text-[#0e0e0e]'
        }`}
      >
        {project.title}
      </h3>
      <p className={`${darkMode ? 'text-gray-300' : 'text-[#0e0e0e]'}`}>
        {project.details}
      </p>
      <div className="flex gap-4 mt-6">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project.demo}
          className={`underline ${
            darkMode ? 'text-blue-400 ' : 'text-blue-600'
          }`}
        >
          Live Demo
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project.github}
          className={`underline ${
            darkMode ? 'text-blue-400 ' : 'text-blue-600'
          }`}
        >
          GitHub
        </a>
      </div>
      <button
        className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-xl"
        onClick={close}
      >
        Close
      </button>
    </div>
  </div>
);

export default ProjectModal;
