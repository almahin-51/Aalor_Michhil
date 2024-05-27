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
    <div className="px-16">
      <div className=" my-12  text-center">
        <h1 className="text-3xl pb-2 font-bold border-b-2 inline-block">
          All Books
        </h1>
      </div>
      <div className="flex justify-center flex-wrap gap-10">
        {books?.map((book) => (
          <BooksCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
