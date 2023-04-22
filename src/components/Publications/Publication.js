import { publicationsData } from "./publicationData";
import "./publication.css";

const Publication = () => {
  const publications = publicationsData();

  return (
    <div className="publications">
      <h2>Publications</h2>
      {publications.map((publication) => (
        <div key={publication.id} className="publication">
          <p className="publication-year" href={publication.url}>
            {publication.year}
          </p>
          <p className="publication-title">{publication.title}</p>
          <p className="publication-type">{publication.type}</p>
          <p className="publication-authors">{publication.authors}</p>
          <p className="publication-citation">{publication.citation}</p>
          {/* <p className="publication-url">{publication.url}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Publication;
