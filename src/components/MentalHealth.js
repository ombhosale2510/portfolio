import React from "react";

const MentalHealth = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">Early Detection of Mental Health Disorders using Twitter-STMHD</h1>
    <p className="text-lg mb-4">
    Exploring DP-OPT for Privacy-Preserving Prompt Tuning in LLMs
    </p>
    <p className="text-lg mb-4">
    • Trained LSTM, GRU, and DistilBERT models on Twitter data for depression prediction, achieving 79% accuracy with LSTM and 78% with GRU using Word2Vec embeddings.
    <></>• Fine-tuned DistilBERT for a 4% accuracy increase, reaching 72.5% accuracy. Applied text preprocessing and sequence optimizations for improved classification performance
    </p>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <img src="/images/mri1.png" alt="MRI Classification 1" className="rounded shadow-md" />
      <img src="/images/mri2.png" alt="MRI Classification 2" className="rounded shadow-md" />
    </div>
  </div>
);

export default MentalHealth;
