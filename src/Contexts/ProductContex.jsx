import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const baseurl = "https://fakestoreapi.com/products";
    const apidata = async () => {
      const data = await axios.get(baseurl);
      setproducts(data?.data);
    };
    apidata();
  }, []);
  return <ProductContext.Provider value={products}>
    {children}
  </ProductContext.Provider>;
};

export default ProductProvider;

