import {academicPosition} from "./Positions";
import "./academicPosition.css";

const Academics = () => {
  const positions = academicPosition();

  return (
    <div className="academic-position">
      <h2>Academic Positions</h2>
      {positions.map(position => (
        <div key={position.id} className="position">
          <p>{position.title}</p>
          <p>{position.college}</p>
          <p>{position.started} - {position.ended}</p>
        </div>
      ))}
    </div>
  );
};

export default Academics;
