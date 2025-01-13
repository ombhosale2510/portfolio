const projects = [
  {
    id:"mrp",
    title: "Major Research Project: Exploring DP-OPT for Privacy-Preserving Prompt Tuning in LLMs",
    description: (<>
     <ul>
      <li>• Conducted advanced experimentation on Differentially-Private Offsite Prompt Tuning (DP-OPT) with multiple LLMs, including Vicuna 7B, Llama 2-7B, and OPT models, achieving 88% accuracy on the SST2 dataset and reducing perplexity (PPL) to 4.948 at a privacy budget (ϵ) of 1.8</li>
      <li>• Evaluated privacy-preserving LLMs on HPC clusters using SLURM workload management, ensuring consistent performance and privacy guarantees across large-scale experiments.
      </li>
      <li>• Analyzed the privacy-performance trade-offs in LLMs by systematically varying privacy budgets (ϵ = 0.1 to 8) and benchmarking model performance across diverse architectures and datasets.
      </li>
     </ul></>),
    details: "This project involved training deep learning models like VGG16, ormalization and data augmentation."
  },
  {
    id:"mri-classification",
    title: "AI-Driven MRI Classification System",
    description: (<>
    <ul>
      <li>• Developed and trained CNN models for MRI classification using transfer learning with VGG16, ResNet50, and EfficientNet, achieving 92% accuracy and an F1 score of 0.89.
      </li>
      <li>• Applied ensemble methods, image normalization, and data augmentation to enhance reliability and ensure robust performance across diverse patient samples.
      </li>
    </ul>
    </>),
    details: "This project involved training deep learning models like VGG16, ormalization and data augmentation."
  },
  {
    id:"fall-alert",
    title: "FallAlert Mobile App",
    description: (<>
    <ul>
      <li>• Developed an Android application utilizing accelerometer and gyroscope sensors, processing over 50,000 data samples for real-time fall detection with a 92% precision rate.</li>
      <li>• Implemented on-device machine learning inference to reduce false positives by 35% and trigger emergency responses within 3 seconds, ensuring accuracy and reliability in diverse scenarios.</li>
    </ul>
    </>),
    details: "This project involved training deep learning models like VGG16, ormalization and data augmentation."
  },
  {
    id:"mentalhealth",
    title: "Early Detection of Mental Health Disorders using Twitter-STMHD",
    description: (<>
    <ul>
      <li>• Trained LSTM, GRU, and DistilBERT models on Twitter data for depression prediction, achieving 79% accuracy with LSTM and 78% with GRU using Word2Vec embeddings.
      </li>
      <li>• Fine-tuned DistilBERT for a 4% accuracy increase, reaching 72.5% accuracy. Applied text preprocessing and sequence optimizations for improved classification performance
      </li>
    </ul>
    </>),
    details: "This project involved training deep learning models like VGG16, ormalization and data augmentation."
  },
  {
    id:"housepricing",
    title: "Predictive Modeling and Analysis of Housing Prices",
    description: (<>
    <ul>
      <li>• Applied machine learning models including KNN, Random Forest, SVR, and Gradient Boosting Regression to predict housing prices, achieving a MSE of 0.0017 and R-squared of 0.67 with Gradient Boosting Regression.</li>
      <li>• Conducted comprehensive hyperparameter tuning and utilized cross-validation techniques to enhance model accuracy and robustness.</li>
    </ul>
    </>),
    details: "This project involved training deep learning models like VGG16, ormalization and data augmentation."
  },
  // Add more projects here
];

export default projects