import Card from 'react-bootstrap/Card';
import './style.css';
import { useNavigate,useSearchParams } from "react-router-dom";
import {ProductList} from "./ProductList";

export const MobileView=()=> {

    const Filter=ProductList?.filter((prod)=>{
        return prod.type== "mobiles"
    });
    console.log("From mobview test:",Filter)

     return( 
        Filter?.map(prod=>{
            return(
                       <>
                       {
                        <Card    style={{ width: "19rem", margin:"0.7cm"  }}className="card">
                        <Card.Img variant="top" src={prod.photo}className="imgsize"/> 
                        <Card.Body className='crdclr'> 
                        <Card.Title className='crdhd'><b><u>{prod.Brand}</u></b></Card.Title>
                        <Card.Title className='cntnt1'><i>{prod.department}</i></Card.Title>
                        <Card.Title className='cntnt1'>{prod.details}</Card.Title>
                        {/* <Card.Title className='cntnt1'>{prod.size}</Card.Title> */}
                        <Card.Title className='cntnt1'><strike>₹{prod.oldprice}</strike></Card.Title>
                        <Card.Title className='cntnt2'>₹{prod.newprice}</Card.Title>
                        </Card.Body>
                   </Card>
                       }
                       </>
                       )
        })
     )
}