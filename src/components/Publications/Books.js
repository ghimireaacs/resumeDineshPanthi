import { booksData } from "./publicationData";
import "./book.css";

const books = () => {
  const books = booksData();

  return (
    <div className="book">
      <h2>books</h2>
      {books.map((book) => (
        <div key={book.id} className="book">
          <p className="book-year" href={book.url}>
            {book.year}
          </p>
          <p className="book-title">{book.title}</p>
          <p className="book-type">{book.type}</p>
          <p className="book-authors">{book.authors}</p>
          <p className="book-citation">{book.citation}</p>
          {/* <p className="book-url">{book.url}</p> */}
        </div>
      ))}
    </div>
  );
};

export default books;
