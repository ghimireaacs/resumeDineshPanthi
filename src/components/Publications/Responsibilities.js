import { responsibilitiesDatas } from "./responsibilitiesData";
import "./responsibilities.css";

const Responsibilities = () => {
  const responsibilities = responsibilitiesDatas();

  return (
    <div className="responsibility">
      <h2>Responsibilities</h2>
      {responsibilities.map((responsibility) => (
        <div key={responsibility.id} className="responsibility">
          <p className="responsibility-year">{responsibility.heading}</p>
          <p className="responsibility-year">{responsibility.Year}</p>
          <p className="responsibility-title" href={responsibility.url}>
            {responsibility.title}
          </p>
          <p className="responsibility-type">{responsibility.description}</p>
          {/* <p className="responsibility-url">{responsibility.url}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Responsibilities;
