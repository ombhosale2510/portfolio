import React from "react";

const ExplainableAI = () => (
  <div className="p-8 bg-gray-100 min-h-screen">
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">
        Deep Learning Optimization with Explainable AI
      </h1>
      <p className="text-xl text-gray-600">Research Project | Optimization Techniques Course</p>
    </header>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-700 mb-4">
            Developed a novel optimization framework integrating Layer-wise Relevance Propagation (LRP) 
            into neural network training, enhancing model interpretability while maintaining competitive 
            performance on benchmark datasets.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Innovations</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Integrated XAI directly into training pipeline</li>
            <li>Dynamic learning rate adjustment via relevance scores</li>
            <li>Clinical validation through medical imaging analysis</li>
            <li>Comparative analysis with 6 traditional optimizers</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Components</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">PyTorch</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">LRP</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Medical Imaging</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">MNIST/CIFAR-10</span>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Implementation</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Methodology</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modified weight update: W<sub>new</sub> = W<sub>old</sub> - η(∇W)β</li>
            <li>Relevance conservation through backward propagation</li>
            <li>Three LRP formulations: Amplification/Geometric/Adaptive</li>
            <li>5-fold cross-validation on 10K+ samples</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Experimental Results</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Medical Imaging Accuracy:</span>
              <span className="font-semibold">92.3% (vs 91.7% baseline)</span>
            </div>
            <div className="flex justify-between">
              <span>Training Convergence:</span>
              <span className="font-semibold">15% faster than SGD</span>
            </div>
            <div className="flex justify-between">
              <span>False Positives Reduction:</span>
              <span className="font-semibold">18% in clinical validation</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Case Study: Breast Cancer Diagnosis</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Implementation</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>CNN trained on 2,500+ mammograms</li>
            <li>LRP heatmaps identified diagnostically critical regions</li>
            <li>Clinical validation with 3 radiologists</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Outcomes</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>87% alignment with radiologist annotations</li>
            <li>22% reduction in false positives</li>
            <li>15% faster diagnosis workflow</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Insights</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Challenges</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>20% computational overhead from LRP calculations</li>
            <li>Dimensionality mismatch in relevance scores</li>
            <li>Balancing interpretability vs performance</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Research Context</h3>
          <p className="text-gray-700">
            This academic exploration was conducted as part of graduate-level Optimization Techniques studies,
            focusing on theoretical framework development and proof-of-concept validation rather than
            production deployment.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default ExplainableAI;