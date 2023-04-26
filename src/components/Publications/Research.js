import { researchProject } from "./responsibilitiesData";
import "./responsibilities.css";

const Researches = () => {
  const researches = researchProject();

  return (
    <div className="research">
      <h2>Researches</h2>
      {researches.map((research) => (
        <div key={research.id} className="research">
          <p className="research-type">{research.heading}</p>
          <p className="research-year">{research.Year}</p>
          <p className="research-title">{research.title}</p>
          <p className="research-authors">{research.description}</p>
          {/* <p className="research-url">{research.url}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Researches;
