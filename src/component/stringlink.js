import './style.css';
import AppContext from "../contexts/AppContext";
import { useContext } from "react";
export  default function Stringlink(){

    const {filtersearch} = useContext(AppContext);
    console.log("Stringlink context:",Stringlink);
    

function sidefltr(box){
   filtersearch(box);
}
    return(
        <>
        <div><b>Department </b></div>
        <div >
            <a onClick={()=>{
                sidefltr('Mens Running Shoes')
            }} className="stringlink">Mens Running Shoes</a><br/>
            <a onClick={()=>{
                sidefltr('Womens Running Shoes')
            }} className="stringlink">Womens's Running Shoes</a><br/>
            <a onClick={()=>{
                sidefltr('Mens Walking Shoes')
            }} className="stringlink">Men's Walking Shoes</a><br/>
            <a onClick={()=>{
                sidefltr('Womens Athletic Shoes')
            }} className="stringlink">Womens Athletic Shoes</a><br/>
            <a onClick={()=>{
                sidefltr('Girls Athletic Shoes')
            }} className="stringlink">Girls Athletic Shoes</a><br/>
            <a  onClick={()=>{
                sidefltr('Boys Athletic Shoes')
            }} className="stringlink">Boys Athletic Shoes</a><br/>
            <a onClick={()=>{
                sidefltr('Womens Walking Shoes')
            }} className="stringlink">Womens Walking Shoes</a>
            
        </div>
        </>
    )
}