import {useParams}from "react-router-dom"
import React,{useEffect} from "react";
import Card from 'react-bootstrap/Card';
import './style.css';
import { useNavigate,useSearchParams } from "react-router-dom";
import { ProductList } from './ProductList';

export  default function MobileSearch(){
    const navigate=useNavigate();
    const[searchParams]=useSearchParams();
    const sortType=searchParams.get('type');
    const sortColor=searchParams.get('color');
    console.log("sort params:",sortType,sortColor);

    const Filter=ProductList?.filter((v)=>{
        return v.Brand===sortType
    }
    );
    const Filter1=Filter?.filter((v)=>{
        return v.color===sortColor
    }
    );
    console.log("Thisis a test for sorting:",sortColor,sortType)
    return(
        Filter1?.map(prod=>{
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