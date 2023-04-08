import React, { useContext } from "react";
import { CartContext, ProductContext } from "../App";
import ProductCart from "./Cart/ProductCart";
import { addToDb } from "./Utils/fakedb";
const Shop = () => {
  const products = useContext(ProductContext || []);
  const [cart, setCart]=useContext(CartContext || [])

  const handleAddToCart =  product => {
    let newCart = []
    const exists = cart.find(
      existingProduct => existingProduct.id === product.id
    )
    if (!exists) {
      product.quantity = 1
      newCart = [...cart, product]
    } else {
      const rest = cart.filter(
        existingProduct => existingProduct.id !== product.id
      )
      exists.quantity = exists.quantity + 1
      newCart = [...rest, exists]
    }
    addToDb(product.id)
    setCart(newCart)
  };

  return (
    <div className="my-container">
      <div className="product-container">
        {products.map((product) => (
          <ProductCart
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default Shop;
