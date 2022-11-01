import {
    GET_ALL_ORDER,
    DELETE_BY_ID_ORDER,
    INSRT_NEW_ORDER,
    UPDATE_ORDER,
    GET_MAX_ID_ORDER,
    INSRT_NEW_ORDER_DETAIL,
    GET_SEARCH_ORDER,
    GET_PRINT_ORDER
  } from "../utils/commonType";
  
  export const requestGetAllOrder = (data) => {
    return {
      type: GET_ALL_ORDER,
      data,
    };
  };
  export const requestDeleteOrder = (data, token) => {
    return {
      type: DELETE_BY_ID_ORDER,
      data,
      token,
    };
  };
  
  export const requestInsertOrder = (data, token) => {
    return {
      type: INSRT_NEW_ORDER,
      data,
      token,
    };
  };
  export const requestUpdateOrder = (data, token) => {
    return {
      type: UPDATE_ORDER,
      data,
      token,
    };
  };

  export const requestGetMaxIdOrder = (data) => {
    return {
      type: GET_MAX_ID_ORDER,
      data,
    };
  };

  export const requestInsertOrderDetail = (data, token) => {
    return {
      type: INSRT_NEW_ORDER_DETAIL,
      data,
      token,
    };
  };
  
  export const requestGetSearchOrder = (data, token) => {
    return {
      type: GET_SEARCH_ORDER,
      data,
      token,
    };
  };


  export const requestGetPrintOrder = (data, token) => {
    return {
      type: GET_PRINT_ORDER,
      data,
      token,
    };
  };