// import { useContext, useEffect, useState } from 'react';
import Title from './Title';
// import ProductItem from '../components/ProductItem';
import CategoryItem from './CategoryItem';
import { categories } from '../assets/constants';

const CattegoriesComponent = () => {
  // const [latestProducts, setLatestProducts] = useState([]);

  // useEffect(() => {
  //   const latest = products.slice(0, 10);
  //   setLatestProducts(latest);
  // }, []);

  return (
    <div className="my-10">
      <div className="py-8 text-center text-3xl">
        <Title text1={'CATEGORII'} text2={'PRODUSE'} />
      </div>

      {/* Rendering Products */}
      <div className="grid items-center justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6 " >
        {categories.map((category, idx) => (
          <CategoryItem
            key={idx}
            id={category._id}
            src={category.src}
            name={category.name}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CattegoriesComponent;
