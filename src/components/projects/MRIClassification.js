import React from "react";

const MRIClassification = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">AI-Driven MRI Classification System</h1>
    <p className="text-lg mb-4">
      inside projectDesigned CNN models (VGG16, ResNet50, EfficientNet) to classify MRI images, achieving 92% accuracy and F1 score of 0.89.
    </p>
    <p className="text-lg mb-4">
      Techniques like transfer learning and ensemble methods were employed for model robustness. Preprocessing involved image normalization and data augmentation.
    </p>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <img src="/images/mri1.png" alt="MRI Classification 1" className="rounded shadow-md" />
      <img src="/images/mri2.png" alt="MRI Classification 2" className="rounded shadow-md" />
    </div>
  </div>
);

export default MRIClassification;
