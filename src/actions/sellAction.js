import {
    GET_MAX_ID_SELL,
    INSRT_NEW_SELL,
    INSRT_NEW_SELL_DETAIL,
    GET_ALL_SELL,
    GET_PRINT_SELL
  } from "../utils/commonType";  
  export const requestInsertOrder = (data, token) => {
    return {
      type: INSRT_NEW_SELL,
      data,
      token,
    };
  };

  export const requestMaxIdSell = (data) => {
    return {
      type: GET_MAX_ID_SELL,
      data,
    };
  };

  export const requestInsertSellDetail = (data, token) => {
    return {
      type: INSRT_NEW_SELL_DETAIL,
      data,
      token,
    };
  };

  export const requestGetAllSell = (data) => {
    return {
      type: GET_ALL_SELL,
      data,
    };
  };


  export const requestGetPrintSell = (data, token) => {
    return {
      type: GET_PRINT_SELL,
      data,
      token,
    };
  };
  