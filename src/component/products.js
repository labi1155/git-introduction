import React from "react";
import ProductFilter from "./ProductFilter";
import {ProductList} from "./ProductList";
import ProductCard from './productcard';
import './style.css';
export default function Products(){
    return(
        <>
        <ProductFilter/>
        {/* <ProductCard/> */}
        {/* <ProductFilter ProductList={ProductList} search1={props.search1} search2={props.search2} />  */}
        </>
    )
    }