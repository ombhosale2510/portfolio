import React from "react";

const MRP = () => (
  <div className="p-8 bg-gray-100 min-h-screen">
    <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
      Major Research Project
    </h1>
    <h2 className="text-2xl font-semibold mb-4">
      Exploring DP-OPT for Privacy-Preserving Prompt Tuning in LLMs
    </h2>
    <p className="text-lg text-gray-700 mb-6">
      This project investigates DP-OPT, a novel framework for incorporating 
      differential privacy into prompt tuning for large language models (LLMs), ensuring 
      data privacy while maintaining performance.
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mb-2">Highlights:</h3>
    <ul className="list-disc pl-6 text-gray-700 mb-6">
      <li>
        Achieved <strong>88% accuracy</strong> on SST-2 dataset with Vicuna-7B under a privacy budget (ε) of 1.8.
      </li>
      <li>
        Reduced perplexity (PPL) to <strong>4.948</strong>, maintaining a balance between privacy and performance.
      </li>
      <li>
        Successfully scaled the framework to multiple LLMs (OPT, Llama, Vicuna) on HPC clusters.
      </li>
    </ul>

    <h3 className="text-xl font-semibold text-gray-800 mb-2">Technical Contributions:</h3>
    <p className="text-gray-700 mb-6">
      Designed scalable pipelines with Limited-Domain and Exponential Mechanisms. 
      Used differential privacy techniques like DPSGD and RDP, leveraging GPUs 
      for experimentation.
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mb-2">Tools & Technologies:</h3>
    <ul className="list-disc pl-6 text-gray-700 mb-6">
      <li>PyTorch, Hugging Face Transformers</li>
      <li>Rényi Differential Privacy, DPSGD</li>
      <li>SLURM workload management, NVIDIA A100 GPUs</li>
    </ul>

    <h3 className="text-xl font-semibold text-gray-800 mb-2">Impact:</h3>
    <p className="text-gray-700 mb-6">
      Advanced privacy-preserving AI systems, addressing the challenges of prompt 
      tuning in sensitive domains like healthcare and finance.
    </p>

    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Resources:</h3>
      <div className="flex gap-4">
        <a
          href="https://github.com/ombhosale2510/dpopt-mrp-project/blob/87d527a0bef7361c944ce651b8334dc704da0e71/ENGG6990%20-%20MRP%20Report.pdf"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700"
        >
          View Full Report
        </a>
        <a
          href="https://github.com/ombhosale2510/dpopt-mrp-project" 
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700"
        >
          View Code Repository
        </a>
      </div>
    </div>

    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Visuals:</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <img
          src={`${process.env.PUBLIC_URL}/images/modelRuntimes.png`}
          alt="Model Performance"
          className="rounded shadow-md"
        />
        {/* Additional images can be added here */}
      </div>
    </div>
  </div>
);

export default MRP;
