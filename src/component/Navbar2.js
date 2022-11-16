import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './style.css';
export default function Navbar2(){
    
   const navLinks = [
    {
        text:"Home",
       link:'/'
   },


    {
         text:"Today's Deals",
        link:'/Todays Deals'
    },
    {
        text:"Customer Service",
        link:'/Customer Service'
        
   },
    {
        text:"Registry",
         link:'/Registry'
    },
    {
        text:"Customer Service",
         link:'/giftcard'
     },
     {
        text:"sell",
      link:'/sell'
  },
  {
    text:"mobiles",
    link:'/mobiles'
},
    

  ];
    return(
        <>
       
          
            <Navbar expand="lg" bg="light" variant="dark">
            <Container>
            {
          
                    navLinks.map((n)=>{
                        return(
                    <Nav.Link className="navigation2" href={n.link}>{n.text}</Nav.Link>
                   
                        )
                    })
                }
                   
           
           
            
           </Container>
           </Navbar>  
</>
    );
            }
             
    
    
