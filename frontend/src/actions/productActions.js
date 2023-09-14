import {
    ALL_PRODUCT_REQUEST,
 ALL_PRODUCT_SUCCESS,
 ALL_PRODUCT_FAIL,
 CLEAR_ERRORS,
 PRODUCTDETAILS_REQUEST,
 PRODUCTDETAILS_SUCCESS,
 PRODUCTDETAILS_FAIL,
} from "../constants/productsConstants";

import axios from 'axios'
export const getproduct=(keyword="",currentPage=1,price=[0,25000])=> async(dispatch)=>{
    try{
    dispatch({type:ALL_PRODUCT_REQUEST})
    let link =`/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`
    const {data} =await axios.get(link);
    dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload:data,
    });
}catch(error)
{
    dispatch({
        type:ALL_PRODUCT_FAIL,
        error:error.response.data.message
    })
}
}


export const getproductDetail=(id)=>async(dispatch)=>{
    try{
        dispatch({type:PRODUCTDETAILS_REQUEST})
        const { data } = await axios.get(`/api/v1/product/${id}`);
        dispatch({
            type:PRODUCTDETAILS_SUCCESS,
            payload:data
        });
    }catch(error)
    {
        dispatch({
            type:PRODUCTDETAILS_FAIL,
            error:error.response.data.message
        });

    }
}
export const clearError=()=>async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}