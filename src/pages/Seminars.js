import { conferenceData } from "../components/Publications/conferencesData";
import "../components/Publications/publication.css";

const Conference = () => {
  const conferences = conferenceData();

  return (
    <div className="conference">
      <h2>Conferences</h2>
      {conferences.map((conference) => (
        <div key={conference.id} className="conference">
          <div className="header-conference">
            <p className="conference-title">{conference.Title}</p>
          </div>
          <div className="desc-conf">
            <p className="conference-desc">{conference.Description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Conference;
