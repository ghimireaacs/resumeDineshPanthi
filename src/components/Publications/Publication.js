import { journalsData } from "./publicationData";
import "./journal.css";

const Journals = () => {
  const journals = journalsData();

  return (
    <div className="journal">
      <h2>journals</h2>
      {journals.map((journal) => (
        <div key={journal.id} className="journal">
          <p className="journal-year" href={journal.url}>
            {journal.year}
          </p>
          <p className="journal-title">{journal.title}</p>
          <p className="journal-type">{journal.type}</p>
          <p className="journal-authors">{journal.authors}</p>
          <p className="journal-citation">{journal.citation}</p>
          {/* <p className="journal-url">{journal.url}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Journals;
