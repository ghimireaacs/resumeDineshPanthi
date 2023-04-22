import {honors} from "./Positions";
import "./position.css";

const Honors = () => {
  const awards = honors();

  return (
    <div className="honors">
      <h2>Honors, Awards and Grants</h2>
      {awards.map(award => (
        <div key={award.id} className="awards">
          <p>{award.id}</p>
          <p className="honor-year">{award.year}</p>
          <p className="honor-title">{award.title}</p>
          <p className="honor-desc">{award.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Honors;
