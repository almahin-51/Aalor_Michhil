import axios from "axios";
import { useEffect, useState } from "react";
import { SlBasket } from "react-icons/sl";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const [book, setBook] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function load() {
      const data = await axios.get(`http://localhost:3000/books/${id}`);
      if (data.status === 200) {
        setBook(data.data);
      }
    }
    load();
  }, []);

  console.log(book);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl px-16">
      <figure className="w-2/5">
        {/* <img src={book?.imageLink} alt="Books" /> //not working */}
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Books"
        />
      </figure>
      <div className="mx-16 flex items-center">
        <div>
          <div className="text-4xl font-bold flex items-center mb-5">
            {book?.title}
            <span className="badge badge-secondary mx-3">{book?.language}</span>
          </div>
          <h2 className="text-lg font-semibold mb-1">
            Author: <span className="text-green-500">{book?.author}</span>
          </h2>
          <p className="font-semibold mb-1">
            Country: <span className="text-red-500">{book?.country}</span>
          </p>
          <p className="font-semibold mb-1">
            Language: <span className="text-yellow-600">{book?.language}</span>
          </p>
          <p className="font-semibold mb-1">
            Year: <span className="text-sky-500">{book?.year}</span>
          </p>
          <Link to={book?.link} className="font-semibold text-blue-700">
            More Info
          </Link>

          <p className="text-4xl font-bold mt-6 mb-2">${book?.price}</p>
          <button className=" btn my-5 rounded-full px-10 shadow-lg bg-[#77b748] text-white text-lg">
            <SlBasket className="mr-1 font-bold" /> Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
