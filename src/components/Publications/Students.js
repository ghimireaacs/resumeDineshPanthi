import { researchStudents } from "./responsibilitiesData";
import "./responsibilities.css";

const Students = () => {
  const students = researchStudents();

  return (
    <div className="student">
      <h2>Students</h2>
      {students.map((student) => (
        <div key={student.id} className="student">
          <p className="student-title">{student.title}</p>
          <p className="student-year">{student.Year}</p>
          <p className="student-authors">{student.student}</p>
          <p className="student-citation">{student.description}</p>
          {/* <p className="student-url">{student.url}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Students;
