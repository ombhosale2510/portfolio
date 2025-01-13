import React from "react";

const MRP = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">Major Research Project</h1>
    <p className="text-lg mb-4">
    Exploring DP-OPT for Privacy-Preserving Prompt Tuning in LLMs
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

export default MRP;
