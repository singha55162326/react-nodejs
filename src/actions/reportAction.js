import {
    GET_ALL_REPORT,
    GET_SUM_REPORT
  } from "../utils/commonType";  
  export const requestGetReport = (data, token) => {
    return {
      type: GET_ALL_REPORT,
      data,
      token,
    };
  };

  export const requestGetSumReport = (token) => {
    return {
      type: GET_SUM_REPORT,
      token,
    };
  };
