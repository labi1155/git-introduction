import React from "react";
import AppContext from "../contexts/AppContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ProductList } from './ProductList';

export default function AddtoCart(){

    const {
        cartItems,
        setCartItems,
        addItemToCart,
        incrementItem,
        decrementItem,
        removeItem,
        SaveLaterButton
    } = useContext(AppContext);
    console.log("ProductCart", ProductList);
    return(
        <div>
        {/* <span>AddtoCart</span> */}
      {cartItems.map((ProductList) => {
        return (
          <div key={ProductList.id} >
            <div >
              <img src={ProductList.photo} />
              <p>{ProductList.brand}</p>
            </div>
            <div>
              <Button onClick={() => incrementItem(ProductList)}>+</Button>
              <Button >{ProductList.qty}</Button>
              <Button  onClick={() =>decrementItem(ProductList)}>-</Button>
            </div>
            <div>
              <Button   onClick={() => removeItem(ProductList)}>
                Remove-from-cart
              </Button>
              <Button   onClick={() =>SaveLaterButton(ProductList)}>
                Save-for-Later
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}





   


    
    




        
        
