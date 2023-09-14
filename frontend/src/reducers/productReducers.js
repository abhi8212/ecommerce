import {
    ALL_PRODUCT_REQUEST,
 ALL_PRODUCT_SUCCESS,
 ALL_PRODUCT_FAIL,
 CLEAR_ERRORS,

 PRODUCTDETAILS_REQUEST,
PRODUCTDETAILS_SUCCESS,
PRODUCTDETAILS_FAIL,
 CLEAR_ERROR,

} from "../constants/productsConstants";

export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case ALL_PRODUCT_REQUEST:
        return {
          loading: true,
          products: [],
        };
      case ALL_PRODUCT_SUCCESS:
        return {
          loading: false,
          products: action.payload.products,
          productsCount: action.payload.productsCount,
          resultPerPage: action.payload.resultPerPage,
          filteredProductsCount:action.payload.filteredProductsCount
        };
      case ALL_PRODUCT_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };

export  const productDetailReducer= (state={product:{}},action)=>{
  switch(action.type)
  {
    case PRODUCTDETAILS_REQUEST:
      return{
        loading:true,
        product:{},
      };
      case PRODUCTDETAILS_SUCCESS:
        return{
          loading:false,
          product:action.payload.product
        };
        case PRODUCTDETAILS_FAIL:
          return{
            loading:false,
            error:action.payload
          };
          case  CLEAR_ERROR:
            return{
              ...state,
              error:null
            };
      default:
        {
          return state
        }
  }
 };