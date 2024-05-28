import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BookRow = ({ book }) => {
  return (
    <tr className="border">
      <th>{book?.id}</th>
      <td>{book?.title}</td>
      <td>${book?.price}</td>
      <td>{book?.language}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/edit-book/${book?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        <button className="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default BookRow;
