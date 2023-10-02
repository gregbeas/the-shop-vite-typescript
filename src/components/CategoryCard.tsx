interface propsType {
  img: any;
  name: string;
  count: string;
  id: string;
}

const CategoryCard: React.FC<propsType> = ({ img, name, count, id }) => {
  return (
    <>
      <a href={id}>
        <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-full">
          <div className="flex justify-between items-center p-6">
            <div className="space-y-4">
              <h3 className="font-md text-base sm:text-lg">{name}</h3>
              <p className="text-gray-500 text-sm">{count}</p>
            </div>
            {img}
          </div>
        </div>
      </a>
    </>
  );
};

export default CategoryCard;
