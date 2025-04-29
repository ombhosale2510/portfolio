import React from "react";
import Modal from "react-modal";
import { useImageModal } from './utils/useImageModal';
import ImageModal from './utils/ImageModal';

// image paths
const xaiGoals = `${process.env.PUBLIC_URL}/images/XAI/goals_xai.png`;
const dnn = `${process.env.PUBLIC_URL}/images/XAI/dnn.jpg`;
const lrp = `${process.env.PUBLIC_URL}/images/XAI/lrp.png`;
const nn = `${process.env.PUBLIC_URL}/images/XAI/nn.png`;

Modal.setAppElement('#root');

const ExplainableAI = () => {
  const { selectedImage, isModalOpen, handleImageClick, closeModal } = useImageModal();
  const mainImages = [ dnn, xaiGoals, lrp, nn ];

  return (
  <div className="p-8 bg-gray-100 "> 
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">
        Theoretical Analysis of XAI in Deep Learning Optimization
      </h1>
      <p className="text-xl text-gray-600">Research Synthesis | Neural Network Optimization</p>
    </header>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Research Overview</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-700 mb-4">
            Conducted comprehensive analysis of Explainable AI techniques with focus on Layer-wise Relevance Propagation (LRP) 
            and their potential for optimizing deep neural networks through improved interpretability.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Research Focus Areas</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comparative analysis of LRP vs traditional optimizers</li>
            <li>Theoretical framework for XAI-integrated training</li>
            <li>Critical evaluation of clinical implementations</li>
            <li>Emerging applications in NLP and autonomous systems</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Methodological Approach</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Literature Review</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Conceptual Modeling</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Case Study Analysis</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Technical Evaluation</span>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Research Insights</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">LRP Mechanism Analysis</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Examined relevance propagation: R<sub>j</sub> = Σ(x<sub>j</sub>w<sub>jk</sub>/Σx<sub>j</sub>w<sub>jk</sub> + ε)R<sub>k</sub></li>
            <li>Evaluated three LRP formulations: Amplification/Geometric/Adaptive</li>
            <li>Analyzed stabilization techniques (ε term implementation)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Comparative Findings</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Theoretical Convergence:</span>
              <span className="font-semibold">15-20% faster than SGD</span>
            </div>
            <div className="flex justify-between">
              <span>Clinical Validation Success:</span>
              <span className="font-semibold">85-92% in reviewed studies</span>
            </div>
            <div className="flex justify-between">
              <span>Computational Overhead:</span>
              <span className="font-semibold">18-25% increase</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Analytical Case Study: Medical Imaging</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Research Evaluation</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Analyzed 8 clinical implementations from literature</li>
            <li>Mammogram diagnosis accuracy range: 87-94%</li>
            <li>Average false positive reduction: 18-22%</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Implementation Challenges</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>DICOM image preprocessing complexities</li>
            <li>Inter-rater variability in validation (κ=0.62-0.78)</li>
            <li>Hardware requirements for 3D imaging</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Research Contributions</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Synthesis Outcomes</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Identified 5 key optimization tradeoffs</li>
            <li>Developed evaluation framework for XAI methods</li>
            <li>Cataloged 12 emerging application domains</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Domain Applications</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Healthcare Diagnostics</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Algorithmic Trading</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Autonomous Vehicles</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Fraud Detection</span>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Project Visualizations</h2>
      <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4">
        {mainImages.map((img, index) => (
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
      <ul className="list-disc pl-6 space-y-2">
        <li><a href="https://example.com/resource1" className="text-blue-600 hover:underline">Resource 1</a></li>
        <li><a href="https://example.com/resource2" className="text-blue-600 hover:underline">Resource 2</a></li>
        <li><a href="https://example.com/resource3" className="text-blue-600 hover:underline">Resource 3</a></li>
      </ul>
    </section>

    <ImageModal 
      isOpen={isModalOpen} 
      closeModal={closeModal} 
      selectedImage={selectedImage} 
    />
  </div>
)};

export default ExplainableAI;