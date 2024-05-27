import { useEffect, useState } from "react";
import BooksCard from "../Cards/BooksCard";

const BestSelling = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    // fetch("http://localhost:3000/books")
    //   .then((res) => res.json())
    //   .then((data) => setBooks(data));

    async function load() {
      const bookRes = await fetch("http://localhost:3000/books");
      const bookData = await bookRes.json();
      setBooks(bookData);
    }
    load();
  }, []);

  //   console.log(books);
  return (
    <div className="mx16 py-8 mb-8">
      <div className="text-center my-10">
        <p>People’s Choice</p>
        <h1 className="text-3xl font-bold">Bestselling Books</h1>
      </div>
      <div className="flex justify-center gap-5 flex-wrap">
        {books?.slice(0, 4)?.map((book) => (
          <BooksCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
