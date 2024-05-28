/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BooksCard = ({ book }) => {
  const { id, author, imageLink, title, country, year, language, price } = book;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={imageLink} alt="Books" />
      </figure>
      <div className="card-body">
        <div className="card-title">
          {title}
          <span className="badge badge-secondary">{language}</span>
        </div>
        <p>By: {author}</p>
        <div>
          <div>
            <p className="font-bold text-xl text-[#65cb50]">${price}</p>
          </div>
        </div>

        <div className="card-actions justify-between mt-4">
          <Link
            className="badge badge-outline bg-[#615EFC] text-white p-3"
            to={`/details/${id}`}
          >
            Details
          </Link>
          <div>
            <div className="badge badge-outline mr-2">{country}</div>
            <div className="badge badge-outline text-red-600">{year}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
