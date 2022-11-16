import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";

import './style.css';
import AppContext from "../contexts/AppContext";
import { useContext } from "react";
export default function Logo(){
    const navigate=useNavigate();
    const {cartItems}=useContext(AppContext)
    const {WishListItems}=useContext(AppContext)
    return(
        <>
       <div>
       <Button variant="outline-secondary" style={{color:"white"}}>Hello,Sign in <br/>Accounts & Lists</Button>
       <Button variant="outline-secondary"  style={{color:"white"}}>Returns <br/>&Orders</Button>
       <Button   variant= "secondary" onClick={()=>navigate("/WishList")}>WishList<br/><Badge  bg="secondary">{WishListItems.length}</Badge>
    </Button>
       < Button variant="secondary"  onClick={()=> navigate("/AddtoCart")}>
       <img src="https://www.bing.com/th?id=OIP.fRJLrwYBzn8XaMG6rBOS3AHaFB&w=154&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" className="cart"/><Badge bg="secondary">{cartItems.length}</Badge>
       </Button>

      {/* <img src="https://www.bing.com/th?id=OIP.fRJLrwYBzn8XaMG6rBOS3AHaFB&w=154&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"style={{width:"60px",height:"54px"}}/> */}
       
       </div>
        </>
    )
}
