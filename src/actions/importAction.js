import {
    INSRT_NEW_IMPORT,
    GET_MAX_ID_IMPORT,
    INSRT_NEW_IMPORT_DETAIL,
    GET_PRINT_IMPORT
  } from "../utils/commonType";

  
  export const requestInsertImport = (data, token) => {
    return {
      type: INSRT_NEW_IMPORT,
      data,
      token,
    };
  };
  export const requestGetMaxIdImport = (data) => {
    return {
      type: GET_MAX_ID_IMPORT,
      data,
    };
  };

  export const requestInsertImportDetail = (data, token) => {
    return {
      type: INSRT_NEW_IMPORT_DETAIL,
      data,
      token,
    };
  };

  export const requestGetPrintImport = (data, token) => {
    return {
      type: GET_PRINT_IMPORT,
      data,
      token,
    };
  };