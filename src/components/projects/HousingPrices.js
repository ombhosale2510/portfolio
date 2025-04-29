import React from "react";
import { useImageModal } from './utils/useImageModal';
import ImageModal from './utils/ImageModal';

// image paths
const projectImages = [
  `${process.env.PUBLIC_URL}/images/Housing/feature_importance.png`,
  `${process.env.PUBLIC_URL}/images/Housing/model_comparison.png`,
  `${process.env.PUBLIC_URL}/images/Housing/price_distribution.png`,
];

const HousingPrices = () => {
  const { selectedImage, isModalOpen, handleImageClick, closeModal } = useImageModal();

  return (
  <div className="p-8 bg-gray-100 ">
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">
        Predictive Modeling of Housing Prices
      </h1>
      <p className="text-xl text-gray-600">Machine Learning Research Project | Lead Data Scientist</p>
    </header>

    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
      <p className="text-gray-700 mb-6">
        Developed a comparative analysis framework for 7 regression models using 2,919 property listings
        with 81 features. Achieved 79% prediction accuracy through advanced feature engineering and
        hyperparameter optimization.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Achievements</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>0.001673 MSE with Gradient Boosting (Best Model)</li>
            <li>56% feature reduction via Mutual Information Gain</li>
            <li>79% R² score for price prediction accuracy</li>
            <li>500+ hyperparameter combinations tested</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Stack</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Python</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Scikit-learn</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">GridSearchCV</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Pandas</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Matplotlib</span>
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
            <li>Custom one-hot encoding pipeline for 2,262 features</li>
            <li>Mutual Information Gain feature selection (0.01 threshold)</li>
            <li>Nested cross-validation strategy (5-fold inner, 10-fold outer)</li>
            <li>Ensemble gradient boosting with 300 estimators</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Metrics</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Best Model MSE:</span>
              <span className="font-semibold">0.00167</span>
            </div>
            <div className="flex justify-between">
              <span>Feature Reduction:</span>
              <span className="font-semibold">56/2262</span>
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
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Model Comparison</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Algorithm Scores</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gradient Boosting: 0.00167 MSE</li>
            <li>Random Forest: 0.00279 MSE</li>
            <li>Lasso Regression: 0.00510 MSE</li>
            <li>KNN (k=9): 0.00338 MSE</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Insights</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tree-based models outperformed linear approaches</li>
            <li>YearBuilt emerged as top predictive feature</li>
            <li>Hyperparameter tuning improved accuracy by 22%</li>
            <li>Feature selection reduced training time by 65%</li>
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
            <li>High dimensionality → Mutual Information filtering</li>
            <li>Categorical features → Custom one-hot encoding</li>
            <li>Data leakage prevention → Nested CV pipeline</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Model Challenges</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Overfitting in RF → Pruning (max_depth=70)</li>
            <li>Computation limits → Parallel processing</li>
            <li>Non-linear relationships → Kernel SVR</li>
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
          href="https://github.com/ombhosale2510/House_Prices_Regression_Models"
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
          href="https://github.com/ombhosale2510/House_Prices_Regression_Models/blob/master/Final_report_Team_6.pdf"
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

    <ImageModal 
      isOpen={isModalOpen} 
      closeModal={closeModal} 
      selectedImage={selectedImage} 
    />
  </div>
)};

export default HousingPrices;