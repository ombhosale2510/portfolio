import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaSun, FaMoon } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider, useTheme } from './context/ThemeContext';

import projects from './projects';

const ProjectDetails = React.lazy(() => import('./ProjectDetails'));

const Loading = () => {
  const { darkMode } = useTheme();
  return (
    <div className="flex justify-center items-center h-64">
      <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${darkMode ? 'border-purple-400' : 'border-purple-500'}`}></div>
    </div>
  );
};

const MainContent = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={`flex flex-col font-sans transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <header className={`text-center py-8 transition-colors duration-300 ${darkMode ? 'bg-[#1F1B24] shadow-lg' : 'bg-white shadow-lg'}`}>
        <div className="absolute top-4 right-6">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun size="20" /> : <FaMoon size="20" />}
          </button>
        </div>
        <motion.h1
          className={`text-4xl font-bold transition-colors duration-300 ${darkMode ? 'text-[#BB86FC]' : 'text-purple-600'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Om Bhosale
        </motion.h1>
        <p className={`text-lg mt-2 transition-colors duration-300 ${darkMode ? 'text-[#B0BEC5]' : 'text-gray-600'}`}>
          Aspiring AI Engineer | Master of Engineering in Computer Engineering
        </p>

        <div className="flex justify-center mt-4 space-x-4">
          <a 
            href="https://www.linkedin.com/in/om-bhosale-44838b186/" 
            target="_blank" 
            rel="noreferrer" 
            className={`transition-colors duration-300 ${darkMode ? 'text-[#BB86FC]' : 'text-purple-600 hover:text-purple-800'}`}
          >
            <FaLinkedin size="24" />
          </a>
          <a 
            href="https://github.com/ombhosale2510" 
            target="_blank" 
            rel="noreferrer" 
            className={`transition-colors duration-300 ${darkMode ? 'text-[#B0BEC5]' : 'text-gray-700 hover:text-gray-900'}`}
          >
            <FaGithub size="24" />
          </a>
        </div>
      </header>

      <main className={`flex-grow p-8 transition-colors duration-300 ${darkMode ? 'bg-[#121212]' : 'bg-gray-100'}`}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={
                <section className={`transition-colors duration-300 ${darkMode ? 'bg-[#121212]' : 'bg-gray-100'}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                      <motion.div
                        key={project.id}
                        className={`project-card p-4 rounded shadow-lg relative overflow-hidden transition-all duration-300 ${
                          darkMode
                            ? 'bg-[#1F1B24] hover:bg-[#3700B3]'
                            : 'bg-white hover:bg-purple-50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                      >
                        <h3 className={`text-xl font-semibold transition-colors duration-300 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                          {project.title}
                        </h3>
                        <p className={`mt-2 transition-colors duration-300 ${darkMode ? 'text-[#B0BEC5]' : 'text-gray-700'}`}>
                          {project.details}
                        </p>
                        <Link
                          to={`/projects/${project.id}`}
                          className={`mt-4 inline-block transition-colors duration-300 ${
                            darkMode
                              ? 'text-[#BB86FC] hover:text-[#E0E0E0]'
                              : 'text-purple-600 hover:text-purple-800'
                          }`}
                        >
                          Learn More →
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </section>
              }
            />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </Suspense>
      </main>

      <footer className={`text-center py-4 transition-colors duration-300 ${darkMode ? 'bg-[#1F1B24]' : 'bg-white shadow-lg'}`}>
        <p className={`transition-colors duration-300 ${darkMode ? 'text-[#B0BEC5]' : 'text-gray-600'}`}>
          © {new Date().getFullYear()} Om Bhosale
        </p>
      </footer>
    </div>
  );
};

const App = () => (
  <Router basename="/portfolio">
    <ErrorBoundary>
      <ThemeProvider>
        <MainContent />
      </ThemeProvider>
    </ErrorBoundary>
  </Router>
);

export default App;
