
import React, { Fragment, useEffect } from 'react';
import './productdetail.css';
// import phone from '../../images/phone.jpg'
import Loader from "../layout/Loader/Loader";
import { clearError, getproductDetail } from "../../actions/productActions";
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-material-ui-carousel'
//import {useAlert} from 'react-alert'
import ReviewCard from './ReviewCard';


const ProductDetail = () => {
    const dispatch = useDispatch();
    //const alert=useAlert();
    const { id } = useParams();
     const {product,loading,error}=useSelector((state)=>state.productDetail)

    useEffect(() => {
      if(error)
      {
      //  alert.error(error)
        dispatch(clearError())
      }
        dispatch(getproductDetail(id));
    }, [dispatch,id,error]);
  return (
  <Fragment>
    {loading?<Loader></Loader>:(
        <Fragment>
        <div className='ProductDetails'>
          <div>
             {/* <Carousel> */}
              {
                product.images && product.images.map((item,i)=>(
                  <img
                  className="CarouselImaage"
                  key={item.url}
                  src={item.url}
                  alt={`${i}Slide`}
                  />
                ))
              }
            {/* </Carousel> */}
          </div> 
          
          <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                {/* <Rating {...options} /> */}
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    {/* <button onClick={decreaseQuantity}>-</button> */}
                    {/* <input readOnly type="number" value={quantity} /> */}
                    {/* <button onClick={increaseQuantity}>+</button> */}
                  </div>
                  <button
                    disabled={product.Stock < 1 ? true : false}
                    // onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>
                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>    
          </div>  
          <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>
              <button className="submitReview">
                Submit Review
              </button>
          </div>    
        </div>
        <h3 className="reviewsHeading">REVIEWS</h3>
        {product.reviews && product.reviews[0] ? (
          <div className='reviews'>
            {product.reviews && product.reviews.map((review)=>
            <ReviewCard review={review}></ReviewCard>)
            }
          </div>
        ):(<p className="noReviews">Not any reviews</p>)}
        </Fragment>
    )}
  </Fragment> 
  )
}

export default ProductDetail
