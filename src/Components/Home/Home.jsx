import BookCategory from "../../Pages/BookCategory";
import Features from "../Features/Features";
import Banner from "./Banner";
import BestSelling from "./BestSelling";

const Home = () => {
  return (
    <>
      <Banner />
      <BestSelling />
      <Features />
      <BookCategory />
    </>
  );
};

export default Home;
