import { journalsData } from "../components/Publications/publicationData";
import "./../components/Publications/publication.css";

const Journals = () => {
  const journals = journalsData();

  return (
    <div className="journal">
      <h2>JOURNALS</h2>
      {journals.map((journal) => (
        <div key={journal.id} className="journal">
          <p className="journal-year" href={journal.url}>
            {journal.year}
          </p>
          <p className="journal-title">{journal.Title}</p>
          <p className="journal-authors">{journal.Authors}</p>
          <p className="journal-citation">{journal.Citation}</p>
          {/* <p className="journal-url">{journal.url}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Journals;
