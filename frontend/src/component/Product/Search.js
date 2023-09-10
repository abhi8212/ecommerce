import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import './Search.css'

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate('/products');
    }
  };

  return (
    <>
      <div>
        <form className="search-bar" onSubmit={searchSubmitHandler}>
          <input
            type="text"
            className="search-input"
            placeholder="Search a product..."
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit" className="search-button" value="Search">
            <i className="fa fa-search"></i>
            <FaSearch></FaSearch>
          </button>
        </form>
      </div>

    </>
  );
};

export default Search;
