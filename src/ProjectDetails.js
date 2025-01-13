import React from "react";
import { useParams, Link } from "react-router-dom";
import MRIClassification from "./components/projects/MRIClassification";
import FallAlert from "./components/projects/FallAlert";
import MRP from "./components/projects/Mrp";
import MentalHealth from "./components/MentalHealth";
import HousingPrices from "./components/projects/HousingPrices";

const ProjectDetails = () => {
  const { id } = useParams();

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
      default:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold">Project Not Found</h2>
            <Link to="/" className="text-blue-400 mt-4 inline-block">
              Go Back to Home
            </Link>
          </div>
        );
    }
  };

  return (
    <div>
      {renderProject()}
      <Link to="/" className="text-blue-400 mt-4 inline-block">
        ← Back to Projects
      </Link>
    </div>
  );
};

export default ProjectDetails;