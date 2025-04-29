import React from "react";

const FallAlert = () => (
  <div className="p-8 bg-gray-100 min-h-screen">
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">
        FallAlert: AI-Powered Fall Detection & Emergency Response
      </h1>
      <p className="text-xl text-gray-600">Android Mobile Application | Lead Developer & ML Engineer</p>
    </header>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
      <p className="text-gray-700 mb-6">
        Developed an emergency response Android app targeting 28-35% annual fall rate in seniors,
        leveraging smartphone sensors and machine learning to reduce medical response time by 68%.
        Integrated real-time fall detection with automated emergency calls/SMS and location sharing.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Achievements</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>89% detection accuracy with TensorFlow Lite model</li>
            <li>18% daily battery consumption through optimization</li>
            <li>92% faster emergency response vs manual systems</li>
            <li>Implemented in senior care facility pilot program</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Stack</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Android Studio</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">TensorFlow Lite</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Java</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Firebase</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Sensor API</span>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Implementation</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Features</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Real-time accelerometer/gyroscope monitoring</li>
            <li>Sequential Neural Network for fall prediction</li>
            <li>Emergency response cascade system</li>
            <li>Senior-friendly UI with large touch targets</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Metrics</h3>
          <div className="space-y-2">
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

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Impact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Contributions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Developed Kalman filter for sensor noise reduction</li>
            <li>Implemented circular buffer data processing</li>
            <li>Designed multi-stage emergency response protocol</li>
            <li>Optimized TensorFlow Lite model for mobile</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Future Directions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Smartwatch/IoT device integration</li>
            <li>Cloud-based health analytics dashboard</li>
            <li>Federated learning implementation</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Project Resources</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://github.com/ombhosale2510/FallAlert"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center"
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
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors flex items-center justify-center"
        ><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
          View Full Report
        </a>
      </div>
    </section>
  </div>
);

export default FallAlert;