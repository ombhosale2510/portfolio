import React from "react";
import { useImageModal } from './utils/useImageModal';
import ImageModal from './utils/ImageModal';
import { useTheme } from '../../context/ThemeContext';

// image paths
const projectImages = [
  `${process.env.PUBLIC_URL}/images/FallAlert/app_interface.png`,
  `${process.env.PUBLIC_URL}/images/FallAlert/sensor_data.png`,
  `${process.env.PUBLIC_URL}/images/FallAlert/system_architecture.png`,
];

const FallAlert = () => {
  const { selectedImage, isModalOpen, handleImageClick, closeModal } = useImageModal();
  const { darkMode } = useTheme();

  return (
    <div className={`p-8 transition-colors duration-300 ${darkMode ? 'bg-[#121212]' : 'bg-gray-100'}`}>
      <header className="text-center mb-12">
        <h1 className={`text-4xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-[#BB86FC]' : 'text-blue-600'}`}>
          FallAlert: AI-Powered Fall Detection & Emergency Response
        </h1>
        <p className={`text-xl transition-colors duration-300 ${darkMode ? 'text-[#B0BEC5]' : 'text-gray-600'}`}>
          Android Mobile Application | Lead Developer & ML Engineer
        </p>
      </header>

      <section className={`mb-12 p-6 rounded-lg shadow-md transition-colors duration-300 ${darkMode ? 'bg-[#1F1B24]' : 'bg-white'}`}>
        <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${darkMode ? 'text-purple-400' : 'text-gray-800'}`}>
          Project Overview
        </h2>
        <p className={`mb-6 transition-colors duration-300 ${darkMode ? 'text-[#B0BEC5]' : 'text-gray-700'}`}>
          Developed an emergency response Android app targeting 28-35% annual fall rate in seniors,
          leveraging smartphone sensors and machine learning to reduce medical response time by 68%.
          Integrated real-time fall detection with automated emergency calls/SMS and location sharing.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${darkMode ? 'text-purple-400' : 'text-gray-800'}`}>
              Key Achievements
            </h3>
            <ul className={`list-disc pl-6 space-y-2 transition-colors duration-300 ${darkMode ? 'text-[#B0BEC5]' : 'text-gray-700'}`}>
              <li>89% detection accuracy with TensorFlow Lite model</li>
              <li>18% daily battery consumption through optimization</li>
              <li>92% faster emergency response vs manual systems</li>
              <li>Implemented in senior care facility pilot program</li>
            </ul>
          </div>

          <div>
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${darkMode ? 'text-purple-400' : 'text-gray-800'}`}>
              Technical Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={`px-3 py-1 rounded-full transition-colors duration-300 ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                Android Studio
              </span>
              <span className={`px-3 py-1 rounded-full transition-colors duration-300 ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                TensorFlow Lite
              </span>
              <span className={`px-3 py-1 rounded-full transition-colors duration-300 ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                Java
              </span>
              <span className={`px-3 py-1 rounded-full transition-colors duration-300 ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                Firebase
              </span>
              <span className={`px-3 py-1 rounded-full transition-colors duration-300 ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                Sensor API
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={`mb-12 p-6 rounded-lg shadow-md transition-colors duration-300 ${darkMode ? 'bg-[#1F1B24]' : 'bg-white'}`}>
        <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${darkMode ? 'text-purple-400' : 'text-gray-800'}`}>
          Technical Implementation
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${darkMode ? 'text-purple-400' : 'text-gray-800'}`}>
              Core Features
            </h3>
            <ul className={`list-disc pl-6 space-y-2 transition-colors duration-300 ${darkMode ? 'text-[#B0BEC5]' : 'text-gray-700'}`}>
              <li>Real-time accelerometer/gyroscope monitoring</li>
              <li>Sequential Neural Network for fall prediction</li>
              <li>Emergency response cascade system</li>
              <li>Senior-friendly UI with large touch targets</li>
            </ul>
          </div>

          <div>
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${darkMode ? 'text-purple-400' : 'text-gray-800'}`}>
              Performance Metrics
            </h3>
            <div className={`space-y-2 transition-colors duration-300 ${darkMode ? 'text-[#B0BEC5]' : 'text-gray-700'}`}>
              <div className="flex justify-between">
                <span>Detection Accuracy:</span>
                <span className="font-semibold">89%</span>
              </div>
              <div className="flex justify-between">
                <span>Response Time:</span>
                <span className="font-semibold">320ms</span>
              </div>
              <div className="flex justify-between">
                <span>Battery Optimization:</span>
                <span className="font-semibold">18% Daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`mb-12 p-6 rounded-lg shadow-md transition-colors duration-300 ${darkMode ? 'bg-[#1F1B24]' : 'bg-white'}`}>
        <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${darkMode ? 'text-purple-400' : 'text-gray-800'}`}>
          Project Impact
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${darkMode ? 'text-purple-400' : 'text-gray-800'}`}>
              Key Contributions
            </h3>
            <ul className={`list-disc pl-6 space-y-2 transition-colors duration-300 ${darkMode ? 'text-[#B0BEC5]' : 'text-gray-700'}`}>
              <li>Developed Kalman filter for sensor noise reduction</li>
              <li>Implemented circular buffer data processing</li>
              <li>Designed multi-stage emergency response protocol</li>
              <li>Optimized TensorFlow Lite model for mobile</li>
            </ul>
          </div>

          <div>
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${darkMode ? 'text-purple-400' : 'text-gray-800'}`}>
              Future Directions
            </h3>
            <ul className={`list-disc pl-6 space-y-2 transition-colors duration-300 ${darkMode ? 'text-[#B0BEC5]' : 'text-gray-700'}`}>
              <li>Smartwatch/IoT device integration</li>
              <li>Cloud-based health analytics dashboard</li>
              <li>Federated learning implementation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`mb-12 p-6 rounded-lg shadow-md transition-colors duration-300 ${darkMode ? 'bg-[#1F1B24]' : 'bg-white'}`}>
        <h2 className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${darkMode ? 'text-purple-400' : 'text-gray-800'}`}>
          Project Visualizations
        </h2>
        <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4">
          {projectImages.map((img, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[calc(33%-0.5rem)] min-w-[300px] relative"
              onClick={() => handleImageClick(img)}
            >
              <img
                src={img}
                alt={`Visualization ${index + 1}`}
                className="h-64 w-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className={`text-2xl font-semibold mb-6 text-center transition-colors duration-300 ${darkMode ? 'text-purple-400' : 'text-gray-800'}`}>
          Project Resources
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://github.com/ombhosale2510/FallAlert"
            target="_blank"
            rel="noreferrer"
            className={`px-6 py-3 rounded-lg shadow-md flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-[#3700B3] text-white hover:bg-[#4800E6]' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Code Repository
          </a>
          
          <a
            href="https://github.com/ombhosale2510/FallAlert/blob/6134933e64e28d336c84a42ff4aa0ea3ec896052/FallAlert-Final%20Project%20Report.pdf"
            target="_blank"
            rel="noreferrer"
            className={`px-6 py-3 rounded-lg shadow-md flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-green-800 text-white hover:bg-green-900' : 'bg-green-600 text-white hover:bg-green-700'}`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Full Report
          </a>
        </div>
      </section>

      <ImageModal 
        isOpen={isModalOpen} 
        closeModal={closeModal} 
        selectedImage={selectedImage} 
      />
    </div>
  );
};

export default FallAlert;