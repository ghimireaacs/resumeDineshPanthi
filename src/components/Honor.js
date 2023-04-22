import {honors} from "./Positions";
import "./honors.css";

const Honors = () => {
  const awards = honors();

  return (
    <div className="academic-education">
      <h2>Honors And Awards</h2>
      {awards.map(award => (
        <div key={award.id} className="awards">
          <p>{award.id}</p>
          <p>{award.year}</p>
          <p>{award.title}</p>
          <p>{award.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Honors;
