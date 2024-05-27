import { IoBookOutline } from "react-icons/io5";
import one from "../../assets/pic/1.jpg";
import two from "../../assets/pic/2.jpg";
import three from "../../assets/pic/3.jpg";
import four from "../../assets/pic/4.jpg";
import { GoPeople } from "react-icons/go";
import { BiSolidHappyHeartEyes } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="relative mb-32">
      <div className="carousel w-full h-screen carousel-img">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={one} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={two} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={three} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={four} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* Status   */}
      <div className="sm:absolute inset-x-0 bottom-[-100px] mx-16">
        <div className="sm:flex mx-auto gap-10 justify-center ">
          <div className="status_one w-[200px] h-[120px] sm:w-[400px] sm:h-[220px] ">
            <div className="bg-[#41b7ced1] text-center p-4 h-full">
              <div className=" border border-white-400 p-7 h-full">
                <IoBookOutline className="text-white text-5xl mx-auto mb-2" />
                <h1 className="text-white text-2xl">Books We Have</h1>
                <p className="text-white text-2xl">24,179,213 </p>
              </div>
            </div>
          </div>
          <div className="status_two w-[200px] h-[120px] sm:w-[400px] sm:h-[220px] ">
            <div className="bg-[#9c6f90c2] text-center p-4 h-full">
              <div className=" border border-white-400 p-7 h-full">
                <GoPeople className="text-white text-5xl mx-auto mb-2" />
                <h1 className="text-white text-2xl">Total Members</h1>
                <p className="text-white text-2xl">15,179,213</p>
              </div>
            </div>
          </div>
          <div className="status_three w-[200px] h-[120px] sm:w-[400px] sm:h-[220px] ">
            <div className="bg-[#da5b3fbd] text-center p-4 h-full">
              <div className=" border border-white-400 p-7 h-full">
                <BiSolidHappyHeartEyes className="text-white text-5xl mx-auto mb-2" />
                <h1 className="text-white text-2xl">Happy Users</h1>
                <p className="text-white text-2xl">1,267,539</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
