import React, { Fragment, useEffect, useState } from 'react'; // Import Component
import { getproduct } from '../../actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../Home/ProductCard.js';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Loader from "../layout/Loader/Loader";
import {Slider} from '@mui/material'; // Import Slider
import {Typography} from '@mui/material';

import './products.css';

const Products = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { products, productsCount, resultPerPage,filteredProductsCount, loading } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [price,setPrice]=useState([0,25000]);
  let count=filteredProductsCount;

  const priceChange=(event,newPrice)=>{
    setPrice(newPrice);
  }


  const handlePageClick = (selectedPage) => {
    console.log('Page clicked:', selectedPage);
    setCurrentPage(selectedPage.selected + 1);
  };

  useEffect(() => {
    dispatch(getproduct(keyword, currentPage,price));
  }, [dispatch, keyword, currentPage,price]);

  return (
    <Fragment>
      {loading ? <Loader /> : (
        <div>
          <h2 className="homeHeading">All</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product}></ProductCard>
              ))}
          </div>

          {/* slider for filtering product according to price */}
          <div className='filterBox'>
            <Typography>Price</Typography>
            <Slider
                getAriaLabel={() => 'Minimum distance shift'}
                value={price}
                onChange={priceChange}
                valueLabelDisplay="auto"
                aria-labelledby='range-slider'
                min={0}
                max={25000}
                color='primary'
            />
          </div>
        
        
         
           {productsCount<count && (
            <div className="paginationBox">
            <ReactPaginate 
              pageCount={Math.ceil(productsCount / resultPerPage)}
              pageRangeDisplayed={5}
              activePage={currentPage}
              onPageChange={handlePageClick}
              containerClassName="pagination"
              activeClassName="pageItemActive"
              previousLabel="< Prev"
              nextLabel="Next >"
              breakLabel="..."
              previousClassName="page-item"
              nextClassName="page-item"
              pageClassName="page-item"
              breakClassName="break"
            />
          </div>

           )};
         
        </div>
      )}
    </Fragment>
  );
};

export default Products;
