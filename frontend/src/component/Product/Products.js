import React, { Fragment, useEffect, useState } from 'react';
import { getproduct } from '../../actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../Home/ProductCard.js';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Loader from "../layout/Loader/Loader";
import './products.css'

const Products = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { products,productCount,resultPerPage ,loading} = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1); // Current page state

  const handlePageClick = (selectedPage) => {
    console.log('Page clicked:', selectedPage);
    setCurrentPage(selectedPage.selected + 1);
  };
  
  useEffect(() => {
    dispatch(getproduct(keyword),currentPage);
  }, [dispatch, keyword,currentPage]);



  return (
   <Fragment>
    {loading ? <Loader></Loader>:(
       <div>
       <h2 className="homeHeading">All</h2>
       <div className="container" id="container">
         {products &&
           products.map((product) => (
             <Product key={product._id} product={product}></Product>
           ))}
       </div>
       <div className="paginationBox">
         <ReactPaginate
           pageCount={Math.ceil(productCount/resultPerPage)} // Calculate the page count based on the total items and results per page  
           pageRangeDisplayed={5}
           activePage={currentPage - 1} // Adjusted for zero-based indexing
           onPageChange={handlePageClick}
           marginPagesDisplayed={1} // Number of pages to display at the beginning and end
           previousLabel="< Prev" // Previous page label
           nextLabel="Next >" // Next page label
           breakLabel="..." // Ellipsis label for page breaks
           containerClassName="pagination" // Class name for the pagination container
           activeClassName="pageItemActive" // Class name for the active page
           previousClassName="page-item" // Class name for the previous page
           nextClassName="page-item"// Class name for the next page
           pageClassName="page-item" // Class name for each page item
           breakClassName="break" // Class name for page breaks  
        />
       </div>
     </div>
    )}
   </Fragment>
  );
};

export default Products;
