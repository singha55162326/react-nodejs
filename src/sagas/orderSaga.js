import { takeEvery, put } from "redux-saga/effects";
import {
  GET_ALL_ORDER,
  GET_ALL_ORDER_FAILED,
  GET_ALL_ORDER_SUCCESS,

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
import { apiResultGetAllOrder, apiResultdataOrderDelete, apiResultdataOrderNew,
   apiResultdataOrderUpdate, apiResultGetMaxIdOrder, apiResultdataOrderDetailNew,apiResultGetSearchOrder,
   apiResultGetPrintOrder } from "../api/apiConfig";

export function* wachResultGetAllOrder() {
  yield takeEvery(GET_ALL_ORDER, callResultGetAllOrder);
}
function* callResultGetAllOrder(action) {
  try {
    const result = yield apiResultGetAllOrder(action.data);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: GET_ALL_ORDER_SUCCESS,
          status: result.data.status,
          data: result.data.order,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_ALL_ORDER_FAILED,
          status: result.data.status,
          data: result.data.order,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else if (result.status === 500) {
      yield put({
        type: GET_ALL_ORDER_FAILED,
        status: false,
        data: null,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    } else {
      yield put({
        type: GET_ALL_ORDER_FAILED,
        status: result.data.status,
        data: result.data.order,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: GET_ALL_ORDER_FAILED, data: null });
  }
}

export function* wachResultdataOrderDelete() {
  yield takeEvery(DELETE_BY_ID_ORDER, callResultdataOrderDelete);
}
function* callResultdataOrderDelete(action) {
  try {
    const result = yield apiResultdataOrderDelete(action.data, action.token);
    console.log("result:", result);
    console.log("status:", result.status);
    console.log("data.responseCode:", result.data.responseCode);
    if (result.status === 200) {
      if (result.data.responseCode === "00000") {
        yield put({
          type: DELETE_BY_ID_ORDER_SUCCESS,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: DELETE_BY_ID_ORDER_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } else {
      yield put({
        type: DELETE_BY_ID_ORDER_FAILED,
        status: result.data.status,
        data: result.data,
        message: result.data.message,
        responseCode: result.data.responseCode,
      });
    }
  } catch (error) {
    yield put({ type: DELETE_BY_ID_ORDER_FAILED, data: null });
  }
}


export function* wachResultdataOrderNew() {
    yield takeEvery(INSRT_NEW_ORDER, callResultdataOrderNew);
  }
  function* callResultdataOrderNew(action) {
    try {
      const result = yield apiResultdataOrderNew(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: INSRT_NEW_ORDER_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: INSRT_NEW_ORDER_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: INSRT_NEW_ORDER_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: INSRT_NEW_ORDER_FAILED, data: null });
    }
  }


  export function* wachResultdataOrderUpdate() {
    yield takeEvery(UPDATE_ORDER, callResultdataOrderUpdate);
  }
  function* callResultdataOrderUpdate(action) {
    try {
      const result = yield apiResultdataOrderUpdate(action.data, action.token );
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: UPDATE_ORDER_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: UPDATE_ORDER_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: UPDATE_ORDER_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: UPDATE_ORDER_FAILED, data: null });
    }
  }


  export function* wachResultGetMaxIdOrder() {
    yield takeEvery(GET_MAX_ID_ORDER, callResultGetMaxIdOrder);
  }
  function* callResultGetMaxIdOrder(action) {
    try {
      const result = yield apiResultGetMaxIdOrder(action.data);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: GET_MAX_ID_ORDER_SUCCESS,
            status: result.data.status,
            data: result.data.order[0],
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: GET_MAX_ID_ORDER_FAILED,
            status: result.data.status,
            data: result.data.order,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else if (result.status === 500) {
        yield put({
          type: GET_MAX_ID_ORDER_FAILED,
          status: false,
          data: null,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_MAX_ID_ORDER_FAILED,
          status: result.data.status,
          data: result.data.order,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: GET_MAX_ID_ORDER_FAILED, data: null });
    }
  }


  export function* wachResultdataOrderDetailNew() {
    yield takeEvery(INSRT_NEW_ORDER_DETAIL, callResultdataOrderDetailNew);
  }
  function* callResultdataOrderDetailNew(action) {
    try {
      const result = yield apiResultdataOrderDetailNew(action.data, action.token);
      console.log("result:", result);
      console.log("status:", result.status);
      console.log("data.responseCode:", result.data.responseCode);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: INSRT_NEW_ORDER_DETAIL_SUCCESS,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: INSRT_NEW_ORDER_DETAIL_FAILED,
            status: result.data.status,
            data: result.data,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else {
        yield put({
          type: INSRT_NEW_ORDER_DETAIL_FAILED,
          status: result.data.status,
          data: result.data,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: INSRT_NEW_ORDER_DETAIL_FAILED, data: null });
    }
  }

  export function* wachResultGetSearchOrder() {
    yield takeEvery(GET_SEARCH_ORDER, callResultGetSearchOrder);
  }
  function* callResultGetSearchOrder(action) {
    try {
      const result = yield apiResultGetSearchOrder(action.data, action.token);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: GET_SEARCH_ORDER_SUCCESS,
            status: result.data.status,
            data: result.data.order,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: GET_SEARCH_ORDER_FAILED,
            status: result.data.status,
            data: result.data.Order,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else if (result.status === 500) {
        yield put({
          type: GET_SEARCH_ORDER_FAILED,
          status: false,
          data: null,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_SEARCH_ORDER_FAILED,
          status: result.data.status,
          data: result.data.Order,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: GET_SEARCH_ORDER_FAILED, data: null });
    }
  }


  export function* wachResultGetPrintOrder() {
    yield takeEvery(GET_PRINT_ORDER, callResultGetPrintOrder);
  }
  function* callResultGetPrintOrder(action) {
    try {
      const result = yield apiResultGetPrintOrder(action.data, action.token);
      if (result.status === 200) {
        if (result.data.responseCode === "00000") {
          yield put({
            type: GET_PRINT_ORDER_SUCCESS,
            status: result.data.status,
            data: result.data.order,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        } else {
          yield put({
            type: GET_PRINT_ORDER_FAILED,
            status: result.data.status,
            data: result.data.order,
            message: result.data.message,
            responseCode: result.data.responseCode,
          });
        }
      } else if (result.status === 500) {
        yield put({
          type: GET_PRINT_ORDER_FAILED,
          status: false,
          data: null,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      } else {
        yield put({
          type: GET_PRINT_ORDER_FAILED,
          status: result.data.status,
          data: result.data.order,
          message: result.data.message,
          responseCode: result.data.responseCode,
        });
      }
    } catch (error) {
      yield put({ type: GET_PRINT_ORDER_FAILED, data: null });
    }
  }
