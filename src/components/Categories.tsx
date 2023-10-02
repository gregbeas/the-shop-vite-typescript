import {GiMilkCarton, GiSlicedBread, GiSteak, GiFruitBowl, GiFishbone, GiSodaCan, GiFlour} from 'react-icons/gi';
import {LuCandy} from 'react-icons/lu';
import CategoryCard from './CategoryCard';

const categoryData = [
  {
    id: '#dairy',
    name: 'Dairy',
    count: '0 Products',
    img: <GiMilkCarton className="text-accentDark text-3xl lg:text-5xl"/>,
  },
  {
    id: '#bakery',
    name: 'Bakery',
    count: '5 Products',
    img: <GiSlicedBread className="text-accentDark text-3xl lg:text-5xl"/>,
  },
  {
    id: '#meat',
    name: 'Meat',
    count: '0 Products',
    img: <GiSteak className="text-accentDark text-3xl lg:text-5xl"/>,
  },
  {
    id: '#seafood',
    name: 'Seafood',
    count: '0 Products',
    img: <GiFishbone className="text-accentDark text-3xl lg:text-5xl"/>,
  },
  {
    id: '#produce',
    name: 'Produce',
    count: '5 Products',
    img: <GiFruitBowl className="text-accentDark text-3xl lg:text-5xl"/>,
  },
  {
    id: '#soft-drinks',
    name: 'Soft Drinks',
    count: '0 Products',
    img: <GiSodaCan className="text-accentDark text-3xl lg:text-5xl"/>
  },
  {
    id: '#sweets',
    name: 'Sweets',
    count: '0 Products',
    img: <LuCandy className="text-accentDark text-3xl lg:text-5xl"/>,
  },
  {
    id: '#dry-goods',
    name: 'Dry Goods',
    count: '0 Products',
    img: <GiFlour className="text-accentDark text-3xl lg:text-5xl" />,
  },
]

const Categories = () => {
  return (
    <section className='container pt-16' id="categories">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {categoryData.map(
          element => (
        <CategoryCard id={element.id} img={element.img} name={element.name} count={element.count} />
        ))}
      </div>
    </section>
  )
}

export default Categories