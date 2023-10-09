import feature1 from "../assets/feature-1.jpg"
import produceItems from "../data/produce-items.json"

import ProductCard from "./ProductCard"


const FeatureProduce = () => {
  return (
    <section className="container pt-16 scroll-mt-[25px] lg:scroll-mt-[50px]" id="produce">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl text-accentDark">Produce</h3>
          <p className="text-gray-600 mt-2">Buy guaranteed fresh fruits and veggies and the best prices</p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature-button">All</button>
          <button className="text-gray-600 hover:text-accent">Vegetables</button>
          <button className="text-gray-600 hover:text-accent">Fruit</button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img className="w-full h-full object-cover" src={feature1} alt="vegetbles" />
        </div>
        {produceItems.map((veg) => <ProductCard id={veg.id} key={veg.id} img={veg.img} name={veg.name} price={veg.price} />)}
      </div>
    </section>
  )
}

export default FeatureProduce