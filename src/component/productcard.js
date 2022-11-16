//   import Card from 'react-bootstrap/Card';
//    import React from "react";
//  import './style.css';
//  import { useNavigate,useSearchParams } from "react-router-dom";
//   import AppContext from "../contexts/AppContext";
//    import { useContext } from "react";
//  import {ProductList} from "./ProductList";
//  import { Button } from "bootstrap";



//   export default function ProductCard(){
//    const {ProductList} = useContext(AppContext);
 


//      const filteredBrand=filteredBrand;
//      const navigate=useNavigate();
//       const prod=ProductList;
//      console.log("product card:",prod)
//       return(
//           filteredBrand?.map(prod=>{
//         return(
//         <>
//        {
//           <Card onClick={()=>{navigate("Products/"+prod.id)}}    style={{ width: "19rem", margin:"0.7cm"  }}className="card">
//         <Card.Img variant="top" src={prod.photo}className="imgsize"/> 
//         <Card.Body className='crdclr'> 
//         <Card.Title className='crdhd'><b><u>{prod.Brand}</u></b></Card.Title>
//         <Card.Title className='cntnt1'><i>{prod.department}</i></Card.Title>
//        <Card.Title className='cntnt1'>{prod.details}</Card.Title>
//            <Card.Title className='cntnt1'>{prod.size}</Card.Title> 
//          <Card.Title className='cntnt1'><strike>₹{prod.oldprice}</strike></Card.Title> 
//         <Card.Title className='cntnt2'>₹{prod.newprice}</Card.Title>
//          <Button>ADD TO CART</Button>
//          </Card.Body>
//    </Card>
//         }
//         </>
//         )

//         })
//     )
//   }