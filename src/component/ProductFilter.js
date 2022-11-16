import React from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate,useSearchParams } from "react-router-dom";
import AppContext from "../contexts/AppContext";
import { useContext } from "react";


export default function ProductFilter(){
    const {search1,search2,ProductList} = useContext(AppContext);
    console.log("filter context:",search1,search2,ProductList);


    const navigate=useNavigate();
    const filtered=ProductList.filter((p)=>{
        return p.Brand.indexOf(search1)>-1;
       });
    const Filter=filtered.filter((m)=>{
        return m.department.indexOf(search2)>-1
        
    })
    console.log("Filter",Filter)
    
       return(
        <>
        <div className="d-flex flex-row" style={{display:"flex",flexWrap:"wrap"}}>{
            Filter?.map((prod)=>{
                return(
                    
                    <>
                   {/* <Button>Add to cart</Button>  */}
        <Card onClick={()=>{navigate("Products/"+prod.id)}}  
        style={{ width: "19rem", margin:"0.7cm"  }}className="card">
                     <Card.Img variant="top" src={prod.photo}className="imgsize"/> 
                     <Card.Body className='crdclr'> 
                     <Card.Title className='crdhd'><b><u>{prod.Brand}</u></b></Card.Title>
                     <Card.Title className='cntnt1'><i>{prod.department}</i></Card.Title>
                     <Card.Title className='cntnt1'>{prod.details}</Card.Title>
                     {/* <Card.Title className='cntnt1'>{prod.size}</Card.Title>  */}
                     <Card.Title className='cntnt1'><strike>₹{prod.oldprice}</strike></Card.Title>
                     <Card.Title className='cntnt2'>₹{prod.newprice}</Card.Title>
                    
                     </Card.Body>
                      
                </Card>
                
          
                    </>
                )
            })
            }
        </div>
        </>
       )
}
   