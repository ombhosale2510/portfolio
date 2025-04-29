import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

import projects from './projects';

const ProjectDetails = React.lazy(() => import('./ProjectDetails'));

const Loading = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
  </div>
);

const App = () => (
  <Router basename="/portfolio">
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen font-sans">
        <header className="text-center py-8 bg-[#1F1B24] shadow-lg">
          <motion.h1
            className="text-4xl font-bold text-[#BB86FC]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Om Bhosale
          </motion.h1>
          <p className="text-lg mt-2 text-[#B0BEC5]">
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

        <main className="flex-grow p-8 bg-[#121212]">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route
                path="/"
                element={
                  <section className="bg-[#121212] min-h-screen">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {projects.map((project) => (
                        <motion.div
                          key={project.id}
                          className="project-card bg-[#1F1B24] p-4 rounded shadow-lg relative overflow-hidden hover:bg-[#3700B3] transition duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          <h3 className="text-xl font-semibold text-purple-400">{project.title}</h3>
                          <p className="mt-2 text-[#B0BEC5]">{project.details}</p>
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
              <Route path="/projects/:id" element={<ProjectDetails />} />
            </Routes>
          </Suspense>
        </main>

        <footer className="text-center py-4 bg-[#1F1B24]">
          <p className="text-[#B0BEC5]">© {new Date().getFullYear()} Om Bhosale</p>
        </footer>
      </div>
    </ErrorBoundary>
  </Router>
);

export default App;
