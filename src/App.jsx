import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { toast } from 'react-hot-toast'
import { createContext, useState } from "react";

export const ProductContext = createContext([])
export const CartContext = createContext([])

const App = () => {
  const { products, initialCart } = useLoaderData()
  const [cart, setCart] = useState(initialCart)
  return (
    <>
      <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
      <Header></Header>
      <div className="md:min-h-[calc(100vh-158px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
      </CartContext.Provider>
      </ProductContext.Provider>
    </>
  );
};

export default App;
