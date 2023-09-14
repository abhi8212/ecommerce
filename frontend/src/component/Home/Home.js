import React, { useEffect } from 'react'
import './Home.css'
import {getproduct} from "../../actions/productActions"
import {useSelector,useDispatch} from "react-redux"
import ProductCard from "./ProductCard.js"
//import { CgMouse } from "react-icons/all";
import { CgMouse } from "react-icons/cg";


const Home = () => {
  const dispatch =useDispatch();
  const {products} =useSelector(
    (state)=>state.products

  );
  useEffect(()=>{
    dispatch(getproduct())
  },[dispatch]);
  return (
    <div>
       <div className="banner"> 
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container">
              <button>
               Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          
          <div className='container' id='container'>
       {products && products.map((product)=> <ProductCard key={product._id} product={product}></ProductCard>)}
        </div> 
    </div>
  )
}
export default Home
