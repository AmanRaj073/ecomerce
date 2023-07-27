import React,{useContext} from 'react'
import Product from './Product'
import  {ProductContext} from "../Contexts/ProductContex";
const Home = () => {
    // Get Product from ProductContext
    const data = useContext(ProductContext);

    // Filter Category only Mens,Womens
    const filterProducts = data.filter((item) => {
      return (
        item.category === "men's clothing" ||
        item.category === "women's clothing"
      );
    }); 
  return (
    <>
      <div>
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:x-0">
              {filterProducts.map((product) => {
                return (
                    <Product product={product} key={product.id} />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home