import React from "react";

const MentalHealthDetection = () => (
  <div className="p-8 bg-gray-100 min-h-screen">
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">
        Early Detection of Depression Using Twitter Data
      </h1>
      <p className="text-xl text-gray-600">Deep Learning Research Project | NLP Engineer & Model Architect</p>
    </header>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
      <p className="text-gray-700 mb-6">
        Developed a sequential deep learning system analyzing 1.8M+ tweets from 800+ users to predict depression 
        with 79% accuracy. Leveraged temporal tweet patterns and advanced NLP techniques to enable early 
        mental health intervention.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Achievements</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>79% accuracy with LSTM model (400 users, 300 sequences)</li>
            <li>40% reduction in false positives through Kalman filtering</li>
            <li>Processed 500k+ tweets with custom NLP pipeline</li>
            <li>Comparative analysis of 3 DL architectures</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Stack</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">TensorFlow</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Word2Vec</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">LSTM/GRU</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">DistilBERT</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">NVIDIA V100</span>
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
            <li>Chronological tweet sequence analysis (4-year windows)</li>
            <li>Custom text preprocessing pipeline with lemmatization</li>
            <li>Dual LSTM layers with 128 neurons each</li>
            <li>User-level temporal pattern recognition</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Metrics</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Best Model Accuracy:</span>
              <span className="font-semibold">79%</span>
            </div>
            <div className="flex justify-between">
              <span>Sequence Length:</span>
              <span className="font-semibold">300 tweets</span>
            </div>
            <div className="flex justify-between">
              <span>Training Efficiency:</span>
              <span className="font-semibold">2.4h @ 400 users</span>
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
            <li>Designed temporal analysis framework for tweet histories</li>
            <li>Implemented custom Word2Vec embeddings</li>
            <li>Developed comparative analysis framework for DL models</li>
            <li>Optimized LSTM for long-sequence processing</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Future Directions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Multimodal analysis with profile metadata</li>
            <li>Federated learning for privacy preservation</li>
            <li>Real-time monitoring API development</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Challenges & Solutions</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Challenges</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Noise in self-reported diagnoses → Anchor tweet validation</li>
            <li>Multilingual content → Langdetect filtering</li>
            <li>Class imbalance → Stratified sampling</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Model Challenges</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Vanishing gradients → LSTM gate mechanisms</li>
            <li>Overfitting → Early stopping & dropout</li>
            <li>Compute limits → Gradient accumulation</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Project Resources</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#github-link"
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
          href="#research-paper"
          target="_blank"
          rel="noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Read Research Paper
        </a>
      </div>
    </section>
  </div>
);

export default MentalHealthDetection;