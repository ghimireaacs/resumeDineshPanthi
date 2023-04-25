import { conferenceData } from "./conferencesData";
import "./publication.css";

const Conference = () => {
  const conferences = conferenceData();

  return (
    <div className="conference">
      <h2>Conferences</h2>
      {conferences.map((conference) => (
        <div key={conference.id} className="conference">
          <p className="conference-title">{conference.Title}</p>
          <p className="conference-desc">{conference.Description}</p>
        </div>
      ))}
    </div>
  );
};

export default Conference;
