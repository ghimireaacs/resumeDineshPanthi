import {academicPosition} from "./Positions";
import "./position.css";

const Academics = () => {
  const positions = academicPosition();

  return (
    <div className="academic-position">
      <h2>Academic Positions</h2>
      {positions.map(position => (
        <div key={position.id} className="position">
          <p className="position-title">{position.title}</p>
          <p className="position-college">{position.college}</p>
          <p className="position-period">{position.started} - {position.ended}</p>
        </div>
      ))}
    </div>
  );
};

export default Academics;
