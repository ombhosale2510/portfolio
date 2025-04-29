import React from "react";
import { useImageModal } from './utils/useImageModal';
import ImageModal from './utils/ImageModal';

// image paths
const projectImages = [
  `${process.env.PUBLIC_URL}/images/MRP/model_runtimes.png`,
  `${process.env.PUBLIC_URL}/images/MRP/privacy_analysis.png`,
  `${process.env.PUBLIC_URL}/images/MRP/system_architecture.png`,
];

const MRP = () => {
  const { selectedImage, isModalOpen, handleImageClick, closeModal } = useImageModal();

  return (
  <div className="p-8 bg-gray-100 min-h-screen">
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">
        Privacy-Preserving Prompt Tuning in LLMs with DP-OPT
      </h1>
      <p className="text-xl text-gray-600">Major Research Project | Lead Researcher & Developer</p>
    </header>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
      <p className="text-gray-700 mb-6">
        Developed a novel framework integrating differential privacy into prompt-tuning workflows for 
        large language models (LLMs), addressing critical privacy risks while maintaining model utility. 
        Implemented on 6+ LLMs including Vicuna-7B and Llama-2-7B, achieving optimal privacy-performance 
        balance for sensitive AI applications.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Achievements</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>88% accuracy on SST-2 dataset with ε=1.8 privacy budget</li>
            <li>50% runtime reduction through HPC optimization</li>
            <li>Prevented data leaks in 100% of test cases</li>
            <li>Supported 6+ LLM architectures</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Stack</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">PyTorch</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Hugging Face</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Rényi DP</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">NVIDIA A100</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">SLURM</span>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Implementation</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Innovations</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Client-side privacy preservation system</li>
            <li>Rényi Differential Privacy (RDP) integration</li>
            <li>Limited-Domain token selection mechanism</li>
            <li>Exponential Mechanism for prompt selection</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Metrics</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Accuracy (ε=1.8):</span>
              <span className="font-semibold">86.7%</span>
            </div>
            <div className="flex justify-between">
              <span>Perplexity (PPL):</span>
              <span className="font-semibold">4.948</span>
            </div>
            <div className="flex justify-between">
              <span>Runtime Reduction:</span>
              <span className="font-semibold">50%</span>
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
            <li>Identified optimal privacy budget (ε=1.8) for LLMs</li>
            <li>Developed cross-model evaluation framework</li>
            <li>Created GPU-optimized HPC implementation</li>
            <li>Open-sourced reproducible codebase</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Future Directions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Federated learning integration</li>
            <li>Distributed computing for larger models</li>
            <li>Real-world healthcare applications</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Project Visualizations</h2>
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
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Project Resources</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://github.com/ombhosale2510/dpopt-mrp-project"
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
          href="https://github.com/ombhosale2510/dpopt-mrp-project/blob/main/ENGG6990%20-%20MRP%20Report.pdf"
          target="_blank"
          rel="noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Read Full Report
        </a>
      </div>
    </section>

    <ImageModal 
      isOpen={isModalOpen} 
      closeModal={closeModal} 
      selectedImage={selectedImage} 
    />
  </div>
)};

export default MRP;