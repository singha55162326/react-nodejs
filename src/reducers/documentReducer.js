import {
    GET_ALL_DOCUMENT,
    GET_ALL_DOCUMENT_SUCCESS,
    GET_ALL_DOCUMENT_FAILED,
    DELETE_BY_ID_DOCUMENT,
    DELETE_BY_ID_DOCUMENT_FAILED,
    DELETE_BY_ID_DOCUMENT_SUCCESS,
    INSRT_NEW_DOCUMENT,
    INSRT_NEW_DOCUMENT_FAILED,
    INSRT_NEW_DOCUMENT_SUCCESS,
    UPDATE_DOCUMENT,
    UPDATE_DOCUMENT_FAILED,
    UPDATE_DOCUMENT_SUCCESS,
    GET_ALL_DOCUMENT_BY_ID,
    GET_ALL_DOCUMENT_BY_ID_FAILED,
    GET_ALL_DOCUMENT_BY_ID_SUCCESS
  } from "../utils/commonType";
  
  const initialState = {
    error: false,
    success: false,
    actionType: null,
    isLoading: false,
    dataResultDocument: null,
    dataResultDocumentDelete: null,
    dataResultDocumentNew: null,
    dataResultDocumentUpdate: null,
    dataResultDocumentById: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_DOCUMENT:
        return { ...state, isLoading: false, dataResultDocument: null };
      case GET_ALL_DOCUMENT_FAILED:
        return {
          ...state,
          actionType: GET_ALL_DOCUMENT_FAILED,
          dataResultDocument: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case GET_ALL_DOCUMENT_SUCCESS:
        return {
          ...state,
          actionType: GET_ALL_DOCUMENT_SUCCESS,
          dataResultDocument: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case DELETE_BY_ID_DOCUMENT:
        return { ...state, isLoading: false, dataResultDocumentDelete: null };
      case DELETE_BY_ID_DOCUMENT_FAILED:
        return {
          ...state,
          actionType: DELETE_BY_ID_DOCUMENT_FAILED,
          dataResultDocumentDelete: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case DELETE_BY_ID_DOCUMENT_SUCCESS:
        return {
          ...state,
          actionType: DELETE_BY_ID_DOCUMENT_SUCCESS,
          dataResultDocumentDelete: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      case INSRT_NEW_DOCUMENT:
        return { ...state, isLoading: false, dataResultDocumentNew: null };
      case INSRT_NEW_DOCUMENT_FAILED:
        return {
          ...state,
          actionType: INSRT_NEW_DOCUMENT_FAILED,
          dataResultDocumentNew: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case INSRT_NEW_DOCUMENT_SUCCESS:
        return {
          ...state,
          actionType: INSRT_NEW_DOCUMENT_SUCCESS,
          dataResultDocumentNew: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      case UPDATE_DOCUMENT:
        return { ...state, isLoading: false, dataResultDocumentUpdate: null };
      case UPDATE_DOCUMENT_FAILED:
        return {
          ...state,
          actionType: UPDATE_DOCUMENT_FAILED,
          dataResultDocumentUpdate: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case UPDATE_DOCUMENT_SUCCESS:
        return {
          ...state,
          actionType: UPDATE_DOCUMENT_SUCCESS,
          dataResultDocumentUpdate: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };

        case GET_ALL_DOCUMENT_BY_ID:
        return { ...state, isLoading: false, dataResultDocumentById: null };
      case GET_ALL_DOCUMENT_BY_ID_FAILED:
        return {
          ...state,
          actionType: GET_ALL_DOCUMENT_BY_ID_FAILED,
          dataResultDocumentById: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case GET_ALL_DOCUMENT_BY_ID_SUCCESS:
        return {
          ...state,
          actionType: GET_ALL_DOCUMENT_BY_ID_SUCCESS,
          dataResultDocumentById: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
  
      default:
        return state;
    }
  };
  