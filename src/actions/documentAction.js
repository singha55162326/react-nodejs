import {
    GET_ALL_DOCUMENT,
    DELETE_BY_ID_DOCUMENT,
    INSRT_NEW_DOCUMENT,
    UPDATE_DOCUMENT,
    GET_ALL_DOCUMENT_BY_ID
  } from "../utils/commonType";
  
  export const requestGetAllDocument = (data) => {
    return {
      type: GET_ALL_DOCUMENT,
      data,
    };
  };
  export const requestDeleteDocument = (data, token) => {
    return {
      type: DELETE_BY_ID_DOCUMENT,
      data,
      token,
    };
  };
  
  export const requestInsertDocument = (data, token) => {
    return {
      type: INSRT_NEW_DOCUMENT,
      data,
      token,
    };
  };
  export const requestUpdateDocument = (data, token) => {
    return {
      type: UPDATE_DOCUMENT,
      data,
      token,
    };
  };

  export const requestGetByIdDocument = (data,token) => {
    return {
      type: GET_ALL_DOCUMENT_BY_ID,
      data,
      token,
    };
  };
  