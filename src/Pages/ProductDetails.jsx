import axios from 'axios';
import React,{useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
  const [products, setproducts] = useState([]);
  const{id}=useParams()

  useEffect(() => {
    const baseurl = "https://fakestoreapi.com/products/";
    const apidata = async () => {
      const data = await axios.get(`${baseurl}/${id}`);
      setproducts(data?.data);
    };
    apidata();
  }, []);
  console.log(products);
  return (
    <>
      <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto">
          {/* Image & Text Wrapper */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image */}
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img
                className="max-2-[200px] lg:max-w-sm"
                src={products.image}
                alt=""
              />
            </div>
            {/*Text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[26px] font-medium mb-2 max-w[450px] mx-auto">
                {products.title}
              </h1>
              <div className="text-xl text-red-500 font-medium mb-6">
                ${products.price}
              </div>
              <p className="mb-8">{products.description}</p>
              <button
                onClick={() => {}}
                className="bg-primary py-4 px-8 text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails