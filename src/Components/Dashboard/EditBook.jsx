import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();

  const [book, setBook] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      const data = await axios.get(`http://localhost:3000/books/${id}`);
      if (data.status === 200) {
        setBook(data.data);
      }
    }
    load();
  }, [id]);

  const handleUpdateBook = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const country = form.country.value;
    const year = form.year.value;
    const language = form.language.value;
    const link = form.link.value;
    const imageLink = form.imageLink.value;
    const author = form.author.value;

    const bookData = {
      title,
      price,
      country,
      year,
      language,
      link,
      imageLink,
      author,
    };

    const updated = await axios.patch(
      `http://localhost:3000/books/${id}`,
      bookData
    );
    if (updated.status === 200) {
      alert("Book Successfully Updated");
      navigate("/dashboard/manage-books");
    }
  };

  return (
    <div className="w-full px-16">
      <h1 className="text-4xl mb-4 font-bold">Edit Books</h1>
      <form onSubmit={handleUpdateBook} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input
            defaultValue={book?.title}
            type="text"
            name="title"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Author</label>
          <input
            defaultValue={book?.author}
            type="text"
            name="author"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Price</label>
          <input
            type="text"
            defaultValue={book?.price}
            name="price"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Image Link</label>
          <input
            type="text"
            name="imageLink"
            defaultValue={book?.imageLink}
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Link</label>
          <input
            defaultValue={book?.link}
            type="text"
            name="link"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Country</label>
          <input
            type="text"
            defaultValue={book?.country}
            name="country"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Year</label>
          <input
            type="number"
            defaultValue={book?.year}
            name="year"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Language</label>
          <input
            type="text"
            defaultValue={book?.language}
            name="language"
            className="w-full py-3 px-5 border"
          />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={"Add Book"}
            className="w-full btn py-3 px-5 border btn-warning"
          />
        </div>
      </form>
    </div>
  );
};

export default EditBook;
