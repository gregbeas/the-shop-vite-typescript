import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg";

const Banner = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="overflow-hidden rounded-lg max-h-[200px]">
          <img className="hover:scale-105 transition-transform w-full h-full object-cover" src={banner1} alt="banner image" />
        </div>
        <div className="overflow-hidden rounded-lg max-h-[200px]">
          <img className="hover:scale-105 transition-transform w-full h-full object-cover" src={banner2} alt="banner image" />
        </div>
      </div>
    </div>
  )
}

export default Banner