import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import MRIClassification from "./components/projects/MRIClassification";
import FallAlert from "./components/projects/FallAlert";
import MRP from "./components/projects/Mrp";
import MentalHealth from "./components/projects/MentalHealthDetection";
import HousingPrices from "./components/projects/HousingPrices";
import ExplainableAI from "./components/projects/ExplainableAI";

const ProjectDetails = () => {
  const { id } = useParams();
  const { darkMode } = useTheme();

  const renderProject = () => {
    switch (id) {
      case "mri-classification":
        return <MRIClassification />;
      case "fall-alert":
        return <FallAlert />;
      case "mrp":
        return <MRP />;
      case "mentalhealth":
        return <MentalHealth />;
      case "housepricing":
        return <HousingPrices />
      case "xai":
        return <ExplainableAI />
      default:
        return (
          <div className={`text-center transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <h2 className="text-2xl font-bold">Project Not Found</h2>
            <Link to="/" className={`mt-4 inline-block transition-colors duration-300 ${darkMode ? 'text-[#BB86FC] hover:text-[#E0E0E0]' : 'text-purple-600 hover:text-purple-800'}`}>
              Go Back to Home
            </Link>
          </div>
        );
    }
  };

  return (
    <div className={`transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
      {renderProject()}
      <Link to="/" className={`mt-4 inline-block transition-colors duration-300 ${darkMode ? 'text-[#BB86FC] hover:text-[#E0E0E0]' : 'text-purple-600 hover:text-purple-800'}`}>
        ← Back to Projects
      </Link>
    </div>
  );
};

export default ProjectDetails;