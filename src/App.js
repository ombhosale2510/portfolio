import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import projects from "./projects";

const App = () => (
  <Router basename="/portfolio">
  <div className="bg-gray-900 text-white min-h-screen font-sans">
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
 
    <main className="p-8 bg-[#121212]">
        <Routes>
          <Route
            path="/"
            element={
              <section className="bg-[#121212] min-h-screen text-[#E0E0E0]">
                <h2 className="text-2xl font-bold mb-4">Projects</h2>
                <div className="grid gap-6">
                  {projects.map((project) => (
                    <motion.div
                      key={project.id}
                      className="bg-[#1F1B24] p-4 rounded shadow-lg relative overflow-hidden hover:bg-[#3700B3] transition duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="mt-2 text-[#B0BEC5]">{project.description}</p>
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

    <footer className="text-center py-4 bg-[#1F1B24]">
      <p className="text-[#B0BEC5]">© {new Date().getFullYear()} Om Bhosale</p>
    </footer>
  </div>
  </Router>
);

export default App;
