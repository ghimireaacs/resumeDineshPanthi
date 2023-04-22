import {education} from "./Positions";
import "./position.css";

const Education = () => {
  const educations = education();

  return (
    <div className="academic-education">
      <h2>Academic educations</h2>
      {educations.map(education => (
        <div key={education.id} className="education">
          <p className="education-title">{education.title}</p>
          <p className="education-year">{education.year}</p>
          <p className="education-subject">{education.subject}</p>
          <p className="education-ended">{education.ended}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
