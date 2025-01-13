import React from "react";

const HousingPrices = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">Analysis of Housing Prices</h1>
    <p className="text-lg mb-4">
    Predictive Modeling and Analysis of Housing Prices
    </p>
    <p className="text-lg mb-4">
    • Applied machine learning models including KNN, Random Forest, SVR, and Gradient Boosting Regression to predict housing prices, achieving a MSE of 0.0017 and R-squared of 0.67 with Gradient Boosting Regression.
    • Conducted comprehensive hyperparameter tuning and utilized cross-validation techniques to enhance model accuracy and robustness.
    </p>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <img src="/images/mri1.png" alt="MRI Classification 1" className="rounded shadow-md" />
      <img src="/images/mri2.png" alt="MRI Classification 2" className="rounded shadow-md" />
    </div>
  </div>
);

export default HousingPrices;
