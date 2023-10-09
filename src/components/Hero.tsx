import hero1 from "../assets/hero-1.jpg"
import hero2 from "../assets/hero-2.jpg"
import hero3 from "../assets/hero-3.jpg"
import {FaArrowRight} from "react-icons/fa"

const Hero = () => {
  return (
    <section className="container mt-[60px] lg:mt-[120px] scroll-mt-[60px] lg:scroll-mt-[120px]" id="hero">
      <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 gap-8">
        <div className="lg:col-span-2 lg:row-start-1 lg:row-end-[-1] col-span-2 relative">
          <img alt="avocado on plain background" src={hero1} className="w-full h-full object-cover rounded-md"/>
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-base hidden sm:block sm:text-xl bg-accent w-fit p-2 text-white rounded-md" >100% Farm Fresh</p>
            <h2 className="text-2xl sm:text-4xl md:text-4xl xl:text-6xl font-bold text-white">Healthy Produce to Fit Your Lifestyle</h2>
            <p className="text-white  text-base md:text-xl pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-accentLight text-2xl sm:text-4xl pb-4 sm:pb-8">$1.00</div>
            <a href="#produce">
              <div className="bg-accentDark hover:bg-accentLight text-white rounded-full w-fit flex items-center gap-4 px-4 py-4 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                Shop Now <FaArrowRight />
              </div>
            </a>
          </div>
        </div>
        <div className="relative">
          <img src={hero2} alt="spread of plates of food" className=" h-full w-full object-cover rounded-md"/>
          <div className=" absolute max-w-[470px] sm:ml-16 ml-2 top-[50%] -translate-y-[50%] sm:space-y-2">
            <div className="p-2 bg-black/70 rounded-md mb-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white" >Meat &<br></br>Seafood </h2>
              <p className="text-white text-xl pt-4" >Starting At</p>
              <div className="font-medium text-accentLight text-2xl sm-text-4xl" >$9.00</div>
            </div>
            <div className="bg-accentDark hover:bg-accentLight text-white rounded-full w-fit flex items-center gap-4 py-2 px-4 text-[14px] cursor-pointer">
              Shop Now <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={hero3} alt="stck of pancakes with syrup" className="h-full w-full object-cover rounded-md"/>
          <div className=" absolute max-w-[470px] sm:ml-16 ml-2 top-[50%] -translate-y-[50%] sm:space-y-2">
            <div className="p-2 bg-black/70 rounded-md mb-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white" >Dry Goods</h2>
              <p className="text-white text-xl pt-4" >Starting At</p>
              <div className="font-medium text-accentLight text-2xl sm-text-4xl" >$2.00</div>
            </div>
            <div className="bg-accentDark hover:bg-accentLight text-white rounded-full w-fit flex items-center gap-4 py-2 px-4 text-[14px] cursor-pointer">
              Shop Now <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero