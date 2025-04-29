import React from "react";

const MRIClassification = () => (
  <div className="p-8 bg-gray-100 min-h-screen">
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">
        AI-Driven MRI Classification System
      </h1>
      <p className="text-xl text-gray-600">Medical Image Analysis | Deep Learning Project</p>
    </header>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
      <p className="text-gray-700 mb-6">
        Developed an advanced AI-powered system for classifying MRI images to aid in early detection 
        and diagnosis of medical conditions. The system addresses critical challenges like class 
        imbalance and overfitting while maintaining high accuracy across different tumor types.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Achievements</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>96.89% accuracy with ResNet50 architecture</li>
            <li>F1-score of 0.95-0.96 with EfficientNetB1</li>
            <li>91.25% F1-score with LSTM Hybrid Model</li>
            <li>Successful processing of 7,023 MRI images</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Stack</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">TensorFlow</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Keras</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Python</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">CNN</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">LSTM</span>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Implementation</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Model Architecture</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>EfficientNetB1 with transfer learning</li>
            <li>ResNet50 with custom modifications</li>
            <li>LSTM-CNN hybrid architecture</li>
            <li>Advanced data augmentation pipeline</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Metrics</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>ResNet50 Accuracy:</span>
              <span className="font-semibold">96.89%</span>
            </div>
            <div className="flex justify-between">
              <span>Test Loss:</span>
              <span className="font-semibold">0.1050</span>
            </div>
            <div className="flex justify-between">
              <span>F1-Score:</span>
              <span className="font-semibold">0.95-0.96</span>
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
            <li>Enhanced diagnostic precision in medical imaging</li>
            <li>Developed robust preprocessing pipeline</li>
            <li>Implemented multiple model architectures</li>
            <li>Created comprehensive evaluation framework</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Dataset Overview</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>7,023 MRI images processed</li>
            <li>Four distinct tumor categories</li>
            <li>Balanced class distribution</li>
            <li>High-quality medical imaging data</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Project Resources</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://github.com/ombhosale2510/6600-04--Intro-to-AI-S24-Project"
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
          href="https://github.com/ombhosale2510/6600-04--Intro-to-AI-S24-Project/blob/b62548ab21c29e54a59ec9ab81f697760f375589/ENGG6600(04)%20S24%20Final%20Report.pdf"
          target="_blank"
          rel="noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Read Full Report
        </a>

        <a
          href="https://docs.google.com/presentation/d/e/2PACX-1vTvZjzgbPW7YcfcgMFaxFoe2eVweKC8iWAsJaGzSYP8PYoyeWcZveDz8tilTeSCSWw7F6rGIg2G_Q7J/pub"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          View Presentation
        </a>
      </div>
    </section>
  </div>
);

export default MRIClassification;
