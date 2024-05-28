import axios from "axios";

import { Link } from "react-router-dom";
import swal from "sweetalert";

/* eslint-disable react/prop-types */
const BookRow = ({ book }) => {
  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "You want to Delete the Book?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:3000/books/${book?.id}`)
          // eslint-disable-next-line no-unused-vars
          .then((response) => {
            swal({
              title: "Deleted!",
              text: "Your book has been deleted.",
              icon: "success",
            });
            // window.location.reload();
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  return (
    <tr className="border">
      <th>{book?.id}</th>
      <td>{book?.title}</td>
      <td>${book?.price}</td>
      <td>{book?.language}</td>
      <td>{book?.year}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/edit-book/${book?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="btn btn-xs text-red-500 btn-outline btn-ghost"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BookRow;
