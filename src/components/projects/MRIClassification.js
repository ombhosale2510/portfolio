import React from "react";

const MRIClassification = () => (
  <div className="p-8 bg-gray-100 min-h-screen">
    <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
      AI-Driven MRI Classification System
    </h1>
    <p className="text-lg mb-4 text-center">
      Enhancing diagnostic accuracy and efficiency in medical imaging
    </p>
    <div className="">
      <h2 className="text-xl font-semibold mb-4">
        Project Overview
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        This project focused on building an AI-powered system to classify MRI
        images for aiding in the early detection and diagnosis of medical
        conditions. Leveraging state-of-the-art machine learning models, it
        addresses challenges like class imbalance and overfitting.
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Results</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>
          <strong>EfficientNetB1:</strong> Achieved 92–93% test accuracy with
          F1-score of 0.95–0.96.
        </li>
        <li>
          <strong>ResNet50:</strong> Delivered 96.89% accuracy with a test loss
          of 0.1050.
        </li>
        <li>
          <strong>LSTM Hybrid Model:</strong> Attained 91.21% accuracy with an
          F1-score of 91.25%.
        </li>
      </ul>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Technologies Used
      </h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Deep Learning Frameworks: TensorFlow, Keras</li>
        <li>Preprocessing: Python, image normalization, augmentation</li>
        <li>Models: CNN, LSTM, GRU, Transfer Learning</li>
      </ul>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Data & Methodology
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        The dataset, sourced from Kaggle, included 7,023 MRI images across four
        categories: glioma, meningioma, pituitary, and no tumor. Preprocessing
        steps included cropping, resizing, grayscale conversion, and duplicate
        removal to ensure data integrity and model robustness.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Impact
      </h3>
      <p className="text-gray-700 text-lg">
        By enhancing diagnostic precision, this project demonstrates the
        transformative potential of AI in medical imaging. It offers a solid
        foundation for future advancements in AI-driven diagnostics.
      </p>
    </div>

    
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Resources:</h3>
      <div className="flex gap-4">
        <a
          href="https://github.com/ombhosale2510/6600-04--Intro-to-AI-S24-Project/blob/b62548ab21c29e54a59ec9ab81f697760f375589/ENGG6600(04)%20S24%20Final%20Report.pdf"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700"
        >
          View Full Report
        </a>
        <a
          href="https://github.com/ombhosale2510/6600-04--Intro-to-AI-S24-Project" 
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700"
        >
          View Code Repository
        </a>
        <a
          href="https://docs.google.com/presentation/d/e/2PACX-1vTvZjzgbPW7YcfcgMFaxFoe2eVweKC8iWAsJaGzSYP8PYoyeWcZveDz8tilTeSCSWw7F6rGIg2G_Q7J/pub?start=false&loop=false&delayms=3000&slide=id.p" 
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700"
        >
          View Presentation
        </a>
      </div>
    </div>
    
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Visuals:</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <img
          src={`${process.env.PUBLIC_URL}/images/MRI/ModelResults.png`}
          alt="Model Performance"
          className="rounded shadow-md"
        />
        {/* Additional images can be added here */}
      </div>
    </div>
  </div>
);

export default MRIClassification;
