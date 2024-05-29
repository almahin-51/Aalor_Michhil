import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useEffect, useState } from "react";

const AddBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/books");
      if (data.status === 200) {
        setBook(data.data);
      }
    }
    load();
  }, [book]);

  const handleAdd = async (e) => {
    e.preventDefault();

    //Existing Id
    // const id = e.target.id.value;

    // book?.filter((book) => {
    //   if (Number(book.id) === id) {
    //     alert("Book already");
    //     console.log(Number(book.id), id);
    //   } else {
    //     console.log("clicked");
    //   }
    // });

    swal({
      title: "Are you sure?",
      text: "You want to Add the Book?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Book Added Successfully!", {
          icon: "success",
        });
        handleAddBook(e);
      }
    });
  };

  const handleAddBook = async (e) => {
    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const price = form.price.value;
    const country = form.country.value;
    const year = form.year.value;
    const language = form.language.value;
    const link = form.link.value;
    const imageLink = form.imageLink.value;
    const author = form.author.value;

    const bookData = {
      id,
      title,
      price,
      country,
      year,
      language,
      link,
      imageLink,
      author,
    };

    const dataPost = await axios.post("http://localhost:3000/books", bookData);
    if (dataPost.status === 201) {
      navigate("/dashboard/manage-books");
      form.reset();
    }
  };

  return (
    <div className="w-full px-16">
      <h1 className="text-4xl my-6 mt-10 font-bold ">Add Book</h1>
      <form onSubmit={handleAdd} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Id </label>
          <input
            required
            type="number"
            name="id"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input
            required
            type="text"
            name="title"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Author</label>
          <input
            required
            type="text"
            name="author"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Price</label>
          <input
            required
            type="text"
            name="price"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Image Link</label>
          <input
            required
            type="text"
            name="imageLink"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Link</label>
          <input
            required
            type="text"
            name="link"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Country</label>
          <input
            required
            type="text"
            name="country"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Year</label>
          <input
            required
            type="number"
            name="year"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Language</label>
          <input
            required
            type="text"
            name="language"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <input
            type="submit"
            value={"Add Book"}
            className="w-full  py-3 px-5 border btn btn-warning"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
