import {
  GET_ALL_ORDER,
  GET_ALL_ORDER_SUCCESS,
  GET_ALL_ORDER_FAILED,
  DELETE_BY_ID_ORDER,
  DELETE_BY_ID_ORDER_FAILED,
  DELETE_BY_ID_ORDER_SUCCESS,
  INSRT_NEW_ORDER,
  INSRT_NEW_ORDER_FAILED,
  INSRT_NEW_ORDER_SUCCESS,
  UPDATE_ORDER,
  UPDATE_ORDER_FAILED,
  UPDATE_ORDER_SUCCESS,
  GET_MAX_ID_ORDER,
  GET_MAX_ID_ORDER_SUCCESS,
  GET_MAX_ID_ORDER_FAILED,

  INSRT_NEW_ORDER_DETAIL,
  INSRT_NEW_ORDER_DETAIL_SUCCESS,
  INSRT_NEW_ORDER_DETAIL_FAILED,

  GET_SEARCH_ORDER,
  GET_SEARCH_ORDER_SUCCESS,
  GET_SEARCH_ORDER_FAILED,

  GET_PRINT_ORDER,
  GET_PRINT_ORDER_SUCCESS,
  GET_PRINT_ORDER_FAILED

} from "../utils/commonType";

const initialState = {
  error: false,
  success: false,
  actionType: null,
  isLoading: false,
  dataResultOrder: null,
  dataResultOrderDelete: null,
  dataResultOrderNew: null,
  dataResultOrderUpdate: null,
  dataResultMaxIdOrder: null,
  dataResultOrderDetailNew: null,
  dataResultPrintOrder: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDER:
      return { ...state, isLoading: false, dataResultOrder: null };
    case GET_ALL_ORDER_FAILED:
      return {
        ...state,
        actionType: GET_ALL_ORDER_FAILED,
        dataResultOrder: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };
    case GET_ALL_ORDER_SUCCESS:
      return {
        ...state,
        actionType: GET_ALL_ORDER_SUCCESS,
        dataResultOrder: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };
    case DELETE_BY_ID_ORDER:
      return { ...state, isLoading: false, dataResultOrderDelete: null };
    case DELETE_BY_ID_ORDER_FAILED:
      return {
        ...state,
        actionType: DELETE_BY_ID_ORDER_FAILED,
        dataResultOrderDelete: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };
    case DELETE_BY_ID_ORDER_SUCCESS:
      return {
        ...state,
        actionType: DELETE_BY_ID_ORDER_SUCCESS,
        dataResultOrderDelete: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };

    case INSRT_NEW_ORDER:
      return { ...state, isLoading: false, dataResultOrderNew: null };
    case INSRT_NEW_ORDER_FAILED:
      return {
        ...state,
        actionType: INSRT_NEW_ORDER_FAILED,
        dataResultOrderNew: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };
    case INSRT_NEW_ORDER_SUCCESS:
      return {
        ...state,
        actionType: INSRT_NEW_ORDER_SUCCESS,
        dataResultOrderNew: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };

    case UPDATE_ORDER:
      return { ...state, isLoading: false, dataResultOrderUpdate: null };
    case UPDATE_ORDER_FAILED:
      return {
        ...state,
        actionType: UPDATE_ORDER_FAILED,
        dataResultOrderUpdate: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };
    case UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        actionType: UPDATE_ORDER_SUCCESS,
        dataResultOrderUpdate: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };

    case GET_MAX_ID_ORDER:
      return { ...state, isLoading: false, dataResultMaxIdOrder: null };
    case GET_MAX_ID_ORDER_FAILED:
      return {
        ...state,
        actionType: GET_MAX_ID_ORDER_FAILED,
        dataResultMaxIdOrder: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };
    case GET_MAX_ID_ORDER_SUCCESS:
      return {
        ...state,
        actionType: GET_MAX_ID_ORDER_SUCCESS,
        dataResultMaxIdOrder: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };

    case INSRT_NEW_ORDER_DETAIL:
      return { ...state, isLoading: false, dataResultOrderDetailNew: null };
    case INSRT_NEW_ORDER_DETAIL_FAILED:
      return {
        ...state,
        actionType: INSRT_NEW_ORDER_DETAIL_FAILED,
        dataResultOrderDetailNew: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };
    case INSRT_NEW_ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        actionType: INSRT_NEW_ORDER_DETAIL_SUCCESS,
        dataResultOrderDetailNew: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };

    case GET_SEARCH_ORDER:
      return { ...state, isLoading: false, dataResultGetSearchOrderNew: null };
    case GET_SEARCH_ORDER_FAILED:
      return {
        ...state,
        actionType: GET_SEARCH_ORDER_FAILED,
        dataResultGetSearchOrderNew: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };
    case GET_SEARCH_ORDER_SUCCESS:
      return {
        ...state,
        actionType: GET_SEARCH_ORDER_SUCCESS,
        dataResultGetSearchOrderNew: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };

      case GET_PRINT_ORDER:
        return { ...state, isLoading: false, dataResultPrintOrder: null };
      case GET_PRINT_ORDER_FAILED:
        return {
          ...state,
          actionType: GET_PRINT_ORDER_FAILED,
          dataResultPrintOrder: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };
      case GET_PRINT_ORDER_SUCCESS:
        return {
          ...state,
          actionType: GET_PRINT_ORDER_SUCCESS,
          dataResultPrintOrder: action.data,
          message: action.message,
          status: action.status,
          responseCode: action.responseCode,
        };

    default:
      return state;
  }
};
