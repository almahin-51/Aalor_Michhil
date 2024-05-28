import axios from "axios";
import { useEffect, useState } from "react";
import BookRow from "../Cards/BookRow";

const ManageAllBooks = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/books");
      if (data?.status === 200) {
        setBooks(data?.data);
      }
    }
    load();
  }, []);

  return (
    <div className="overflow-x-auto w-full px-16 mt-10">
      <h1 className="text-3xl mb-6 font-bold ">Manage All Books</h1>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr className="border">
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Language</th>
            <th>Year</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) => (
            <BookRow key={book?.id} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllBooks;
