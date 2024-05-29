import { CiStar } from "react-icons/ci";
import { FaRegGrinHearts } from "react-icons/fa";
import { GiDramaMasks, GiElfEar } from "react-icons/gi";

const BookCategory = () => {
  return (
    <div className="bookCategory mb-16 flex justify-evenly items-center text-center h-64">
      <div className="flex gap-4">
        <div className="bg-[#93648d] w-16 h-16 rounded-full flex justify-center items-center">
          <GiDramaMasks className="text-4xl text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-[#93648d]">Drama</h1>
          <p>6,179,213</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="bg-[#4cc3d9] w-16 h-16 rounded-full flex justify-center items-center">
          <GiElfEar className="text-4xl text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-[#4cc3d9]">Horror</h1>
          <p>6,179,213</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="bg-[#7bc8a4] w-16 h-16 rounded-full flex justify-center items-center">
          <FaRegGrinHearts className="text-4xl text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-[#7bc8a4]">Romance</h1>
          <p>6,179,213</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="bg-[#f16745] w-16 h-16 rounded-full flex justify-center items-center">
          <CiStar className="text-4xl text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-[#f16745]">Fashion</h1>
          <p>6,179,213</p>
        </div>
      </div>
    </div>
  );
};

export default BookCategory;
