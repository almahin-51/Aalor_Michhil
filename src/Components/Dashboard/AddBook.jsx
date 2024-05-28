import axios from "axios";
// import { useEffect } from "react";

const AddBook = () => {
  // useEffect(() => {
  //   async function load() {
  //     const data = await axios.get("http://localhost:3000/books");
  //     if (data?.status === 200) {
  //       console.log(data?.data);
  //     }
  //   }

  //   load();
  // }, []);

  const handleCreateRecipe = async (e) => {
    e.preventDefault();
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
      alert("Book Added Successfully");
      form.reset();
    }
  };

  // author, imageLink, link, title, country, year, language, price, id

  return (
    <div className="w-full px-16">
      <h1 className="text-4xl my-6 mt-10 font-bold ">Add Recipe</h1>
      <form onSubmit={handleCreateRecipe} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Id </label>
          <input type="number" name="id" className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input type="text" name="title" className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="">Author</label>
          <input
            type="text"
            name="author"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Price</label>
          <input type="text" name="price" className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="">Image Link</label>
          <input
            type="text"
            name="imageLink"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Link</label>
          <input type="text" name="link" className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="">Country</label>
          <input
            type="text"
            name="country"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Year</label>
          <input
            type="number"
            name="year"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Language</label>
          <input
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
