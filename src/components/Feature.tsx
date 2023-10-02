import FeatureCard from "./FeatureCard"
import { FaMoneyBillWave, FaPhoneAlt, FaCarSide, FaShippingFast } from "react-icons/fa";

const featureData = [
  {
    title: 'Best Prices Guaranteed',
    icon: <FaMoneyBillWave />
  },
  {
    title: '24/7 Customer Support',
    icon: <FaPhoneAlt />
  },
  {
    title: 'Free Curbside Pickup',
    icon: <FaCarSide />
  },
  {
    title: '1 Day Shipping',
    icon: <FaShippingFast />
  },
]

const Feature = () => {
  return (
    <section className="container pt-16 grid place-items-center">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {featureData.map((item) => (
          <FeatureCard key={item.title} title={item.title} icon={item.icon} />
        ))}
      </div>
    </section>
  )
}

export default Feature