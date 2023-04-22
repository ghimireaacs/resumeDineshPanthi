import {education} from "./Positions";
import "./education.css";

const Education = () => {
  const educations = education();

  return (
    <div className="academic-education">
      <h2>Academic educations</h2>
      {educations.map(education => (
        <div key={education.id} className="education">
          <p>{education.title}</p>
          <p>{education.college}</p>
          <p>{education.started} - {education.ended}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
