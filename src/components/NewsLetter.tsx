import { FaEnvelopeOpen } from "react-icons/fa"

const NewsLetter = () => {
  return (
    <div className="bg-accent mt-16">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="flex flex-shrink-0 items-center gap-4">
          <FaEnvelopeOpen className="text-[60px]" />
          <div>
          <h3 className="text-xl sm:text-2xl font-semibold">Sign Up For Our Newsletter!</h3>
          <p>...and recieve a coupon for 20% off your first order</p>
          </div>
        </div>
      
        <div className="w-full max-w-[500px] relative">
          <input
            className="py-4 px-6 w-full rounded-full"
            type="email"
            placeholder="Email Address..."
          />
          <button className="bg-accentDark absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:bg-accentLight text-white">Sign Up!</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter