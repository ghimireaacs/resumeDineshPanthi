import { conferencePaper } from "./publicationData";
import "./paper.css";

const papers = () => {
  const papers = conferencePaper();

  return (
    <div className="paper">
      <h2>Papers</h2>
      {papers.map((paper) => (
        <div key={paper.id} className="paper">
          <p className="paper-year" href={paper.url}>
            {paper.year}
          </p>
          <p className="paper-title">{paper.Title}</p>
          <p className="paper-type">{paper.type}</p>
          <p className="paper-authors">{paper.Authors}</p>
          <p className="paper-citation">{paper.Citation}</p>
          {/* <p className="paper-url">{paper.url}</p> */}
        </div>
      ))}
    </div>
  );
};

export default papers;
