import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);



  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    //step1: get ID
    for (const id in storedCart) {
      //step2: get product by using id
      const addedProduct = products.find(product => product.id === id);
      //step3: get quantityu of the product
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // add the addedProduct to savedCart
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];

    //if product doesn't exist, then set quantity = 1, else update the quantity by 1
    // let newCart = [];  
    // const exists = cart.find(pd => pd.id === product.id);
    // if (!exists) {
    //   product.quantity = 1;
    //   newCart = [...cart, product];
    // };
    // else {
    //   exists.quantity = exists.quantity + 1;
    //   const remaining = cart.filter(pd => pd.id !== product.id);
    //   newCart = [...remaining, exists];
  };


  setCart(newCart);
  addToDb(product.id);
};

return (
  <div className='shop-container'>
    <div className='products-container'>
      {
        products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          >
          </Product>
        ))
      }
    </div>
    <div className='cart-container'>
      <Cart cart={cart}></Cart>
    </div>
  </div>
);
};

export default Shop;
