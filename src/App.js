import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';
import projects from './projects';

const App = () => (
  <Router basename="/portfolio">
    <div className="flex flex-col min-h-screen font-sans">
      <header className="text-center py-8 bg-[#1F1B24] shadow-lg dark:bg-gray-800">
        <motion.h1
          className="text-4xl font-bold text-[#BB86FC] dark:text-purple-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Om Bhosale
        </motion.h1>
        <p className="text-lg mt-2 text-[#B0BEC5] dark:text-gray-300">
          Aspiring AI Engineer | Master of Engineering in Computer Engineering
        </p>

        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://www.linkedin.com/in/om-bhosale-44838b186/" target="_blank" rel="noreferrer">
            <FaLinkedin size="24" />
          </a>
          <a href="https://github.com/ombhosale2510" target="_blank" rel="noreferrer">
            <FaGithub size="24" />
          </a>
        </div>
      </header>

      <main className="flex-grow p-8 bg-[#121212] dark:bg-white dark:text-black transition duration-300">
      <Routes>
        <Route
          path="/"
          element={
        <section className="bg-[#121212] dark:bg-white dark:text-black min-h-screen transition duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card bg-[#1F1B24] dark:bg-gray-200 p-4 rounded shadow-lg relative overflow-hidden hover:bg-[#3700B3] dark:hover:bg-purple-200 transition duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-purple-400">{project.title}</h3>
                <p className="mt-2 text-[#B0BEC5] dark:text-gray-600">{project.details}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="text-[#BB86FC] hover:text-[#E0E0E0] mt-4 inline-block transition duration-300"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
          }
          />
          <Route path="/projects/:id" element={<ProjectDetails projects={projects} />} />
        </Routes>
      </main>


      <footer className="text-center py-4 bg-[#1F1B24] dark:bg-gray-800">
        <p className="text-[#B0BEC5] dark:text-gray-300">© {new Date().getFullYear()} Om Bhosale</p>
      </footer>
    </div>
  </Router>
);

export default App;
