import { useEffect, useState } from "react";
import BooksCard from "../Components/Cards/BooksCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function load() {
      const BookRes = await fetch("http://localhost:3000/books");
      const BookData = await BookRes.json();
      setBooks(BookData);
    }
    load();
  }, []);
  return (
    <div>
      <div>
        <h1>All Books</h1>
      </div>
      <div className="flex justify-center flex-wrap gap-10 px-16">
        {books?.map((book) => (
          <BooksCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
