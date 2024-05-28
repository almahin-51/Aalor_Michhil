import { SlBasket } from "react-icons/sl";
import featuresImg from "../../assets/pic/img-02.png"

const Features = () => {
    return (
        <div className="bg-[#f7f7f7] my-10 flex justify-center">
            <div className="mr-24">
            <img src={featuresImg} alt="" />
            </div>

            <div className="flex flex-col justify-center w-2/6">
                <div className="badge my-4 text-white badge-info">
                    <small>FEATURED</small>
                </div>
                <h1 className="text-5xl font-bold mb-5">Things To Know About Green Flat Design</h1>
                <p >By: Farrah Whisenhunt</p>

                <div className="rating rating-sm mt-2">
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"  />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                </div>
           </div>
           <div className="flex flex-col justify-center items-center">
            <p className="text-5xl font-bold">$23.18</p>
            <button className="btn my-5 rounded-full px-6 shadow-lg bg-[#77b748] text-white text-lg"><SlBasket className="mr-1" /> Add to card</button>
           </div>
        </div>
    );
};

export default Features;