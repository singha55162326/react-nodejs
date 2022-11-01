import {
  GET_ALL_REPORT,
  GET_ALL_REPORT_SUCCESS,
  GET_ALL_REPORT_FAILED,
  GET_SUM_REPORT,
  GET_SUM_REPORT_SUCCESS,
  GET_SUM_REPORT_FAILED

} from "../utils/commonType";

const initialState = {
  error: false,
  success: false,
  actionType: null,
  isLoading: false,
  dataResultReport: null,
  dataResultSumReport: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_REPORT:
      return { ...state, isLoading: false, dataResultReport: null };
    case GET_ALL_REPORT_FAILED:
      return {
        ...state,
        actionType: GET_ALL_REPORT_FAILED,
        dataResultReport: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };
    case GET_ALL_REPORT_SUCCESS:
      return {
        ...state,
        actionType: GET_ALL_REPORT_SUCCESS,
        dataResultReport: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };

    case GET_SUM_REPORT:
      return { ...state, isLoading: false, dataResultSumReport: null };
    case GET_SUM_REPORT_FAILED:
      return {
        ...state,
        actionType: GET_SUM_REPORT_FAILED,
        dataResultSumReport: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };
    case GET_SUM_REPORT_SUCCESS:
      return {
        ...state,
        actionType: GET_SUM_REPORT_SUCCESS,
        dataResultSumReport: action.data,
        message: action.message,
        status: action.status,
        responseCode: action.responseCode,
      };



    default:
      return state;
  }
};
