import feature2 from "../assets/feature-2.jpg"
import ProductCard from "./ProductCard"
import bake1 from "../assets/bake-1.jpg"
import bake2 from "../assets/bake-2.jpg"
import bake3 from "../assets/bake-3.jpg"
import bake4 from "../assets/bake-4.jpg"
import bake5 from "../assets/bake-5.jpg"


const bakeData = [
  {
    id: 0,
    img: bake1,
    name: 'Donut',
    price: '$1.59',
  },
  {
    id: 1,
    img: bake2,
    name: 'Sourdough',
    price: '$4.99',
  },
  {
    id: 2,
    img: bake3,
    name: 'Muffin',
    price: '$1.09',
  },
  {
    id: 3,
    img: bake4,
    name: 'French Baguette',
    price: '$3.49',
  },
  {
    id: 4,
    img: bake5,
    name: 'Artisan Loaf',
    price: '$7.69',
  },
]

const FeatureBakery = () => {
  return (
    <section className="container pt-16 scroll-mt-[25px] lg:scroll-mt-[50px]" id="bakery">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl text-accentDark">Bakery</h3>
          <p className="text-gray-600 mt-2">Buy guaranteed fresh baked goods at the best prices</p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature-button">All</button>
          <button className="text-gray-600 hover:text-accent">Baked Daily</button>
          <button className="text-gray-600 hover:text-accent">Dessert</button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img className="w-full h-full object-cover" src={feature2} alt="vegetbles" />
        </div>
        {bakeData.map((bake) => <ProductCard key={bake.id} img={bake.img} name={bake.name} price={bake.price} />)}
      </div>
    </section>
  )
}

export default FeatureBakery