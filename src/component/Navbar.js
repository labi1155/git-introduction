import React from "react";
import Searchbar from "./searchbar";
import Logo from "./logo";
import Button from 'react-bootstrap/Button';
import './style.css';

export default function Navbar1(){
    return(
        <>
      
    <div className='navigation1'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-EsxjLjJ9aemaaH4kO1dLvNCJdbWWDy2FPv_V9nkhQIfD3aV0l0EHP3MaBnr8ROeTv90&usqp=CAU"style={{width:"98px"}}/>
        <Button variant="outline-secondary"  style={{color:"white"}}>Hello<br/>Select your Address</Button>
        <Searchbar  />
        <Logo />
        </div>
        </>
    )
}