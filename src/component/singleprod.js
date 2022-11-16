import React,{useEffect ,useContext, useState} from "react";
import {useParams}from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {ProductList} from "./ProductList";
import './style.css';
import  {Button}  from "react-bootstrap";
import AppContext from "../contexts/AppContext";

export default function SingleProduct(){

    const { addItemToCart,removeItem } = useContext(AppContext);

    let params=useParams();
    const productId=params.productId;
    useEffect(()=>{
        console.log("single product",productId)},[productId])
        const Filter=ProductList?.filter((prod)=>{
            return prod.id==productId
        });
        return(
            Filter?.map(prod=>{
                return <div className="d-flex flex-column">
                    <h1>details of product:{productId}</h1>
                    <Card style={{ width: "50rem", height:"40rem", margin:"0.7cm"  }}className="card">
                     <Card.Img variant="top" src={prod.photo}className="imgsize"/> 
                     <Card.Body className='crdclr1'> 
                     <Card.Title className='crdhd'><b><u>{prod.Brand}</u></b></Card.Title>
                     <Card.Title className='cntnt1'><i>{prod.department}</i></Card.Title>
                     <Card.Title className='cntnt1'>{prod.details}</Card.Title>
                     {/* <Card.Title className='cntnt1'>{prod.size}</Card.Title>  */}
                     <Card.Title className='cntnt1'><strike>₹{prod.oldprice}</strike></Card.Title>
                     <Card.Title className='cntnt2'>₹{prod.newprice}</Card.Title>
                     <Button onClick={() => addItemToCart(prod)}>Add-to cart</Button>
                     </Card.Body>
                </Card>
                    
                </div>
            
            }
        )
        )
    }

