import React, { useContext } from "react";
import AppContext from '../contexts/AppContext';
import Card from 'react-bootstrap/Card';
import { ProductList } from "./ProductList";
import './style.css';

export default function WishList(){
   
         const {
            WishListItems,
            
   
  } = useContext(AppContext);
  console.log("ProductCart", ProductList);
  return (
    <div>
       
      {WishListItems.map((ProductList) => {
        return (
           <div key={ProductList.id} >
        
     <Card 
             style={{ width: "20rem",margin:"8px"}}>
                <Card.Img variant="top" src={ProductList.photo}className="imgsize"/> 
                <Card.Body className="crdclr">
                  <Card.Title className="crdhd"><b>{ProductList.Brand}</b></Card.Title>
                  <Card.Title className="cntnt1">{ProductList.details}</Card.Title>
                  <Card.Title className="cntnt2">{ProductList.newprice}</Card.Title>
                  <Card.Title className="cntnt1"><strike>{ProductList.oldprice}</strike></Card.Title>
        </Card.Body>
           </Card><br/>  
            </div>
         ); 
        })} 
    </div>
  );
}